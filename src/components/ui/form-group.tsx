import { forwardRef, type HTMLAttributes } from "react"

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2
}

export const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, columns = 1, ...props }, ref) => {
    const baseClass = columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "flex flex-col gap-6"
    return (
      <div
        ref={ref}
        className={[baseClass, className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)
FormGroup.displayName = "FormGroup"