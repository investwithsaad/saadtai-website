"use client"

import { forwardRef, type ButtonHTMLAttributes, Children, cloneElement, type ReactElement } from "react"
import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"
import { COLORS } from "@/lib/colors"

const buttonVariants = cva(
  "relative z-10 flex items-center gap-4 pl-3 pr-4 py-3 text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-2 border-dark hover:text-white",
        secondary: "border-2 border-dark hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  image?: string
  imageAlt?: string
  variant?: "default" | "secondary"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", style, asChild, image, imageAlt = "Button image", children, ...props }, ref) => {
    const baseStyle: React.CSSProperties = style || {}

    // Apply variant-specific styles using COLORS
    let buttonStyle: React.CSSProperties = baseStyle

    switch (variant) {
      case "default":
        buttonStyle = {
          ...baseStyle,
          background: `linear-gradient(90deg, ${COLORS.dark} 0%, ${COLORS.dark} 50%, white 50%, white 100%)`,
          backgroundSize: "200% 100%",
          backgroundPosition: "right",
          backgroundClip: "padding-box",
          borderColor: COLORS.dark,
          borderWidth: "2px",
          color: COLORS.dark,
          transition: "background-position 0.3s ease, color 0.3s ease"
        }
        break
      case "secondary":
        buttonStyle = {
          ...baseStyle,
          background: `linear-gradient(90deg, ${COLORS.secondary} 0%, ${COLORS.secondary} 50%, white 50%, white 100%)`,
          backgroundSize: "200% 100%",
          backgroundPosition: "right",
          backgroundClip: "padding-box",
          borderColor: COLORS.dark,
          borderWidth: "2px",
          color: COLORS.dark,
          transition: "background-position 0.3s ease, color 0.3s ease"
        }
        break
      default:
        buttonStyle = {
          ...baseStyle,
          backgroundColor: COLORS.primary,
          boxShadow: `0 10px 15px -3px ${COLORS.primary}33`
        }
        break
    }

    const buttonClasses = [buttonVariants({ variant }), className].filter(Boolean).join(' ')

    if (asChild && children) {
      const child = Children.only(children) as ReactElement
      return cloneElement(child, {
        className: `${(child.props as any).className || ''} ${buttonClasses}`,
        style: { ...buttonStyle, ...(child.props as any).style },
        ref,
        ...props
      } as any)
    }

    return (
      <button
        className={buttonClasses}
        style={buttonStyle}
        ref={ref}
        {...props}
        onMouseEnter={(e) => {
          const target = e.currentTarget
          if (target.style.backgroundPosition !== undefined) {
            target.style.backgroundPosition = "left"
            target.style.color = "white"
          }
          props.onMouseEnter?.(e)
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget
          if (target.style.backgroundPosition !== undefined) {
            target.style.backgroundPosition = "right"
            const computedColor = variant === "secondary" ? COLORS.secondary : COLORS.dark
            target.style.color = computedColor
          }
          props.onMouseLeave?.(e)
        }}
      >
        {image && (
          <div className="relative w-16 h-16 -m-1 overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        )}
        <span className="flex items-center gap-2 whitespace-normal sm:whitespace-nowrap">{children}</span>
      </button>
    )
  }
)
Button.displayName = "Button"