"use client"

import { forwardRef } from "react"
import { COLORS } from "@/lib/colors"

export type FormButtonGroupOption = string | { value: string; label?: string }

export interface FormButtonGroupProps {
  label?: string
  options: FormButtonGroupOption[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  name?: string
  multiple?: boolean
}

const normalizeOption = (option: FormButtonGroupOption) => {
  if (typeof option === 'string') {
    return { value: option, label: option }
  }
  return { value: option.value, label: option.label || option.value }
}

export const FormButtonGroup = forwardRef<HTMLDivElement, FormButtonGroupProps>(
  ({ label, options, value = "", onChange, name, multiple = false }, ref) => {
    const isSelected = (optionValue: string) => {
      if (multiple) {
        return Array.isArray(value) ? value.includes(optionValue) : false
      }
      return value === optionValue
    }

    const handleClick = (optionValue: string) => {
      if (multiple) {
        const currentValue = Array.isArray(value) ? value : []
        const newValue = currentValue.includes(optionValue)
          ? currentValue.filter(v => v !== optionValue)
          : [...currentValue, optionValue]
        onChange?.(newValue)
      } else {
        onChange?.(value === optionValue ? "" : optionValue)
      }
    }

    return (
      <div ref={ref} className="flex flex-col gap-3">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
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
            value={Array.isArray(value) ? value.join(",") : value}
          />
        )}
      </div>
    )
  }
)

FormButtonGroup.displayName = "FormButtonGroup"
