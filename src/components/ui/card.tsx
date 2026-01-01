'use client'

import { forwardRef, useRef } from "react"
import { motion } from "framer-motion"
import { COLORS, type CardColorOption } from "@/lib/colors"

const baseCardClass = "relative z-10 rounded-none p-8 transition-all duration-300 border-2 border-gray-100"

// Card color styles
export const cardColorStyles = {
  white: {
    backgroundColor: COLORS.white,
  },
  background: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.dark,
  },
  dark: {
    backgroundColor: COLORS.white + "10",
    borderColor: COLORS.background,
  }
} as const

interface CardProps {
  color?: CardColorOption
  hoverColor?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  [key: string]: any
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, color, style, hoverColor, ...props }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const mergedRef = ref || cardRef

    const cardStyle = {
      ...cardColorStyles.white,
      ...(color && color in cardColorStyles ? cardColorStyles[color as keyof typeof cardColorStyles] : {}),
      ...(style || {}),
    }

    const bgColor = (cardStyle.backgroundColor as string) || COLORS.white

    return (
      <motion.div
        ref={mergedRef}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
        }}
        className={[baseCardClass, className].filter(Boolean).join(' ')}
        style={{
          ...cardStyle,
          transition: hoverColor ? 'background-color 0.3s' : undefined,
        }}
        onMouseEnter={() => {
          if (hoverColor && typeof mergedRef === 'object' && mergedRef?.current) {
            mergedRef.current.style.backgroundColor = hoverColor
          }
        }}
        onMouseLeave={() => {
          if (hoverColor && typeof mergedRef === 'object' && mergedRef?.current) {
            mergedRef.current.style.backgroundColor = bgColor
          }
        }}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"