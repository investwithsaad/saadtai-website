import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { getHowToSchema } from '@/lib/schema-generators'
import SellerPageContent from './seller-page-content'
import { SELLING_PROCESS_STEPS } from './constants'
import { createPageMetadata } from '@/lib/metadata-factory'
import { getPage } from '@/lib/sanity.queries'

export const metadata: Metadata = createPageMetadata({
  title: 'Selling Multifamily Properties | Saad Tai',
  description: 'Sell your multifamily property strategically with 1031 exchange guidance and expert exit planning for Capital Region investors.',
  path: '/selling',
  keywords: 'sell multifamily property, 1031 exchange, exit strategy, portfolio simplification, maximize property sale',
  ogImage: '/home seller.webp',
})

// Generate the schema once on the server
const sellingProcessSchema = getHowToSchema({
  name: 'How to Sell Your Multifamily Property',
  description: 'A proven 6-step process designed to attract serious buyers and close faster with maximum sale price.',
  steps: SELLING_PROCESS_STEPS.map(step => ({
    name: step.title,
    description: step.desc
  }))
})

export default async function SellerPage() {
  const page = await getPage('selling')

  return (
    <>
      {/* Render HowTo schema */}
      <SchemaRenderer schema={sellingProcessSchema} />
      <SellerPageContent hero={page?.hero} />
    </>
  )
}
