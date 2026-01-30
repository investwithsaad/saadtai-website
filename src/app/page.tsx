// import { getPage } from '@/lib/sanity.queries'
import { HomeContent } from './home-content'
import { createPageMetadata } from '@/lib/metadata-factory'

const defaultHero = {
  headline: '[Clarity] Before\nnYou Commit Capital',
  description: 'Professional underwriting, photography, tenant coordination,\nand buyer alignment—all handled. You get a clear decision\nwithout managing the chaos.',
  ctaText: "Let's Talk"
}

export async function generateMetadata() {
  // TODO: Re-enable Sanity when environment variables are configured
  // const page = await getPage('home')

  return createPageMetadata({
    title: 'Buy or Exit Multifamily Properties with Clarity | Saad Tai',
    description: 'Professional underwriting, photography, tenant coordination, and buyer alignment—all handled. Get clear decisions without chaos in Albany, Schenectady, Capital Region, and Jacksonville.',
    path: '/',
    ogImage: undefined,
  })
}

export default async function Home() {
  // TODO: Re-enable Sanity when environment variables are configured
  // const page = await getPage('home')

  return <HomeContent hero={defaultHero} />
}
