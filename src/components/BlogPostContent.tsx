'use client'

import { useScrollTracking } from '@/hooks/useScrollTracking'
import { Container, FadeIn, Heading, Text } from '@/components/ui'
import { ReactNode } from 'react'

interface BlogPostContentProps {
  children: ReactNode
  keyTakeaway?: string
}

/**
 * BlogPostContent
 * Wraps blog post content with section tracking
 */
export function BlogPostContent({ children, keyTakeaway }: BlogPostContentProps) {
  const contentRef = useScrollTracking({ sectionName: 'blog_content' })

  return (
    <div ref={contentRef}>
      <Container>
        <FadeIn className="max-w-3xl mx-auto">
          {/* Key Takeaway */}
          {keyTakeaway && (
            <div className="bg-gray-100 p-4 rounded mb-8">
              <Text className="text-gray-700 text-base">
                <span className="font-semibold">Key Takeaway:</span> {keyTakeaway}
              </Text>
            </div>
          )}
          {children}
        </FadeIn>
      </Container>
    </div>
  )
}
