import { createPageMetadata } from '@/lib/metadata-factory'
import { VIPContent } from './vip-content'

export const metadata = createPageMetadata({
  title: 'VIP Investor Access | Curated Multifamily Deals | Saad Tai',
  description: 'Get early access to curated 2-4 unit deals with selective distribution. Fewer bidders, better negotiating power, and verified numbers for serious investors.',
  path: '/vip-investor-list',
  keywords: 'off-market deals, VIP investor, curated properties, multifamily investment',
  ogImage: '/home seller.webp',
})

export default function VIPInvestorListPage() {
  return <VIPContent />
}
