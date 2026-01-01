import { forwardRef, type SelectHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

const formSelectVariants = cva(
  "w-full px-4 py-3 rounded-xl border transition-all outline-none",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 text-gray-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type FormSelectOption = string | { value: string; label?: string }

export interface FormSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'>,
    VariantProps<typeof formSelectVariants> {
  label?: string
  options?: FormSelectOption[]
  placeholder?: string
}

const normalizeOption = (option: FormSelectOption) => {
  if (typeof option === 'string') {
    return { value: option, label: option }
  }
  return { value: option.value, label: option.label || option.value }
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, variant, label, options, placeholder, ...props }, ref) => {
    const selectId = props.id || props.name
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={[formSelectVariants({ variant }), className].filter(Boolean).join(' ')}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options?.map(option => {
            const normalized = normalizeOption(option)
            return (
              <option key={normalized.value} value={normalized.value}>
                {normalized.label}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
)
FormSelect.displayName = "FormSelect"