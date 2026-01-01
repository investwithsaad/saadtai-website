'use client'

import { LucideIcon } from 'lucide-react'
import { COLORS } from '@/lib/colors'

export interface SocialIconProps {
  href: string
  icon: LucideIcon
  label: string
}

export function SocialIcon({
  href,
  icon: Icon,
  label,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== 'undefined' && window.umami?.track) {
          window.umami.track('external_link_click', {
            link: `Social - ${label}`,
            url: href
          })
        }
      }}
      className="text-white p-3 rounded-lg transition-opacity hover:opacity-80"
      style={{ backgroundColor: COLORS.primary }}
      title={label}
      aria-label={label}
    >
      <Icon size={24} />
    </a>
  )
}
