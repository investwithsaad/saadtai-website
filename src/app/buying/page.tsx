import { createPageMetadata } from '@/lib/metadata-factory'
import { BuyingContent } from './buying-content'

export const metadata = createPageMetadata({
  title: 'Multifamily Investment Advisor | Saad Tai',
  description: 'Get expert guidance on multifamily property investments, capital allocation, and deal evaluation to avoid overpaying and make confident investment decisions.',
  path: '/buying',
  keywords: 'multifamily investor advisor, real estate investment guidance, capital allocation, deal analysis',
  ogImage: '/home buyer.webp',
})

export default function BuyingPage() {
  return <BuyingContent />
}
