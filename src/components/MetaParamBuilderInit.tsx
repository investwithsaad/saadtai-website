'use client'

import { useEffect } from 'react'

/**
 * Initialize Meta's Parameter Builder on page load
 * Collects fbp, fbc, and fbi parameters using Meta's official client-side library
 */
export function MetaParamBuilderInit() {
  useEffect(() => {
    async function initializeParamBuilder() {
      if (typeof window === 'undefined' || !window.CapiParamBuilder) {
        return
      }

      try {
        // Define getIpFn to fetch IPv6 from our endpoint
        const getIpFn = async (): Promise<string> => {
          try {
            const response = await fetch('/api/meta/ipv6')
            const data = await response.json()
            return data.ip
          } catch (error) {
            console.error('Error fetching IPv6:', error)
            return ''
          }
        }

        // Process current URL and collect parameters
        // This will extract fbclid from URL, set _fbp/_fbc cookies, and set _fbi cookie with IPv6
        await window.CapiParamBuilder.processAndCollectAllParams(
          window.location.href,
          getIpFn
        )

        console.log('Meta Parameter Builder initialized successfully')
      } catch (error) {
        console.error('Error initializing Meta Parameter Builder:', error)
      }
    }

    // Initialize when page is ready
    if (document.readyState === 'complete') {
      initializeParamBuilder()
    } else {
      window.addEventListener('load', initializeParamBuilder)
      return () => window.removeEventListener('load', initializeParamBuilder)
    }
  }, [])

  return null
}
