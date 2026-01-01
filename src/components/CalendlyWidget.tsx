'use client'

import { useEffect } from 'react'
import { COLORS } from '@/lib/colors'

declare global {
  interface Window {
    Calendly?: any
  }
}

interface CalendlyWidgetProps {
  name: string
  email: string
  dealContext: string
  calendlyUrl: string
  height?: string
}

export function CalendlyWidget({ name, email, dealContext, height = '700px', calendlyUrl }: CalendlyWidgetProps) {
  // Build URL with prefilled parameters
  const params = new URLSearchParams({
    hide_event_type_details: '1',
    hide_gdpr_banner: '1',
    text_color: COLORS.dark.replace('#', ''),
    primary_color: COLORS.primary.replace('#', ''),
    ...(name && { name }),
    ...(email && { email }),
    ...(dealContext && { a1: dealContext.substring(0, 500) }),
  })

  // Use passed calendlyUrl or default to Michael's discovery call
  const baseUrl = calendlyUrl
  const url = `${baseUrl}?${params.toString().replace(/\+/g, '%20')}`

  useEffect(() => {
    // If Calendly is already loaded, just initialize
    if (window.Calendly) {
      window.Calendly.initializeWidget?.()
      return
    }

    // Otherwise load the script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      // Initialize widgets after script loads
      if (window.Calendly) {
        window.Calendly.initializeWidget?.()
      }
    }
    document.body.appendChild(script)
  }, [url])

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: '480px', height }}
    />
  )
}
