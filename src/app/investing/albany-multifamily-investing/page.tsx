import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata-factory'
import { AlbanyMultifamilyContent } from '@/app/investing/albany-multifamily-investing/albany-multifamily-content'

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'Albany NY Multifamily Investing Guide | Analyze Albany Rental Properties',
    description: 'Invest in Albany multifamily: 8.2% cap rates, $1,550 2BR rent, +5.4% appreciation. Market analysis and investment framework for Albany NY.',
    path: '/investing/albany-multifamily-investing',
    ogImage: '/saad.png',
  })
}

export default function AlbanyGuide() {
  return <AlbanyMultifamilyContent />
}
