'use client'

import { CheckCircle } from 'lucide-react'
import { Text } from '@/components/ui'
import { COLORS } from '@/lib/colors'

interface FeatureListProps {
  features: string[]
  className?: string
}

export function FeatureList({ features, className = '' }: FeatureListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <div className="p-1 bg-gold-500/20 rounded-full mt-1 flex-shrink-0">
            <CheckCircle
              size={16}
              className="flex-shrink-0"
              style={{ color: COLORS.primary }}
            />
          </div>
          <Text>{feature}</Text>
        </li>
      ))}
    </ul>
  )
}
