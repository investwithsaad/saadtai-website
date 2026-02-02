'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { trackPageView } from '@/lib/tracking'
import { getUtmParameters, initializeUtmTracking } from '@/lib/utm'
import { initializeUserProperties, updateUserProperties } from '@/lib/user-properties'

/**
 * PageViewTracker
 * Automatically tracks page views on route changes and initial page load
 * Also initializes UTM parameter tracking and user properties
 */
export function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize UTM tracking on first mount
    initializeUtmTracking()

    // Initialize user properties on first mount
    initializeUserProperties()
  }, [])

  useEffect(() => {
    // Track page view whenever pathname changes
    const url = pathname + (searchParams ? `?${searchParams.toString()}` : '')

    // Get current UTM parameters
    const utmParams = getUtmParameters()

    // Update user properties on page view
    updateUserProperties({ pages_viewed: 1 })

    // Track page view with UTM parameters and user properties
    trackPageView(pathname, url, utmParams as Record<string, string>)
  }, [pathname, searchParams])

  return null
}
