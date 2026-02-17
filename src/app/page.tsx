// import { getPage } from '@/lib/sanity.queries'
import { HomeContent } from './home-content'
import { createPageMetadata } from '@/lib/metadata-factory'

const defaultHero = {
  headline: '[Clarity] Before\nYou Commit Capital',
  description: 'Multifamily investment advisor for Albany, Schenectady, Troy NY\nand Kissimmee FL. Honest underwriting, off-market deals,\nand strategic guidance—all handled.',
  ctaText: "Let's Talk"
}

export async function generateMetadata() {
  // TODO: Re-enable Sanity when environment variables are configured
  // const page = await getPage('home')

  return createPageMetadata({
    title: 'Multifamily Investment Advisor | Albany NY & Kissimmee FL | Saad Tai',
    description: 'Multifamily investment advisor serving Albany, Schenectady, Troy NY and Kissimmee FL. Honest underwriting, off-market deals, and strategic exit planning.',
    path: '/',
    ogImage: undefined,
  })
}

export default async function Home() {
  // TODO: Re-enable Sanity when environment variables are configured
  // const page = await getPage('home')

  return <HomeContent hero={defaultHero} />
}
