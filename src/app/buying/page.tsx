import { createPageMetadata } from '@/lib/metadata-factory'
import { BuyingContent } from './buying-content'
// TODO: Re-enable Sanity when environment variables are configured
// import { getPage } from '@/lib/sanity.queries'

const defaultHero = {
  headline: 'Get [Clarity]\non Your Next Move.\nwith Deals That Pencil.',
  description: 'Our system evaluates opportunities with rigorous underwriting,\nhonest comps, and portfolio alignment.\nYou avoid overpaying and close with confidence.',
  ctaText: 'Talk through your next move'
}

export function generateMetadata() {
  // TODO: Re-enable Sanity fetch
  // const page = await getPage('buying')
  const page: any = null

  return createPageMetadata({
    title: page?.title || 'Multifamily Investment Advisor | Saad Tai',
    description: page?.description || 'Get expert guidance on multifamily property investments, capital allocation, and deal evaluation to avoid overpaying and make confident investment decisions.',
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
