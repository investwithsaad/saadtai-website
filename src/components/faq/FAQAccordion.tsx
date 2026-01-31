'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Text, Heading } from '@/components/ui'
import { COLORS } from '@/lib/colors'

interface FAQItem {
  id: string
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null)

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
          style={{ borderColor: COLORS.dark }}
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-6 py-4 flex items-center justify-between transition-colors text-left"
            style={{ backgroundColor: openId === item.id ? COLORS.background : 'white' }}
          >
            <Heading size="h3" className="pr-4 mb-0">{item.q}</Heading>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 transition-transform ${
                openId === item.id ? 'rotate-180' : ''
              }`}
              style={{ color: COLORS.dark }}
            />
          </button>

          {openId === item.id && (
            <div className="px-6 py-4 border-t" style={{ backgroundColor: COLORS.background, borderColor: COLORS.dark }}>
              <Text size="sm" className="leading-relaxed">{item.a}</Text>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
