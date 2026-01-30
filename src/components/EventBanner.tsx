'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { COLORS } from '@/lib/colors'

export function EventBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    // Check if banner has been closed by user in this session
    if (typeof window !== 'undefined') {
      const wasClosed = sessionStorage.getItem('eventBannerClosed')
      if (wasClosed) {
        setIsVisible(false)
        return
      }

      // Check if event date has passed (Jan 31, 2026)
      const eventEndDate = new Date(2026, 0, 31, 23, 59, 59) // Jan 31, 2026
      const now = new Date()

      if (now <= eventEndDate) {
        setIsVisible(true)
      }
    }
  }, [])

  if (!isVisible || isClosed) return null

  const handleClose = () => {
    setIsClosed(true)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('eventBannerClosed', 'true')
    }
  }

  return (
    <div
      style={{ backgroundColor: COLORS.primary }}
      className="relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-start md:items-center gap-4">
          <div className="flex-1 flex flex-col md:flex-row gap-4 md:items-center">
            <p className="text-white text-sm sm:text-base font-medium">
              <strong>Master Prospecting Training:</strong> Join Saad & Duane for a 90-minute sales training on Jan 30th at 12:30 PM
            </p>
            <Link
              href="/events/master-prospecting-2026"
              className="px-4 py-2 bg-white text-slate-900 rounded font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap text-sm"
            >
              Register for Training
            </Link>
          </div>
          <button
            onClick={handleClose}
            className="p-1 text-white hover:bg-white/20 rounded transition-colors flex-shrink-0"
            aria-label="Close banner"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
