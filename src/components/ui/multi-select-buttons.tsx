'use client'

import { motion } from 'framer-motion'
import { COLORS } from '@/lib/colors'

export interface MultiSelectButtonsProps {
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
  align?: 'center' | 'left'
}

export function MultiSelectButtons({
  options,
  value,
  onChange,
  align = 'center',
}: MultiSelectButtonsProps) {
  const handleToggle = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter(o => o !== option))
    } else {
      onChange([...value, option])
    }
  }

  const justifyClass = align === 'left' ? 'justify-start' : 'justify-center'

  return (
    <div className={`flex flex-wrap gap-4 ${justifyClass}`}>
      {options.map((option) => {
        const isSelected = value.includes(option)
        return (
          <motion.button
            key={option}
            type="button"
            onClick={() => handleToggle(option)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-4 rounded-lg font-semibold text-base border-2 transition-all ${
              isSelected
                ? 'border-primary text-white'
                : 'border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
            style={
              isSelected
                ? { backgroundColor: COLORS.primary, borderColor: COLORS.primary, color: 'white' }
                : {}
            }
          >
            {option}
          </motion.button>
        )
      })}
    </div>
  )
}
