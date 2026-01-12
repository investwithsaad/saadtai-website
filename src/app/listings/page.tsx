import { createPageMetadata } from '@/lib/metadata-factory'
import { ListingsContent } from './listings-content'
import { getListings } from '@/lib/sanity.queries'

export const metadata = createPageMetadata({
  title: 'Multifamily Investment Properties | Saad Tai',
  description: 'Browse available multifamily investment properties and listings across Albany County, Schenectady County, and Rensselaer County. Find your next investment opportunity.',
  path: '/listings',
  keywords: 'multifamily listings, investment properties, real estate listings, Albany County properties',
  ogImage: '/House1.webp',
})

export default async function ListingsPage() {
  const listings = await getListings()

  return <ListingsContent listings={listings} />
}
