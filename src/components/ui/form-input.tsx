import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react"
import { COLORS } from "@/lib/colors"

const formFieldClasses = "w-full px-4 py-3 rounded-xl border-2 bg-gray-100 outline-none text-gray-800 placeholder-gray-400 focus:border-blue-500 transition-colors bg-white/50"

export interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  as?: "input" | "textarea"
  rows?: number
}

export const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  ({ className, label, as = "input", rows = 3, ...props }, ref) => {
    const inputId = props.id || props.name
    
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium" style={{ color: COLORS.dark }}>
            {label}
          </label>
        )}
        {as === "textarea" ? (
          <textarea
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            id={inputId}
            className={[formFieldClasses, "resize-none", className].filter(Boolean).join(' ')}
            style={{ borderColor: COLORS.dark }}
            rows={rows}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            id={inputId}
            className={[formFieldClasses, className].filter(Boolean).join(' ')}
            style={{ borderColor: COLORS.dark }}
            {...props}
          />
        )}
      </div>
    )
  }
)
FormInput.displayName = "FormInput"