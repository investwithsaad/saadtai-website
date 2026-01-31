'use client'

import { ArrowRight } from 'lucide-react'
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
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
}

interface RelatedBlogPostsProps {
  posts: BlogPost[]
}

export function RelatedBlogPosts({ posts }: RelatedBlogPostsProps) {
  return (
    <Section background="white">
      <Container>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Heading size="h2">Latest From the Blog</Heading>
            <Text size="lg" className="text-gray-700">
              Deeper insights and frameworks to pair with these guides.
            </Text>
          </div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <Heading size="h3" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                  {post.title}
                </Heading>
                <Text className="text-gray-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </Text>
                <Button variant="default" className="p-0 flex items-center gap-2 w-fit">
                  Read Article <ArrowRight size={16} />
                </Button>
              </Card>
            </Link>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
