'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)
  const declineButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookie-consent='))
      ?.split('=')[1]

    // Show banner only if no choice has been made
    if (!cookieValue) {
      setShowBanner(true)
    }
  }, [])

  useEffect(() => {
    if (showBanner && declineButtonRef.current) {
      // Move focus to the first button when banner appears
      declineButtonRef.current.focus()
    }
  }, [showBanner])

  const handleAccept = () => {
    document.cookie = 'cookie-consent=true; path=/; max-age=31536000'
    setShowBanner(false)
    window.location.reload()
  }

  const handleDecline = () => {
    document.cookie = 'cookie-consent=false; path=/; max-age=31536000'
    setShowBanner(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Allow Escape key to dismiss banner (same as decline)
    if (e.key === 'Escape') {
      handleDecline()
    }
  }

  if (!showBanner) {
    return null
  }

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-0 left-0 right-0 z-50 text-white border-t-4"
      style={{
        backgroundColor: '#1a1a1a',
        borderTopColor: '#0f172a'
      }}
      role="alertdialog"
      aria-labelledby="cookie-consent-heading"
      aria-describedby="cookie-consent-description"
      aria-modal="true"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h2 id="cookie-consent-heading" className="sr-only">
            Cookie Consent
          </h2>
          <p id="cookie-consent-description" className="text-sm sm:text-base font-light">
            We use cookies to improve your experience and analyze site traffic. These cookies help us understand how you use our site and enable features like tracking your interactions.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button
            ref={declineButtonRef}
            variant="secondary"
            className="whitespace-nowrap"
            onClick={handleAccept}
            aria-label="Accept all cookies"
          >
            Accept
          </Button>
          <Button
            variant="default"
            className="whitespace-nowrap"
            onClick={handleDecline}
            aria-label="Decline cookies"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}
