import { getPage } from '@/lib/sanity.queries'
import { HomeContent } from './home-content'

// Revalidate every 60 seconds, or on-demand via webhook
export const revalidate = 60

export default async function Home() {
  const page = await getPage('home')

  return <HomeContent hero={page?.hero} />
}
