'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Report Web Vitals to analytics
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Core Web Vitals observer
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log to console in development, send to analytics in production
          console.log(`${entry.name}: ${entry.startTime}`)
        }
      })

      // Observe different performance metrics
      try {
        observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })
      } catch (e) {
        // Browser doesn't support all entry types
        console.warn('Performance observer not fully supported')
      }

      return () => observer.disconnect()
    }
  }, [])

  return null
}
