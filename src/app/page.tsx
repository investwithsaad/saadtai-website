import { getPage } from '@/lib/sanity.queries'
import { HomeContent } from './home-content'
import { createPageMetadata } from '@/lib/metadata-factory'

export async function generateMetadata() {
  const page = await getPage('home')

  return createPageMetadata({
    title: page?.title || 'Multifamily Investment Advisor | Saad Tai',
    description: page?.description || 'Clarity on multifamily investment decisions. Real estate advisor specializing in buy/sell strategies in upstate New York.',
    path: '/',
    ogImage: page?.ogImage?.asset?.url,
  })
}

export default async function Home() {
  const page = await getPage('home')

  return <HomeContent hero={page?.hero} />
}
