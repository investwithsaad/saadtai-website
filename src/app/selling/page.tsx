import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { getHowToSchema } from '@/lib/schema-generators'
import SellerPageContent from './seller-page-content'
import { SELLING_PROCESS_STEPS } from './constants'
import { createPageMetadata } from '@/lib/metadata-factory'
// TODO: Re-enable Sanity when environment variables are configured
// import { getPage } from '@/lib/sanity.queries'

const defaultHero = {
  headline: 'Exit on Your Timeline\nExit with [Clarity]',
  description: 'Our system tells you if now is the right time,\npositions your property properly,\nand finds the right buyer at the right price.\nYou maximize proceeds without the chaos.',
  ctaText: "Let's Talk"
}

export function generateMetadata(): Metadata {
  // TODO: Re-enable Sanity fetch
  // const page = await getPage('selling')
  const page: any = null

  return createPageMetadata({
    title: page?.title || 'Exit on Your Timeline | Maximize Multifamily Sale Price',
    description: page?.description || 'Our system tells you if now is the right time, positions your property properly, and finds the right buyer at the right price. Maximize proceeds without chaos in Albany, Schenectady, Capital Region, and Jacksonville.',
    path: '/selling',
    ogImage: page?.ogImage?.asset?.url,
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

export default function SellerPage() {
  // TODO: Re-enable Sanity fetch
  // const page = await getPage('selling')
  const page: any = null

  return (
    <>
      {/* Render HowTo schema */}
      <SchemaRenderer schema={sellingProcessSchema} />
      <SellerPageContent hero={page?.hero || defaultHero} />
    </>
  )
}
