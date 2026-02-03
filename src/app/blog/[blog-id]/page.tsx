import fs from 'fs'
import path from 'path'
import Markdoc from '@markdoc/markdoc'
import {
  Section,
  Container,
  FadeIn,
  Heading,
  Text,
  Card,
  Button,
} from '@/components/ui'
import { BlogHeroFadeIn } from '@/components/blog-hero-fade-in'
import { Breadcrumb } from '@/components/breadcrumb'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { SocialShareButtons } from '@/components/SocialShareButtons'
import { BlogPostCTA } from '@/components/BlogPostCTA'
import { InlineFAQ } from '@/components/faq/FAQSection'
import { getArticleSchema, getHowToSchema } from '@/lib/schema-generators'
import { BASE_URL } from '@/lib/metadata-factory'
import { notFound } from 'next/navigation'
import { config } from '@/markdoc/config'
import { renderMarkdoc } from '@/markdoc/renderer'
import { getHowToGuides } from '@/lib/how-to-utils'
import Link from 'next/link'

interface Props {
  params: Promise<{
    'blog-id': string
  }>
}

interface BlogPost {
  id: string
  title?: string
  subtitle?: string
  excerpt?: string
  date?: string
  author?: string
  category?: string
  authorImage?: string
  ast?: any
  rawContent?: string
  faqs?: Array<{ q: string; a: string }>
  [key: string]: any
}

function parseFrontmatterValue(value: string) {
  const cleanValue = value.replace(/^["']|["']$/g, '')

  if (cleanValue === 'true') return true
  if (cleanValue === 'false') return false
  if (!isNaN(Number(cleanValue)) && cleanValue !== '') return Number(cleanValue)

  if ((cleanValue.startsWith('[') && cleanValue.endsWith(']')) || (cleanValue.startsWith('{') && cleanValue.endsWith('}'))) {
    try {
      return JSON.parse(cleanValue)
    } catch {
      return cleanValue
    }
  }

  return cleanValue
}

// Get all blog post IDs from posts directory
function getBlogPostIds() {
  const postsDir = path.join(process.cwd(), 'posts')
  if (!fs.existsSync(postsDir)) return []

  return fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.mdoc'))
    .map(file => file.replace('.mdoc', ''))
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const postIds = getBlogPostIds()
  return postIds.map((id) => ({
    'blog-id': id,
  }))
}

// Format date for display
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Read and parse Markdoc file
function getBlogPost(slug: string): BlogPost | null {
  const postPath = path.join(process.cwd(), 'posts', `${slug}.mdoc`)

  if (!fs.existsSync(postPath)) {
    return null
  }

  const source = fs.readFileSync(postPath, 'utf-8')

  // Extract YAML frontmatter manually
  const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/)
  let frontmatter: Record<string, any> = {}
  let contentSource = source

  if (frontmatterMatch) {
    const yamlContent = frontmatterMatch[1]
    // Parse YAML manually (simple key: value parsing)
    const lines = yamlContent.split('\n')
    for (const line of lines) {
      const [key, ...valueParts] = line.split(':')
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim()
        frontmatter[key.trim()] = parseFrontmatterValue(value)
      }
    }
    // Remove frontmatter from content
    contentSource = source.replace(/^---\n[\s\S]*?\n---\n/, '')
  }

  const ast = Markdoc.parse(contentSource)

  return {
    id: slug,
    ...frontmatter,
    ast,
    rawContent: contentSource,
  }
}

function cleanMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_{1,2}([^_]+)_{1,2}/g, '$1')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/#+\s+/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractHowToSteps(markdown: string): Array<{ name: string; description: string }> {
  if (!markdown) return []

  const matches = Array.from(markdown.matchAll(/^###\s+(Step\s*\d+[^\n]*)/gm))
  if (matches.length === 0) return []

  return matches.map((match, index) => {
    const heading = match[1]
    const startIndex = (match.index || 0) + match[0].length
    const endIndex = index + 1 < matches.length ? (matches[index + 1].index || markdown.length) : markdown.length
    const section = markdown.slice(startIndex, endIndex)
    const firstParagraph = section.split('\n\n').find((p) => p.trim().length > 0) || ''

    return {
      name: cleanMarkdown(heading),
      description: cleanMarkdown(firstParagraph),
    }
  })
}

function getFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": 'https://schema.org',
    "@type": 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      "@type": 'Question',
      name: faq.q,
      acceptedAnswer: {
        "@type": 'Answer',
        text: faq.a,
      },
    })),
  }
}

function toKeywordArray(value: any): string[] {
  if (!value) return []
  if (Array.isArray(value)) return value.map((v) => String(v).toLowerCase())
  if (typeof value === 'string') {
    const normalized = value.replace(/^\[/, '').replace(/\]$/, '')
    return normalized.split(',').map((v) => v.trim().toLowerCase()).filter(Boolean)
  }
  return []
}

function extractTokens(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((token) => token.length > 3)
  )
}

function getRelatedGuidesForPost(post: BlogPost, limit = 3) {
  const guides = getHowToGuides()
  const postKeywords = new Set(toKeywordArray(post.keywords))
  const postTokens = extractTokens(`${post.title || ''} ${post.excerpt || ''} ${post.category || ''}`)

  const scored = guides.map((guide) => {
    const guideKeywords = new Set(toKeywordArray(guide.keywords))
    const guideTokens = extractTokens(`${guide.title || ''} ${guide.excerpt || ''} ${guide.category || ''}`)

    let score = 0
    guideKeywords.forEach((keyword) => {
      if (postKeywords.has(keyword)) score += 3
    })
    guideTokens.forEach((token) => {
      if (postTokens.has(token)) score += 1
    })

    return { guide, score }
  })

  const filtered = scored.filter((item) => item.score > 0)
  const ordered = (filtered.length > 0 ? filtered : scored)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.guide)

  return ordered
}

export async function generateMetadata({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = getBlogPost(blogId)

  if (!blogPost || !blogPost.title) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  return {
    title: `${blogPost.title} | Saad Tai`,
    description: blogPost.excerpt,
    alternates: {
      canonical: `${BASE_URL}/blog/${blogPost.id}`,
    },
    openGraph: {
      title: blogPost.title,
      description: blogPost.excerpt,
      url: `${BASE_URL}/blog/${blogPost.id}`,
      type: 'article',
      siteName: 'Invest with Saad',
      images: [
        {
          url: `${BASE_URL}/main-bg.png`,
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = getBlogPost(blogId)

  if (!blogPost || !blogPost.title || !blogPost.date) {
    notFound()
  }

  const formattedDate = formatDate(blogPost.date!)
  const isoDate = new Date(blogPost.date!).toISOString().split('T')[0]

  // Transform Markdoc AST using config
  const content = Markdoc.transform(blogPost.ast, config)

  // Determine if this is a how-to post based on category or title
  const isHowToPost = 
    blogPost.category?.toLowerCase() === 'how-to' ||
    blogPost.title?.toLowerCase().includes('how to') ||
    blogPost.title?.toLowerCase().includes('guide') ||
    ['60-second-multifamily-deal-analysis', 'multifamily-deal-evaluation-framework', 'house-hacking-live-free-real-estate', 'three-ways-spot-profitable-multifamily-deals', 'sell-rental-property-without-disturbing-tenants', 'selling-tenant-occupied-property-strategy'].includes(blogId)

  // Generate article schema with full metadata
  const articleSchema = getArticleSchema({
    headline: blogPost.title!,
    description: blogPost.excerpt!,
    image: blogPost.authorImage,
    datePublished: isoDate,
    author: {
      name: blogPost.author!,
      url: `${BASE_URL}/about`
    },
    content: blogPost.keyTakeaway || blogPost.excerpt!,
    keywords: Array.isArray(blogPost.keywords) ? blogPost.keywords : (blogPost.keywords ? blogPost.keywords.split(',').map((k: string) => k.trim()) : [])
  })

  // Generate HowTo schema if applicable
  const faqs = Array.isArray(blogPost.faqs) ? blogPost.faqs : []
  const schemas: any[] = [articleSchema, ...(faqs.length > 0 ? [getFaqSchema(faqs)] : [])]
  if (isHowToPost) {
    const extractedSteps = extractHowToSteps(blogPost.rawContent || '')
    const steps = extractedSteps.length > 0 ? extractedSteps : [
      {
        name: blogPost.keyTakeaway?.split('\n')[0] || 'Get Started',
        description: blogPost.keyTakeaway || blogPost.excerpt || 'Follow the steps in this guide to make a clear decision.'
      }
    ]

    const howToSchema = getHowToSchema({
      name: blogPost.title!,
      description: blogPost.keyTakeaway || blogPost.excerpt || '',
      steps
    })
    schemas.push(howToSchema)
  }

  const relatedGuides = getRelatedGuidesForPost(blogPost)

  return (
    <>
      {/* Schema Markup */}
      {schemas.map((schema, index) => (
        <SchemaRenderer key={index} schema={schema} />
      ))}

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: blogPost.title! }
      ]} />

      {/* Hero Section */}
      <BlogHeroFadeIn
        title={blogPost.title!}
        subtitle={blogPost.subtitle}
        date={formattedDate}
        author={blogPost.author}
        authorTitle="Real Estate Investor | NY License #10401373295 | FL License #SL3651394"
        authorPhoto={blogPost.authorImage}
        category={blogPost.category}
      />

      {/* Main Article Content */}
      <Section background="white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto">
            {/* Key Takeaway */}
            {blogPost.keyTakeaway && (
              <div className="bg-gray-100 p-4 rounded mb-8">
                <Text className="text-gray-700 text-base">
                  <span className="font-semibold">Key Takeaway:</span> {blogPost.keyTakeaway}
                </Text>
              </div>
            )}
            {renderMarkdoc(content)}

            {faqs.length > 0 && (
              <div className="mt-10">
                <Heading size="h2" className="mb-4">FAQs</Heading>
                <InlineFAQ faqs={faqs} />
              </div>
            )}
          </FadeIn>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <Heading size="h2" className="mb-2">About Saad Tai</Heading>
              <Text className="text-slate-700 mb-4">
                Saad Tai is a multifamily investor and advisor serving the Capital Region (Albany, Schenectady, Troy)
                and Kissimmee, FL. He specializes in underwriting accuracy, pricing strategy, and clean exits for
                small multifamily owners and investors.
              </Text>
              <ul className="space-y-2 text-slate-700">
                <li><strong>NY License:</strong> #10401373295</li>
                <li><strong>FL License:</strong> #SL3651394</li>
              </ul>
            </div>
          </div>

          {/* Social Share Buttons */}
          <SocialShareButtons
            title={blogPost.title!}
            excerpt={blogPost.excerpt!}
            url={`${BASE_URL}/blog/${blogPost.id}`}
          />

          {relatedGuides.length > 0 && (
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
              <Heading size="h2" className="mb-4">Related How-To Guides</Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedGuides.map((guide) => (
                  <Link key={guide.id} href={`/investing/${guide.id}`}>
                    <Card className="p-4 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <Heading size="h4" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                        {guide.title}
                      </Heading>
                      <Text className="text-gray-700 text-sm mb-3">
                        {guide.excerpt}
                      </Text>
                      <Button variant="default" className="p-0 text-sm">Start Guide →</Button>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <BlogPostCTA />
    </>
  )
}
