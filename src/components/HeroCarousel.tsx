'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Heading, Text, Container } from '@/components/ui'
import { COLORS } from '@/lib/colors'

interface HeroSlide {
  heading: string | React.ReactNode
  desc: string | React.ReactNode
  image: string
  width: number
  height: number
}

interface HeroCarouselProps {
  slides: HeroSlide[]
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [heroIndex, setHeroIndex] = React.useState(0)
  const [isUserInteracting, setIsUserInteracting] = React.useState(false)
  const [pageLoaded, setPageLoaded] = React.useState(false)

  // Wait for page to load before enabling carousel auto-rotation
  React.useEffect(() => {
    if (document.readyState === 'complete') {
      setPageLoaded(true)
    } else {
      const handleLoad = () => setPageLoaded(true)
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  React.useEffect(() => {
    if (isUserInteracting || !pageLoaded) return

    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isUserInteracting, pageLoaded, slides.length])

  const handlePrev = () => {
    setHeroIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setIsUserInteracting(true)
    setTimeout(() => setIsUserInteracting(false), 8000)
  }

  const handleNext = () => {
    setHeroIndex((prev) => (prev + 1) % slides.length)
    setIsUserInteracting(true)
    setTimeout(() => setIsUserInteracting(false), 8000)
  }

  const slide = slides[heroIndex]

  return (
    <Container className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-center lg:justify-start h-full pb-6">
      {/* Text Column - 40% width */}
      <div className="relative z-20 w-full lg:flex-[0.6] lg:min-w-0">
        <Heading key={`heading-${heroIndex}`} size="h1" color="primary" className="mb-6 lg:mb-8">
          {slide.heading}
        </Heading>
        <Text size="2xl" className="mb-6 lg:mb-8">
          {slide.desc}
        </Text>
        <div className="flex gap-3 sm:gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0"
            style={{ backgroundColor: COLORS.background, color: COLORS.dark }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primary
              e.currentTarget.style.color = COLORS.secondary
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.background
              e.currentTarget.style.color = COLORS.dark
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0"
            style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.dark
              e.currentTarget.style.color = COLORS.secondary
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primary
              e.currentTarget.style.color = COLORS.white
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Image Column - 60% width on lg, full width on mobile */}
      <div
        className="relative w-full lg:flex-[0.4] mx-4 sm:mx-6 lg:mx-0 rounded-2xl overflow-hidden shadow-lg lg:hover:shadow-xl transition-shadow duration-500 lg:min-w-0"
        style={{
          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)`,
          aspectRatio: 'auto',
        }}>
        {/* Render all images in HTML - browser discovers them all early */}
        {slides.map((s, index) => (
          <Image
            key={s.image}
            src={s.image}
            alt={typeof s.heading === 'string' ? s.heading : 'Hero slide image'}
            width={1024}
            height={819}
            className={`w-full h-full object-cover lg:object-contain transition-opacity duration-500 ease-out ${
              index === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none absolute inset-0'
            }`}
            priority={index === 0}
            loading="eager"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 50vw"
            quality={85}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
      </div>
    </Container>
  )
}
