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

    const observer = new IntersectionObserver(
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
    return () => observer.unobserve(element)
  }, [sectionName, threshold, trackOnce])

  return sectionRef
}
