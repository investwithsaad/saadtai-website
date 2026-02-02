import type { Metadata } from 'next'
import { MultifamilyGuideContent } from './multifamily-guide-content'
import { createPageMetadata } from '@/lib/metadata-factory'

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Multifamily Investing Guide 2026 | Start Investing in Apartments',
    description: 'Complete guide: evaluate multifamily deals, calculate cap rates, analyze cash flow, and find profitable properties in Capital Region and Florida.',
    path: '/investing/multifamily-investment-guide',
    ogImage: '/saad.png',
  })
}

export default function MultifamilyInvestmentGuidePage() {
  return <MultifamilyGuideContent />
}
