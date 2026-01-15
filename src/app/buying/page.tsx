import { createPageMetadata } from '@/lib/metadata-factory'
import { BuyingContent } from './buying-content'
import { getPage } from '@/lib/sanity.queries'

export async function generateMetadata() {
  const page = await getPage('buying')

  return createPageMetadata({
    title: page?.title || 'Multifamily Investment Advisor | Saad Tai',
    description: page?.description || 'Get expert guidance on multifamily property investments, capital allocation, and deal evaluation to avoid overpaying and make confident investment decisions.',
    path: '/buying',
  })
}

export default async function BuyingPage() {
  const page = await getPage('buying')

  return <BuyingContent hero={page?.hero} />
}
