import { createPageMetadata } from '@/lib/metadata-factory'
import { BuyingContent } from './buying-content'
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
    title: page?.title || 'Multifamily Deals That Pencil | Expert Investment Analysis',
    description: page?.description || 'Rigorous underwriting, honest comps, and portfolio alignment. Avoid overpaying and close with confidence in Albany, Schenectady, and Jacksonville.',
    path: '/buying',
    ogImage: page?.ogImage?.asset?.url,
  })
}

export default function BuyingPage() {
  // TODO: Re-enable Sanity fetch
  // const page = await getPage('buying')
  const page: any = null

  return <BuyingContent hero={page?.hero || defaultHero} />
}
