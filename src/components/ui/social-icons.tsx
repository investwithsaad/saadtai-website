'use client'

import { Instagram, Facebook } from 'lucide-react'
import { SocialIcon } from './social-icon'

export function SocialIcons() {
  return (
    <div className="flex gap-4">
      <SocialIcon
        href="https://www.instagram.com/saadtherealtor/"
        icon={Instagram}
        label="Instagram"
      />
      <SocialIcon
        href="https://www.facebook.com/profile.php?id=61577367974508"
        icon={Facebook}
        label="Facebook"
      />
    </div>
  )
}
