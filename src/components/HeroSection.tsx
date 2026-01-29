'use client'

import Image from 'next/image'
import { forwardRef } from 'react'
import { Container, Button, Heading, Text } from '@/components/ui'
import { formatTextWithLineBreaks } from '@/lib/format-text'
import { trackEvent } from '@/lib/tracking'

interface HeroSectionProps {
  headline: string
  description: string
  ctaText?: string
  backgroundImage?: string
  onCtaClick?: () => void
  showProfile?: boolean
}

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      headline,
      description,
      ctaText = 'Talk through your next move',
      backgroundImage = '/Home image.webp',
      onCtaClick,
      showProfile = true
    },
    ref
  ) => {
    const handleCtaClick = () => {
      if (onCtaClick) {
        onCtaClick()
      }
    }

    return (
      <div ref={ref} className="relative h-auto flex pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Multifamily real estate investment advisor Saad Tai - expert guidance on property investing"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          fetchPriority="high"
        />
        {/* Blur overlay on left side */}
        <div
          className="absolute inset-0 backdrop-blur-md bg-gradient-to-r from-black/0 via-transparent to-transparent"
          style={{
            maskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)'
          }}
        ></div>
        {/* Gradient overlay - dark left to transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        <Container className="relative z-10 !mx-0">
          <div className="fade-in-lcp">
            <div className="max-w-3xl text-left pb-8 pt-16">
              <Heading size="h1" color="white">
                {formatTextWithLineBreaks(headline)}
              </Heading>
              <Text size="lg" className="text-white/90 mb-12 leading-relaxed">
                {formatTextWithLineBreaks(description)}
              </Text>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  variant="default"
                  image={showProfile ? '/saad.png' : undefined}
                  imageAlt={showProfile ? 'Saad Tai - multifamily real estate investment advisor' : undefined}
                  onClick={handleCtaClick}
                >
                  {ctaText} →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
)

HeroSection.displayName = 'HeroSection'