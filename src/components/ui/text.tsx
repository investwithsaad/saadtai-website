import { forwardRef, type HTMLAttributes, type ElementType } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { COLORS, type TextColorOption } from "@/lib/colors"

const textVariants = cva(
  "font-sans leading-relaxed",
  {
    variants: {
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg font-light",
        xl: "text-xl font-light",
        "2xl": "text-lg sm:text-xl md:text-2xl font-light",
      },
      weight: {
        default: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "default",
      weight: "default",
    },
  }
)


interface TextProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "color">, VariantProps<typeof textVariants> {
  color?: TextColorOption
  as?: "p" | "span" | "div"
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, as = "p", style, ...props }, ref) => {
    const Comp = as as ElementType
    let textStyle = style || {}

    if (color && color in COLORS) {
      textStyle = {
        ...textStyle,
        color: COLORS[color as keyof typeof COLORS]
      }
    }

    return (
      <Comp
        ref={ref}
        className={[textVariants({ size, weight }), className].filter(Boolean).join(' ')}
        style={textStyle}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"