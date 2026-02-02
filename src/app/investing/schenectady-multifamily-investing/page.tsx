import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata-factory'
import { SchenectadyMultifamilyContent } from '@/app/investing/schenectady-multifamily-investing/schenectady-multifamily-content'

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'Schenectady NY Multifamily Investing | Highest Growth in Capital Region',
    description: 'Invest in Schenectady: +9.8% appreciation, $279K median price, $1,471-$1,695 2BR rent. Downtown revitalization and market analysis.',
    path: '/investing/schenectady-multifamily-investing',
    ogImage: '/saad.png',
  })
}

export default function SchenectadyGuide() {
  return <SchenectadyMultifamilyContent />
}
