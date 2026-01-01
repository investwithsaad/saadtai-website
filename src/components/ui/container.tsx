import { forwardRef, type HTMLAttributes } from "react"

export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"