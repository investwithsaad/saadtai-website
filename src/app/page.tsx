// import { getPage } from '@/lib/sanity.queries'
import { HomeContent } from './home-content'
import { createPageMetadata } from '@/lib/metadata-factory'

const defaultHero = {
  headline: 'The Proven System\nto Buy or Exit Multifamily\nProperties with [Clarity]',
  description: 'Professional underwriting, photography, tenant coordination,\nand buyer alignment—all handled. You get a clear decision\nwithout managing the chaos.',
  ctaText: 'Talk through your next move'
}

export async function generateMetadata() {
  // TODO: Re-enable Sanity when environment variables are configured
  // const page = await getPage('home')

  return createPageMetadata({
    title: 'Multifamily Investment Advisor | Saad Tai',
    description: 'Clear analysis on multifamily buying, selling, and hold decisions. Help avoiding overpayment, finding undervalued deals, and timing exits.',
    path: '/',
    ogImage: undefined,
  })
}

export default async function Home() {
  // TODO: Re-enable Sanity when environment variables are configured
  // const page = await getPage('home')

  return <HomeContent hero={defaultHero} />
}
