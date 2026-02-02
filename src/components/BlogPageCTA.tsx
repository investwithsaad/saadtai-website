'use client'

import { CTA } from '@/components/cta'

export function BlogPageCTA() {
  return (
    <CTA
      heading="Ready to make your next real estate move?"
      description="Let's discuss your home buying, selling, or valuation needs with a personal consultation from Saad."
      background="background"
      buttons={[
        {
          label: 'Schedule a Call',
          isModal: true,
          variant: 'secondary',
          trackingLocation: 'blog_page_cta',
          trackingLabel: 'Schedule Call'
        },
        {
          label: 'Use the Investment Calculator',
          href: '/calculator',
          variant: 'default'
        }
      ]}
    />
  )
}