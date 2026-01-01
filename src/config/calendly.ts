/**
 * Centralized Calendly Configuration
 *
 * Update these URLs with Saad's actual Calendly links.
 * All forms and CTAs reference these URLs.
 */

export const CALENDLY_CONFIG = {
  // Main discovery/intro call for general inquiries
  // Used by: Chatbot, intro forms, general contact CTAs
  discovery: 'https://calendly.com/saad-tai/discovery',

  // Intro/consultation call for standard inquiries
  // Used by: IntroCallForm, contact page
  introCall: 'https://calendly.com/saad-tai/intro-call',

  // Partner strategy call for business partnerships
  // Used by: PartnerInquiryForm, partnerships page
  partnerStrategy: 'https://calendly.com/saad-tai/partner-strategy-call',
}

/**
 * Helper function to build Calendly URL with pre-filled parameters
 * @param calendlyUrl - Base Calendly URL from config
 * @param params - Object with name, email, phone, and other contextual data
 * @returns Full Calendly URL with query parameters
 */
export function buildCalendlyUrl(
  calendlyUrl: string,
  params: {
    name?: string
    email?: string
    phone?: string
    context?: string
  } = {}
): string {
  const searchParams = new URLSearchParams()

  // Add month parameter (current month for Calendly)
  const now = new Date()
  const monthParam = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  searchParams.append('month', monthParam)

  // Add visitor context if provided
  if (params.name) {
    searchParams.append('name', params.name)
  }
  if (params.email) {
    searchParams.append('email', params.email)
  }
  if (params.phone) {
    searchParams.append('phone', params.phone)
  }
  if (params.context) {
    searchParams.append('a1', params.context)
  }

  return `${calendlyUrl}?${searchParams.toString()}`
}
