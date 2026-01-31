import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { HeroStatic } from '@/components/hero-static'
import { Breadcrumb } from '@/components/breadcrumb'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { EventBanner } from '@/components/EventBanner'
import { getHowToGuides } from '@/lib/how-to-utils'
import { getBlogPosts } from '@/lib/blog-utils'
import { createPageMetadata } from '@/lib/metadata-factory'
import { BASE_URL } from '@/lib/metadata-factory'
import { howToIndexFaqs } from '@/data/ai-faqs'

// Lazy load all below-the-fold sections
const HowToGuidesSection = dynamic(
  () => import('@/components/HowToGuidesSection').then((mod) => mod.HowToGuidesSection),
  { loading: () => <div className="h-96" /> }
)

const RelatedBlogPosts = dynamic(
  () => import('@/components/RelatedBlogPosts').then((mod) => mod.RelatedBlogPosts),
  { loading: () => <div className="h-80" /> }
)

const FAQSectionServer = dynamic(
  () => import('@/components/faq/FAQSectionServer').then((mod) => mod.FAQSectionServer),
  { loading: () => <div className="h-64" /> }
)

const BlogPostCTA = dynamic(
  () => import('@/components/BlogPostCTA').then((mod) => mod.BlogPostCTA),
  { loading: () => <div className="h-48" /> }
)

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'How-To Guides | Real Estate Investment & Buying Tips',
    description: 'Step-by-step guides for real estate investors and homebuyers. Learn how to evaluate deals, buy your first home, and maximize returns.',
    path: '/how-to',
    ogImage: '/House1.webp',
  })
}

export default function HowToPage() {
  const guides = getHowToGuides()
  const blogPosts = getBlogPosts()
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  // How-to guides collection schema
  const howToCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Real Estate How-To Guides",
    "description": "Comprehensive guides for real estate investors and homebuyers in the Capital Region",
    "url": `${BASE_URL}/how-to`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": guides.map((guide, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": guide.title,
        "description": guide.excerpt,
        "url": `${BASE_URL}/how-to/${guide.id}`,
        "item": {
          "@type": "HowTo",
          "name": guide.title,
          "description": guide.excerpt
        }
      }))
    }
  }

  // Group guides by category
  const categories = Array.from(new Set(guides.map(g => g.category)))
  const guidesByCategory = categories.map(cat => ({
    category: cat,
    guides: guides.filter(g => g.category === cat)
  }))

  return (
    <>
      {/* Schema Markup */}
      <SchemaRenderer schema={howToCollectionSchema} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'How-To Guides' }]} />

      <EventBanner />

      {/* Hero Section */}
      <HeroStatic
        title="How-To Guides"
        subtitle="Master real estate investing and homebuying with our step-by-step guides. From first-time buyers to experienced investors, we've got the insights you need."
      />

      {/* Guides by Category - Lazy loaded */}
      <HowToGuidesSection guidesByCategory={guidesByCategory} />

      {/* Related Blog Posts - Lazy loaded */}
      {recentPosts.length > 0 && <RelatedBlogPosts posts={recentPosts} />}

      {/* How-To FAQ */}
      <FAQSectionServer
        title="How-To Guide FAQs"
        description="Quick answers about using the guides effectively."
        faqs={howToIndexFaqs}
        background="background"
        maxDisplay={4}
      />

      {/* CTA Section */}
      <BlogPostCTA />
    </>
  )
}
