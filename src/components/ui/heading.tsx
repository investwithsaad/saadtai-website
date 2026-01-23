import { forwardRef, type HTMLAttributes, type ElementType } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { COLORS, type HeadingColorOption } from "@/lib/colors"

const headingVariants = cva(
  "font-serif tracking-tight",
  {
    variants: {
      size: {
        h1: "text-4xl md:text-5xl lg:text-6xl leading-tight font-light mb-6 md:mb-12",
        h2: "text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 mt-8",
        h3: "text-xl md:text-2xl leading-tight font-bold mb-4 md:mb-8",
        h4: "text-l md:text-xl font-bold",
      },
    },
    defaultVariants: {
      size: "h2",
    },
  }
)

interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, "color">, VariantProps<typeof headingVariants> {
  color?: HeadingColorOption
}


export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size = "h2", color, style, ...props }, ref) => {
    const Comp = size as ElementType
    let headingStyle = style || {}
    let finalColor = color

    // Use primary color by default for h1 and h2 (no gradients)
    if ((size === 'h1' || size === 'h2') && !color) {
      finalColor = 'primary'
    }

    if (finalColor === 'dark') {
      headingStyle = {
        ...headingStyle,
        background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }
    } else if (finalColor && finalColor in COLORS) {
      headingStyle = {
        ...headingStyle,
        color: COLORS[finalColor as keyof typeof COLORS]
      }
    }

    return (
      <Comp
        ref={ref}
        className={[headingVariants({ size }), className].filter(Boolean).join(' ')}
        style={headingStyle}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"