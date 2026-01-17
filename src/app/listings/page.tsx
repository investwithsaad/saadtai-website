import { createPageMetadata } from '@/lib/metadata-factory'
import { ListingsContent } from './listings-content'
import { getListings, getPage } from '@/lib/sanity.queries'

export async function generateMetadata() {
  const page = await getPage('listings')

  return createPageMetadata({
    title: page?.title || 'Multifamily Investment Properties | Saad Tai',
    description: page?.description || 'Browse available multifamily investment properties and listings across Albany County, Schenectady County, and Rensselaer County. Find your next investment opportunity.',
    path: '/listings',
    ogImage: page?.ogImage?.asset?.url || '/House1.webp',
  })
}

export default async function ListingsPage() {
  const listings = await getListings()
  const page = await getPage('listings')

  return <ListingsContent listings={listings} hero={page?.hero} />
}
