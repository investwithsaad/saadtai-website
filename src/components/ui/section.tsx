'use client'

import { forwardRef, type HTMLAttributes } from "react"
import { LAYOUT } from "@/lib/layout"
import { COLORS, type SectionBackgroundOption } from "@/lib/colors"

export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement> & { background?: SectionBackgroundOption }>(
  ({ className, background = "white", children, ...props }, ref) => {

    const sectionElement = (
      <section
        ref={ref}
        className={["py-6 md:py-12 relative overflow-x-hidden w-full", className].filter(Boolean).join(' ')}
        style={{ scrollMarginTop: LAYOUT.scrollMarginTop, backgroundColor: COLORS[background as keyof typeof COLORS], borderColor: COLORS.dark, borderBottomWidth: '2px', borderBottomStyle: 'solid', ...props.style }}
        {...props}
      >
        {children}
      </section>
    )

    return sectionElement
  }
)
Section.displayName = "Section"