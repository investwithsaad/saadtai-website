import { SchemaRenderer } from '@/components/SchemaRenderer'
import { getHowToSchema } from '@/lib/schema-generators'
import { BuyingContent } from './buying-content'
import { BUYING_PROCESS_STEPS } from './constants'
import { createPageMetadata } from '@/lib/metadata-factory'
// TODO: Re-enable Sanity when environment variables are configured
// import { getPage } from '@/lib/sanity.queries'

const defaultHero = {
  headline: 'Get [Clarity]\non Your Next Move\nwith Deals That Pencil.',
  description: 'Our system evaluates opportunities with rigorous underwriting,\nhonest comps, and portfolio alignment.\nYou avoid overpaying and close with confidence.',
  ctaText: "Let's Talk"
}

export function generateMetadata() {
  // TODO: Re-enable Sanity fetch
  // const page = await getPage('buying')
  const page: any = null

  return createPageMetadata({
    title: page?.title || 'Buy Multifamily Properties | Albany NY & Kissimmee FL | Saad Tai',
    description: page?.description || 'Find multifamily deals that pencil in Albany, Schenectady, Troy NY and Kissimmee FL. Conservative underwriting, off-market sourcing, and expert deal analysis.',
    path: '/buying',
    ogImage: page?.ogImage?.asset?.url,
  })
}

// Generate the schema once on the server
const buyingProcessSchema = getHowToSchema({
  name: 'How to Buy a Multifamily Property',
  description: 'A proven 6-step process for sourcing, underwriting, financing, and closing multifamily investment properties.',
  steps: BUYING_PROCESS_STEPS.map(step => ({
    name: step.title,
    description: step.desc
  }))
})

export default function BuyingPage() {
  // TODO: Re-enable Sanity fetch
  // const page = await getPage('buying')
  const page: any = null

  return (
    <>
      {/* Render HowTo schema */}
      <SchemaRenderer schema={buyingProcessSchema} />
      <BuyingContent hero={page?.hero || defaultHero} />
    </>
  )
}
