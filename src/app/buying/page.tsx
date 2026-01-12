import { createPageMetadata } from '@/lib/metadata-factory'
import { BuyingContent } from './buying-content'
import { getPage } from '@/lib/sanity.queries'

export const metadata = createPageMetadata({
  title: 'Multifamily Investment Advisor | Saad Tai',
  description: 'Get expert guidance on multifamily property investments, capital allocation, and deal evaluation to avoid overpaying and make confident investment decisions.',
  path: '/buying',
  keywords: 'multifamily investor advisor, real estate investment guidance, capital allocation, deal analysis',
  ogImage: '/home buyer.webp',
})

export default async function BuyingPage() {
  const page = await getPage('buying')

  return <BuyingContent hero={page?.hero} />
}
