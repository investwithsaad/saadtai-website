import { getPage } from '@/lib/sanity.queries'
import { HomeContent } from './home-content'

export default async function Home() {
  const page = await getPage('home')

  return <HomeContent hero={page?.hero} />
}
