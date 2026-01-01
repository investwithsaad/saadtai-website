'use client'

import { motion } from 'framer-motion'
import { COLORS } from '@/lib/colors'

export interface SelectButtonsProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  selectedAnswer?: string | null
  align?: 'center' | 'left'
}

export function SelectButtons({
  options,
  value,
  onChange,
  disabled = false,
  selectedAnswer = null,
  align = 'center',
}: SelectButtonsProps) {
  const justifyClass = align === 'left' ? 'justify-start' : 'justify-center'

  return (
    <div className={`flex flex-wrap gap-4 ${justifyClass}`}>
      {options.map((option) => (
        <motion.button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          initial={{ scale: 1 }}
          whileHover={{ scale: disabled ? 1 : 1.05 }}
          whileTap={{ scale: disabled ? 1 : 0.95 }}
          animate={
            selectedAnswer === option
              ? { scale: 1.02, backgroundColor: COLORS.primary }
              : { scale: 1, backgroundColor: '#f3f4f6' }
          }
          transition={{ duration: 0.2 }}
          className={`px-6 py-4 rounded-lg font-semibold text-base border-2 transition-all ${
            value === option
              ? 'border-primary text-white'
              : selectedAnswer === option
              ? 'border-primary text-white'
              : 'border-gray-200 text-gray-700 hover:border-gray-300'
          }`}
          style={
            value === option
              ? { backgroundColor: COLORS.primary, borderColor: COLORS.primary, color: 'white' }
              : selectedAnswer === option
              ? { backgroundColor: COLORS.primary, borderColor: COLORS.primary, color: 'white' }
              : {}
          }
          disabled={disabled}
        >
          {option}
        </motion.button>
      ))}
    </div>
  )
}
