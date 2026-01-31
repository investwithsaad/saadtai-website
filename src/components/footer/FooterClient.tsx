'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui'
import { LeadFormModal } from '../LeadFormModal'
import { trackEvent } from '@/lib/tracking'

export function FooterClient() {
  const [isHoveringBadge, setIsHoveringBadge] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className="relative p-4"
        onMouseEnter={() => setIsHoveringBadge(true)}
        onMouseLeave={() => setIsHoveringBadge(false)}
      >
        <Image
          src="/saadlicenced image.png"
          alt="Saad Tai licensed real estate professional - New York multifamily investment specialist"
          width={750}
          height={550}
          className="h-auto cursor-pointer transition-all"
          style={isHoveringBadge ? { filter: 'blur(2px)' } : {}}
        />

        {isHoveringBadge && (
          <div className="absolute inset-0 flex items-center justify-center gap-6 p-4 rounded animate-fadeIn">
            <Button
              variant="secondary"
              onClick={() => {
                trackEvent('cta_clicked', { location: 'footer_badge', label: 'Contact Us' })
                setIsModalOpen(true)
              }}
            >
              Contact
            </Button>
            <a href="mailto:saadtherealtor1@gmail.com">
              <Button variant="secondary">
                Email
              </Button>
            </a>
          </div>
        )}
      </div>

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
