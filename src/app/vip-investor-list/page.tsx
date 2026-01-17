import { createPageMetadata } from '@/lib/metadata-factory'
import { VIPContent } from './vip-content'
import { getPage } from '@/lib/sanity.queries'

export async function generateMetadata() {
  const page = await getPage('vip-investor-list')

  return createPageMetadata({
    title: page?.title || 'VIP Investor Access | Curated Multifamily Deals | Saad Tai',
    description: page?.description || 'Get early access to curated 2-4 unit deals with selective distribution. Fewer bidders, better negotiating power, and verified numbers for serious investors.',
    path: '/vip-investor-list',
    ogImage: page?.ogImage?.asset?.url || '/home seller.webp',
  })
}

export default async function VIPInvestorListPage() {
  const page = await getPage('vip-investor-list')
  return <VIPContent hero={page?.hero} />
}
