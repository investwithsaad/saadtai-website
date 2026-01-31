'use client'

import { useEffect, useRef, useState } from 'react'

export const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use delay for initial elements, no delay for lazy observers
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay * 1000)
          } else {
            setIsVisible(true)
          }
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -100px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'fade-in-lcp' : 'opacity-0'} ${className || ''}`}
      style={{
        transitionProperty: 'opacity',
        transitionDuration: '0.6s',
        transitionTimingFunction: 'ease-out',
      }}
    >
      {children}
    </div>
  )
}