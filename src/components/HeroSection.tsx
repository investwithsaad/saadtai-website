'use client'

import Image from 'next/image'
import Link from 'next/link'
import { forwardRef } from 'react'
import { Container, Button, Heading, Text } from '@/components/ui'
import { formatTextWithLineBreaks } from '@/lib/format-text'

interface HeroSectionProps {
  headline: string
  description: string
  ctaText?: string
  backgroundImage?: string
  onCtaClick?: () => void
  showProfile?: boolean
  testimonial?: {
    text: string
    author: string
    tag: string
  }
}

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      headline,
      description,
      ctaText = 'Talk through your next move',
      backgroundImage = '/Home image.webp',
      onCtaClick,
      showProfile = true,
      testimonial
    },
    ref
  ) => {
    const handleCtaClick = () => {
      if (onCtaClick) {
        onCtaClick()
      }
    }

    return (
      <div ref={ref} className="relative h-[640px] md:h-[720px] flex pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Multifamily real estate investment advisor Saad Tai - expert guidance on property investing"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={90}
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
            <div className="max-w-xl text-left pb-8 pt-16">
              <Heading size="h1" color="white">
                {formatTextWithLineBreaks(headline)}
              </Heading>
              <Text size="lg" className="text-white/90 mb-2 leading-relaxed">
                {formatTextWithLineBreaks(description)}
              </Text>

              {testimonial && (
                <div className="mb-4 p-3 rounded-lg border-2 border-white/30 bg-white/5 backdrop-blur-sm">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-white/95 mb-2 font-medium italic text-sm">"{testimonial.text}"</p>
                  <p className="text-white/85 text-xs"><span className="font-semibold">{testimonial.author}</span></p>
                </div>
              )}

              <div className={`flex flex-row gap-3 w-full ${testimonial ? 'mt-2' : 'mt-8'}`}>
                <Button
                  variant="default"
                  image={showProfile ? '/saad.png' : undefined}
                  imageAlt={showProfile ? 'Saad Tai - multifamily real estate investment advisor' : undefined}
                  onClick={handleCtaClick}
                  className="flex-1 whitespace-nowrap"
                >
                  {ctaText} →
                </Button>
                <Link href="/about" className="flex-1">
                  <Button variant="secondary" className="w-full whitespace-nowrap py-8">
                    About Saad →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
)

HeroSection.displayName = 'HeroSection'