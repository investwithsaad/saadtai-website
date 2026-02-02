import type { Metadata } from 'next'
import { InvestmentContent } from './investment-content'
import { createPageMetadata } from '@/lib/metadata-factory'

const defaultHero = {
  headline: 'Master Multifamily\nInvesting',
  description: 'Complete guides covering fundamentals, market analysis, cap rates, and location-specific opportunities in Capital Region markets.',
}

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Investment Guides for Multifamily Real Estate Investors | Saad Tai',
    description: 'Complete investment guides covering multifamily basics, cap rates, market analysis, and location-specific guides for Albany, Schenectady, and Troy NY.',
    path: '/investing',
    ogImage: '/saad.png',
  })
}

export default function InvestmentPage() {
  return <InvestmentContent hero={defaultHero} />
}
