'use client'

import { CTA } from '@/components/CTA'

export function BlogPostCTA() {
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
          trackingLocation: 'blog_post_cta',
          trackingLabel: 'Schedule Call'
        }
      ]}
    />
  )
}