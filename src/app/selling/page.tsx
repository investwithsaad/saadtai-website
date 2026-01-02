import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { getHowToSchema } from '@/lib/schema-generators'
import SellerPageContent from './seller-page-content'
import { SELLING_PROCESS_STEPS } from './constants'

export const metadata: Metadata = {
  title: 'Selling Multifamily Properties | Strategic Exit Planning | Invest with Saad',
  description: 'Sell your multifamily property strategically with 1031 exchange guidance and expert exit planning for Capital Region investors.',
  keywords: 'sell multifamily property, 1031 exchange, exit strategy, portfolio simplification, maximize property sale',
  alternates: {
    canonical: 'https://investwithsaad.com/selling',
  },
  openGraph: {
    title: 'Selling Multifamily Properties | Strategic Exit Planning',
    description: 'Expert exit planning and 1031 exchange coordination for multifamily investors',
    url: 'https://investwithsaad.com/selling',
    type: 'website',
    images: [
      {
        url: 'https://investwithsaad.com/main-bg.png',
        width: 1200,
        height: 628,
        alt: 'Selling Multifamily Properties',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selling Multifamily Properties | Invest with Saad',
    description: 'Strategic exit planning and 1031 exchange guidance for Capital Region investors.',
  },
}

// Generate the schema once on the server
const sellingProcessSchema = getHowToSchema({
  name: 'How to Sell Your Multifamily Property',
  description: 'A proven 6-step process designed to attract serious buyers and close faster with maximum sale price.',
  steps: SELLING_PROCESS_STEPS.map(step => ({
    name: step.title,
    description: step.desc
  }))
})

export default function SellerPage() {
  return (
    <>
      {/* Render HowTo schema */}
      <SchemaRenderer schema={sellingProcessSchema} />
      <SellerPageContent />

    </>
  )
}
