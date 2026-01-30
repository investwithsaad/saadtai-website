'use client'

import { FadeIn } from '@/components/ui'

interface Stat {
  value: string
  label: string
  color?: string
}

interface StatsSectionProps {
  stats: Stat[]
  className?: string
}

export function StatsSection({ stats, className = '' }: StatsSectionProps) {
  return (
    <FadeIn>
      <div className={`grid grid-cols-1 md:grid-cols-${Math.min(stats.length, 3)} gap-8 max-w-4xl mx-auto ${className}`}>
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p 
              className="text-5xl font-bold" 
              style={{ color: stat.color || 'inherit' }}
            >
              {stat.value}
            </p>
            <p className="text-slate-600 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </FadeIn>
  )
}
