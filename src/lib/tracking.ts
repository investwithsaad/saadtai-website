/**
 * Umami Analytics Tracking Utility
 * Provides a consistent interface for tracking events throughout the application
 */

'use client'

import { UserData } from './meta-conversions'

declare global {
  interface Window {
    umami?: {
      track: (name: string, properties?: Record<string, string | number | boolean>) => void
    }
    fbq?: {
      (action: 'track', eventName: string, params?: Record<string, any>): void
      (action: 'trackCustom', eventName: string, params?: Record<string, any>): void
      (action: 'init', pixelId: string): void
    }
    hbspt?: {
      forms: {
        addEventListener: (event: string, callback: () => void) => void
        create: (config: { portalId: string; formId: string; target: string }) => void
      }
    }
    _hsq?: Array<unknown> & {
      push: (...args: unknown[]) => number
    }
  }
}

/**
 * Generate a unique event ID for deduplication between pixel and server-side events
 */
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
}

/**
 * Get cookie value by name (fallback method)
 */
function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined

  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return undefined
}

/**
 * Get Meta parameters from Parameter Builder (preferred) or fallback to manual cookies
 */
function getMetaParameters(): { fbp?: string; fbc?: string; fbi?: string } {
  // Try Parameter Builder first (official Meta approach)
  if (typeof window !== 'undefined' && window.CapiParamBuilder) {
    try {
      const params = window.CapiParamBuilder.getCollectedParams()
      if (params.fbp || params.fbc || params.fbi) {
        return params
      }
    } catch (error) {
      console.warn('Parameter Builder error, falling back to manual cookies:', error)
    }
  }

  // Fallback to manual cookie extraction
  return {
    fbp: getCookie('_fbp'),
    fbc: getCookie('_fbc'),
    fbi: getCookie('_fbi'),
  }
}

/**
 * Track event to Meta Pixel (client-side)
 */
function trackMetaPixel(
  eventName: string,
  params?: Record<string, any>,
  eventId?: string
) {
  if (typeof window !== 'undefined' && window.fbq) {
    const eventData = {
      ...params,
      ...(eventId && { eventID: eventId }),
    }
    window.fbq('track', eventName, eventData)
  }
}

/**
 * Track event to Meta Conversions API (server-side)
 */
async function trackMetaServerSide(
  eventName: string,
  params?: Record<string, any>,
  eventId?: string,
  userData?: UserData
) {
  if (typeof window === 'undefined') return // Only run client-side

  try {
    // Get Meta parameters (fbp, fbc, fbi) from Parameter Builder or cookies
    const { fbp, fbc, fbi } = getMetaParameters()

    await fetch('/api/meta/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Include cookies in request
      body: JSON.stringify({
        eventName,
        eventId: eventId || generateEventId(),
        eventSourceUrl: window.location.href,
        fbp,
        fbc,
        fbi, // Include IPv6 identifier from Parameter Builder
        userAgent: navigator.userAgent,
        customData: params,
        userData,
      }),
    })
  } catch (error) {
    console.error('Meta server-side tracking failed:', error)
    // Fail silently - analytics shouldn't break UX
  }
}

/**
 * Track event to both Meta Pixel AND Conversions API (dual mode)
 */
async function trackMetaDual(
  eventName: string,
  params?: Record<string, any>,
  userData?: UserData
) {
  const eventId = generateEventId()

  // Send to pixel (immediate)
  trackMetaPixel(eventName, params, eventId)

  // Send to server-side API (async, non-blocking)
  trackMetaServerSide(eventName, params, eventId, userData)
}

/**
 * Track page view to Meta (for key pages only)
 */
export function trackMetaPageView(pageName: string) {
  trackMetaDual('PageView', { page_name: pageName })
}

/**
 * Track chatbot schedule button click
 */
export function trackChatbotScheduleCall() {
  trackEvent('chatbot_schedule_call')
  trackMetaDual('Schedule', { source: 'chatbot' })
}

/**
 * Track a custom event in Umami Analytics
 * @param eventName - Name of the event (e.g., 'form_submit_intro_call')
 * @param properties - Optional properties to attach to the event
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.umami?.track) {
    window.umami.track(eventName, properties)
  }

  // Add Meta tracking for key events
  const metaEventMap: Record<string, string> = {
    cta_clicked: 'Lead',
    form_submit_lead_form: 'Lead',
    form_submit_contact_form: 'Contact',
    chatbot_session_start: 'InitiateCheckout',
    chatbot_schedule_call: 'Schedule',
  }

  const metaEventName = metaEventMap[eventName]
  if (metaEventName) {
    trackMetaDual(metaEventName, properties as Record<string, any>)
  }
}

/**
 * Track form submission
 * @param formType - Type of form (e.g., 'intro_call', 'referral', 'newsletter', 'partner_inquiry')
 * @param userData - Optional user data for Meta conversion tracking (email, phone, name, etc.)
 */
export function trackFormSubmission(formType: string, userData?: UserData) {
  trackEvent(`form_submit_${formType}`)

  // Meta tracking with user data
  trackMetaDual('Lead', { form_type: formType }, userData)
}

/**
 * Track chatbot session start
 */
export function trackChatbotSessionStart() {
  trackEvent("chatbot_session_start")
}

/**
 * Track chatbot message sent
 * @param topic - Topic or intent of the message
 * @param messageText - Raw user message (trimmed for privacy)
 */
export function trackChatbotMessage(topic?: string, messageText?: string) {
  const preview = messageText ? messageText.slice(0, 200) : undefined

  trackEvent("chatbot_message_sent", {
    ...(topic && { topic }),
    ...(preview && { message_preview: preview, message_length: messageText?.length ?? 0 }),
  })
}

/**
 * Track navigation click
 * @param linkName - Name/label of the link
 * @param destination - URL or page destination
 */
export function trackNavClick(linkName: string, destination?: string) {
  trackEvent("nav_click", {
    link: linkName,
    ...(destination && { destination }),
  })
}