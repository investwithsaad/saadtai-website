import fs from 'fs'
import path from 'path'
import Markdoc from '@markdoc/markdoc'
import {
  Section,
  Container,
  FadeIn,
} from '@/components/ui'
import { BlogHeroFadeIn } from '@/components/blog-hero-fade-in'
import { Breadcrumb } from '@/components/breadcrumb'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { SocialShareButtons } from '@/components/SocialShareButtons'
import { BlogPostCTA } from '@/components/BlogPostCTA'
import { getArticleSchema } from '@/lib/schema-generators'
import { BASE_URL } from '@/lib/metadata-factory'
import { notFound } from 'next/navigation'
import { config } from '@/markdoc/config'
import { renderMarkdoc } from '@/markdoc/renderer'

interface Props {
  params: Promise<{
    'blog-id': string
  }>
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
function getBlogPost(slug: string) {
  const postPath = path.join(process.cwd(), 'posts', `${slug}.mdoc`)

  if (!fs.existsSync(postPath)) {
    return null
  }

  const source = fs.readFileSync(postPath, 'utf-8')
  const ast = Markdoc.parse(source)
  const frontmatter = ast.attributes?.frontmatter || {}

  return {
    id: slug,
    ...frontmatter,
    ast,
  }
}

export async function generateMetadata({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = getBlogPost(blogId)

  if (!blogPost) {
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
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = getBlogPost(blogId)

  if (!blogPost) {
    notFound()
  }

  const formattedDate = formatDate(blogPost.date)

  // Transform Markdoc AST using config
  const content = Markdoc.transform(blogPost.ast, config)

  // Generate article schema
  const articleSchema = getArticleSchema({
    headline: blogPost.title,
    description: blogPost.excerpt,
    datePublished: formattedDate,
    author: {
      name: blogPost.author,
      url: `${BASE_URL}/about`
    },
    content: blogPost.excerpt
  })

  return (
    <>
      {/* Schema Markup */}
      <SchemaRenderer schema={articleSchema} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: blogPost.title }
      ]} />

      {/* Hero Section */}
      <BlogHeroFadeIn
        title={blogPost.title}
        subtitle={blogPost.subtitle}
        date={formattedDate}
        author={blogPost.author}
        authorTitle="Real Estate Expert"
        authorPhoto={blogPost.authorImage}
        category={blogPost.category}
      />

      {/* Main Article Content */}
      <Section background="white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto">
            {renderMarkdoc(content)}
          </FadeIn>

          {/* Social Share Buttons */}
          <SocialShareButtons
            title={blogPost.title}
            excerpt={blogPost.excerpt}
            url={`${BASE_URL}/blog/${blogPost.id}`}
          />
        </Container>
      </Section>

      <BlogPostCTA />
    </>
  )
}
