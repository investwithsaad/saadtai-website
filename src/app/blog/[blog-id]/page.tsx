import {
  Section,
  Container,
  Heading,
  Text,
  FadeIn,
  Card
} from '@/components/ui'
import { BlogHeroFadeIn } from '@/components/blog-hero-fade-in'
import { Breadcrumb } from '@/components/breadcrumb'
import { CTA } from '@/components/cta'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { SocialShareButtons } from '@/components/SocialShareButtons'
import { RenderInlineLinks } from '@/lib/inline-links'
import { getArticleSchema } from '@/lib/schema-generators'
import { blogPosts } from '@/data/blog-posts'
import { CALENDLY_CONFIG, buildCalendlyUrl } from '@/config/calendly'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    'blog-id': string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    'blog-id': post.id,
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

export async function generateMetadata({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = blogPosts.find(p => p.id === blogId)

  if (!blogPost) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  // Use blog post image if available, fallback to logo
  const imageUrl = blogPost.image
    ? `https://investwithsaad.com${blogPost.image}`
    : "https://investwithsaad.com/main-bg.png"

  return {
    title: `${blogPost.title} | Invest with Saad`,
    description: blogPost.excerpt,
    openGraph: {
      title: blogPost.title,
      description: blogPost.excerpt,
      url: `https://investwithsaad.com/blog/${blogPost.id}`,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1024,
          height: 728,
          alt: blogPost.title,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = blogPosts.find(p => p.id === blogId)

  if (!blogPost) {
    notFound()
  }

  const formattedDate = formatDate(blogPost.date)

  // Convert blog content array to full text for schema
  const fullArticleBody = blogPost.content
    .map((block) => {
      if (block.type === 'h2' || block.type === 'h3') {
        return block.text
      }
      return block.text
    })
    .join('\n\n')

  // Generate article schema
  const articleSchema = getArticleSchema({
    headline: blogPost.title,
    description: blogPost.excerpt,
    datePublished: formattedDate,
    author: {
      name: blogPost.author,
      url: 'https://investwithsaad.com/about-us'
    },
    content: fullArticleBody
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
        authorTitle="Realtor"
        authorPhoto={blogPost.authorImage}
        category={blogPost.category}
        backgroundImage={blogPost.image}
      />

      {/* Main Article Content */}
      <Section background="white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto prose prose-lg">
            {blogPost.content.map((block, index) => {
              if (block.type === 'h2') {
                return (
                  <Heading key={index} size="h2">
                    {block.text}
                  </Heading>
                )
              }

              if (block.type === 'h3') {
                return (
                  <Heading key={index} size="h3">
                    {block.text}
                  </Heading>
                )
              }

              if (block.type === 'blockquote') {
                return (
                  <div key={index} className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                    <Text className="text-gray-700 leading-relaxed italic">
                      {block.text}
                    </Text>
                  </div>
                )
              }

              // Default to paragraph for 'p' type
              return (
                <Text key={index} className="text-gray-700 leading-relaxed mb-6">
                  <RenderInlineLinks text={block.text} />
                </Text>
              )
            })}
          </FadeIn>

          {/* Social Share Buttons */}
          <SocialShareButtons
            title={blogPost.title}
            excerpt={blogPost.excerpt}
            url={`https://investwithsaad.com/blog/${blogPost.id}`}
          />
        </Container>
      </Section>

      <CTA
        title="Ready to make your next real estate move?"
        text="Let's discuss your home buying, selling, or valuation needs with a personal consultation from Saad."
        buttonText="Schedule a Call"
        href={buildCalendlyUrl(CALENDLY_CONFIG.discovery)}
        useBG={true}
      />
    </>
  )
}
