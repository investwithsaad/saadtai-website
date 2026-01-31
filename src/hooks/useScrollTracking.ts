'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/tracking'

interface ScrollTrackingOptions {
  sectionName: string
  threshold?: number
  trackOnce?: boolean
}

export function useScrollTracking({
  sectionName,
  threshold = 0.5,
  trackOnce = true
}: ScrollTrackingOptions) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasTrackedRef = useRef(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return
    if (typeof window === 'undefined') return

    let observer: IntersectionObserver | null = null
    let cancelled = false

    const setupObserver = () => {
      if (cancelled) return

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!hasTrackedRef.current || !trackOnce) {
                trackEvent('section_viewed', {
                  section: sectionName,
                  visibility: Math.round(entry.intersectionRatio * 100)
                })
                hasTrackedRef.current = true
              }
            }
          })
        },
        {
          threshold,
          rootMargin: '0px 0px -10% 0px'
        }
      )

      observer.observe(element)
    }

    if ('requestIdleCallback' in window) {
      const idleId = (window as any).requestIdleCallback(setupObserver, { timeout: 2000 })
      return () => {
        cancelled = true
        ;(window as any).cancelIdleCallback(idleId)
        observer?.disconnect()
      }
    }

    const timeoutId = (window as any).setTimeout(setupObserver, 500)
    return () => {
      cancelled = true
      ;(window as any).clearTimeout(timeoutId)
      observer?.disconnect()
    }
  }, [sectionName, threshold, trackOnce])

  return sectionRef
}
