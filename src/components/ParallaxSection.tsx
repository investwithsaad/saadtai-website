'use client'

import { forwardRef, useRef, useEffect, useState, type HTMLAttributes } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { LAYOUT } from "@/lib/layout"
import { COLORS, type SectionBackgroundOption } from "@/lib/colors"

interface ParallaxSectionProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  background?: SectionBackgroundOption
  backgroundImage?: string
  backgroundImageAlt?: string
  parallaxIntensity?: number // 0-1, higher = more movement
  overlayOpacity?: number // 0-1
  overlayColor?: string
  children: React.ReactNode
  minHeight?: string
  objectFit?: 'cover' | 'contain' | 'fill'
}

export const ParallaxSection = forwardRef<HTMLDivElement, ParallaxSectionProps>(
  ({
    className,
    background = "white",
    backgroundImage,
    backgroundImageAlt = "Background",
    parallaxIntensity = 0.5,
    overlayOpacity = 0.4,
    overlayColor = "#000000",
    children,
    minHeight = "auto",
    objectFit = 'cover',
    ...props
  }, ref) => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    })

    const parallaxY = useTransform(
      scrollYProgress,
      [0, 1],
      [0, parallaxIntensity * 100] // Movement range
    )

    return (
      <div
        ref={sectionRef}
        className={["relative overflow-hidden w-full", className].filter(Boolean).join(' ')}
        style={{
          scrollMarginTop: LAYOUT.scrollMarginTop,
          minHeight,
          ...props.style
        }}
        {...props}
      >
        {/* Background Image with Parallax */}
        {backgroundImage && (
          <>
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{
                y: parallaxY,
              }}
            >
              <Image
                src={backgroundImage}
                alt={backgroundImageAlt}
                fill
                className={`object-${objectFit}`}
                priority
                quality={90}
              />
            </motion.div>

            {/* Overlay */}
            <div
              className="absolute inset-0 z-10"
              style={{
                backgroundColor: overlayColor,
                opacity: overlayOpacity,
              }}
            />
          </>
        )}

        {/* Content - Solid Background Fallback */}
        {!backgroundImage && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: COLORS[background as keyof typeof COLORS],
            }}
          />
        )}

        {/* Content Container */}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    )
  }
)

ParallaxSection.displayName = "ParallaxSection"
