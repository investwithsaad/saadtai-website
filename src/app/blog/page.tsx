import { ArrowRight, Calendar } from 'lucide-react'
import type { Metadata } from 'next'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  StaggerContainer,
  Button,
  FadeIn
} from '@/components/ui'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { Breadcrumb } from '@/components/breadcrumb'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { BlogPageCTA } from '@/components/BlogPageCTA'
import { EventBanner } from '@/components/EventBanner'
import { blogPosts } from '@/data/blog-posts'
import Link from 'next/link'
import { createPageMetadata } from '@/lib/metadata-factory'
import { BASE_URL } from '@/lib/metadata-factory'
import { getPage } from '@/lib/sanity.queries'
import { formatTextWithLineBreaks } from '@/lib/format-text'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('blog')

  return createPageMetadata({
    title: page?.title || 'Multifamily Investment Blog | Saad Tai',
    description: page?.description || 'Multifamily investment insights and strategies for small investors. Cap rates, cash flow, market analysis, and portfolio guidance.',
    path: '/blog',
    ogImage: page?.ogImage?.asset?.url || '/House1.webp',
  })
}

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate + 'T00:00:00Z')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Blog collection schema
const blogCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Invest with Saad - Multifamily Investment Blog",
  "description": "Investment insights, multifamily real estate strategies, and market analysis for small multifamily investors in the Capital Region",
  "url": `${BASE_URL}/blog`,
  "mainEntity": {
    "@type": "Blog",
    "name": "Invest with Saad Blog",
    "blogPosts": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `${BASE_URL}/blog/${post.id}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  }
}

export default async function BlogPage() {
  const page = await getPage('blog')
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const heroHeadline = page?.hero?.headline || 'Invest with Saad Blog'
  const heroDescription = page?.hero?.description || 'Multifamily investment strategies, market insights, and portfolio guidance for small investors in the Capital Region.'

  return (
    <>
      {/* Schema Markup */}
      <SchemaRenderer schema={blogCollectionSchema} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'Blog' }]} />

      <EventBanner />

      {/* Hero Section */}
      <HeroFadeIn
        title={heroHeadline}
        subtitle={heroDescription}
      />

      {/* Blog Posts List */}
      <Section background="white">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <Calendar size={16} className="text-gold-500" />
                    <span>{formatDate(post.date)}</span>
                  </div>

                  <span className="inline-block mb-4 px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full w-fit">
                    {post.category}
                  </span>

                  <Heading size="h3" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                    {post.title}
                  </Heading>

                  <Text className="text-gray-600 text-sm mb-4">
                    {post.subtitle}
                  </Text>

                  <Text className="text-gray-700 mb-6 flex-1 leading-relaxed">
                    {formatTextWithLineBreaks(post.excerpt)}
                  </Text>

                  <Button variant="default" className="p-0 flex items-center gap-2 w-fit">
                    Read More <ArrowRight size={16} />
                  </Button>
                </Card>
              </Link>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <BlogPageCTA />
    </>
  )
}
