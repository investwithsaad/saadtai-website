import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata-factory'
import { TroyMultifamilyContent } from '@/app/investing/troy-multifamily-investing/troy-multifamily-content'

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'Troy NY Multifamily Investing Guide | Analyze Troy Rental Properties',
    description: 'Invest in Troy NY multifamily properties: 6.1% gross yield, $1,350-$1,550 2BR rent, 72 Walk Score. Market analysis for arts-focused revitalization and cultural growth.',
    path: '/investing/troy-multifamily-investing',
    ogImage: '/saad.png',
  })
}

export default function TroyGuide() {
  return <TroyMultifamilyContent />
}
