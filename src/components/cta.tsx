'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Section,
  Container,
  Heading,
  Text,
  FadeIn,
  Button
} from '@/components/ui'
import { LeadFormModal } from '@/components/LeadFormModal'
import { trackEvent } from '@/lib/tracking'

interface CTAButton {
  label: string
  onClick?: () => void
  href?: string
  variant?: 'default' | 'secondary'
  isModal?: boolean
  trackingLocation?: string
  trackingLabel?: string
}

interface CTAProps {
  heading: string
  description: string
  buttons?: CTAButton[]
  background?: 'white' | 'background'
  maxWidth?: string
  footerText?: string
}

export function CTA({
  heading,
  description,
  buttons,
  background = 'white',
  maxWidth = 'max-w-3xl',
  footerText
}: CTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const defaultButtons: CTAButton[] = buttons || [
    {
      label: 'Schedule a Strategy Call →',
      variant: 'default',
      isModal: true,
      trackingLocation: 'cta',
      trackingLabel: 'Schedule Strategy Call'
    }
  ]

  return (
    <>
      <Section background={background}>
        <Container>
          <div className={`${maxWidth} mx-auto text-center`}>
            <FadeIn>
              <Heading size="h2" className="mb-6">{heading}</Heading>
              <Text className="text-lg text-slate-600 mb-8">
                {description}
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {defaultButtons.map((btn, idx) => {
                  const handleClick = () => {
                    if (btn.trackingLocation && btn.trackingLabel) {
                      trackEvent('cta_clicked', {
                        location: btn.trackingLocation,
                        label: btn.trackingLabel
                      })
                    }
                    if (btn.isModal) {
                      setIsModalOpen(true)
                    } else if (btn.onClick) {
                      btn.onClick()
                    }
                  }

                  if (btn.href) {
                    return (
                      <Link key={idx} href={btn.href} onClick={handleClick}>
                        <Button variant={btn.variant || 'default'}>
                          {btn.label}
                        </Button>
                      </Link>
                    )
                  }

                  return (
                    <Button
                      key={idx}
                      variant={btn.variant || 'default'}
                      onClick={handleClick}
                    >
                      {btn.label}
                    </Button>
                  )
                })}
              </div>
              {footerText && (
                <Text className="text-slate-600 text-sm mt-4">
                  {footerText}
                </Text>
              )}
            </FadeIn>
          </div>
        </Container>
      </Section>

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
