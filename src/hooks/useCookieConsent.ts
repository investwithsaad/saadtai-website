'use client'

import { useEffect, useState } from 'react'

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already given consent
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookie-consent='))
      ?.split('=')[1]

    setHasConsent(cookieValue === 'true')
    setIsLoading(false)
  }, [])

  return { hasConsent, isLoading }
}
