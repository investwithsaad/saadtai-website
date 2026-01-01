"use client"

import { forwardRef } from "react"
import { COLORS } from "@/lib/colors"

export type FormMultiSelectOption = string | { value: string; label?: string }

export interface FormMultiSelectProps {
  label?: string
  options: FormMultiSelectOption[]
  value?: string[]
  onChange?: (values: string[]) => void
  name?: string
}

const normalizeOption = (option: FormMultiSelectOption) => {
  if (typeof option === 'string') {
    return { value: option, label: option }
  }
  return { value: option.value, label: option.label || option.value }
}

export const FormMultiSelect = forwardRef<HTMLDivElement, FormMultiSelectProps>(
  ({ label, options, value = [], onChange, name }, ref) => {
    const isSelected = (optionValue: string) => value.includes(optionValue)

    const handleClick = (optionValue: string) => {
      const newValue = value.includes(optionValue)
        ? value.filter(v => v !== optionValue)
        : [...value, optionValue]
      onChange?.(newValue)
    }

    return (
      <div ref={ref} className="flex flex-col gap-3">
        {label && (
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              {label}
            </label>
            <span className="text-xs text-gray-500 font-normal">Select multiple</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {options.map(opt => {
            const option = normalizeOption(opt)
            const selected = isSelected(option.value)
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleClick(option.value)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2"
                style={{
                  backgroundColor: selected ? COLORS.primary + "20" : "#ffffff",
                  borderColor: selected ? COLORS.primary : "#d1d5db",
                  color: selected ? COLORS.primary : "#6b7280",
                }}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        {/* Hidden input for form submission */}
        {name && (
          <input
            type="hidden"
            name={name}
            value={value.join(",")}
          />
        )}
      </div>
    )
  }
)

FormMultiSelect.displayName = "FormMultiSelect"
