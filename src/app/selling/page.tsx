import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { getHowToSchema } from '@/lib/schema-generators'
import SellerPageContent from './seller-page-content'
import { SELLING_PROCESS_STEPS } from './constants'
import { createPageMetadata } from '@/lib/metadata-factory'
import { getPage } from '@/lib/sanity.queries'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('selling')

  return createPageMetadata({
    title: page?.title || 'Selling Multifamily Properties | Saad Tai',
    description: page?.description || 'Sell your multifamily property strategically with 1031 exchange guidance and expert exit planning for Capital Region investors.',
    path: '/selling',
  })
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
