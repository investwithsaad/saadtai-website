import fs from 'fs'
import path from 'path'
import Markdoc from '@markdoc/markdoc'
import type { Metadata } from 'next'
import {
  Section,
  Container,
  FadeIn,
  Heading,
  Text
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

interface Props {
  params: Promise<{
    'guide-id': string
  }>
}

interface InvestingGuide {
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

// Get all guide IDs from guides directory
function getGuideIds() {
  const guideDir = path.join(process.cwd(), 'guides')
  if (!fs.existsSync(guideDir)) return []

  return fs.readdirSync(guideDir)
    .filter(file => file.endsWith('.mdoc'))
    .map(file => file.replace('.mdoc', ''))
}

// Generate static params for all guides
export async function generateStaticParams() {
  const guideIds = getGuideIds()
  return guideIds.map((id) => ({
    'guide-id': id,
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
function getGuide(slug: string): InvestingGuide | null {
  const guidePath = path.join(process.cwd(), 'guides', `${slug}.mdoc`)

  if (!fs.existsSync(guidePath)) {
    return null
  }

  const source = fs.readFileSync(guidePath, 'utf-8')

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'guide-id': guideId } = await params
  const guide = getGuide(guideId)

  if (!guide || !guide.title) {
    return {
      title: 'Guide Not Found'
    }
  }

  const defaultImage = `${BASE_URL}/main-bg.png`

  return {
    title: `${guide.title} | Saad Tai`,
    description: guide.excerpt,
    alternates: {
      canonical: `${BASE_URL}/investing/${guide.id}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      url: `${BASE_URL}/investing/${guide.id}`,
      type: 'article',
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
  }
}

export default async function InvestingGuidePage({ params }: Props) {
  const { 'guide-id': guideId } = await params
  const guide = getGuide(guideId)

  if (!guide || !guide.title || !guide.date) {
    notFound()
  }

  const formattedDate = formatDate(guide.date!)
  const isoDate = new Date(guide.date!).toISOString().split('T')[0]

  // Transform Markdoc AST using config
  const content = Markdoc.transform(guide.ast, config)

  // Generate article schema
  const articleSchema = getArticleSchema({
    headline: guide.title!,
    description: guide.excerpt!,
    image: guide.authorImage,
    datePublished: isoDate,
    author: {
      name: guide.author!,
      url: `${BASE_URL}/about`
    },
    content: guide.excerpt!,
    keywords: Array.isArray(guide.keywords) ? guide.keywords : (guide.keywords ? guide.keywords.split(',').map((k: string) => k.trim()) : [])
  })

  // Generate HowTo schema for guides
  const extractedSteps = extractHowToSteps(guide.rawContent || '')
  const steps = extractedSteps.length > 0 ? extractedSteps : [
    {
      name: guide.title!,
      description: guide.excerpt!
    }
  ]

  const howToSchema = getHowToSchema({
    name: guide.title!,
    description: guide.excerpt!,
    steps,
  })

  const faqs = Array.isArray(guide.faqs) ? guide.faqs : []

  return (
    <>
      {/* Schema Markup */}
      <SchemaRenderer schemas={[articleSchema, howToSchema, ...(faqs.length > 0 ? [getFaqSchema(faqs)] : [])]} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[
        { label: 'Investing', href: '/investing' },
        { label: guide.title! }
      ]} />

      {/* Hero Section */}
      <BlogHeroFadeIn
        title={guide.title!}
        subtitle={guide.subtitle}
        date={formattedDate}
        author={guide.author}
        authorTitle="Real Estate Investor | NY License #10401373295 | FL License #SL3651394"
        authorPhoto={guide.authorImage}
        category={guide.category}
      />

      {/* Main Guide Content */}
      <Section background="white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto">
            {/* Key Takeaway */}
            {guide.keyTakeaway && (
              <div className="bg-gray-100 p-4 rounded mb-8">
                <Text className="text-gray-700 text-base">
                  <span className="font-semibold">Key Takeaway:</span> {guide.keyTakeaway}
                </Text>
              </div>
            )}
            {renderMarkdoc(content)}

            {faqs.length > 0 && (
              <div className="mt-10">
                <Heading size="h3" className="mb-4">FAQs</Heading>
                <InlineFAQ faqs={faqs} />
              </div>
            )}
          </FadeIn>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <Heading size="h3" className="mb-2">About Saad Tai</Heading>
              <Text className="text-slate-700 mb-4">
                Saad Tai is a multifamily investor and real estate advisor serving the Capital Region (Albany, Schenectady, Troy)
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
            title={guide.title!}
            excerpt={guide.excerpt!}
            url={`${BASE_URL}/investing/${guide.id}`}
          />
        </Container>
      </Section>

      {/* CTA Section */}
      <BlogPostCTA />
    </>
  )
}
