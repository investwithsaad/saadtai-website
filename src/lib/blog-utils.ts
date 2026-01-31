import { getMarkdocContent, getMarkdocContentIds, getMarkdocContentByCategory, type MarkdocContent } from './content-utils'

/**
 * Blog post is just a MarkdocContent from the /posts directory
 */
export type BlogPost = MarkdocContent

/**
 * Get all blog posts from /posts directory
 */
export function getBlogPosts(): BlogPost[] {
  return getMarkdocContent('posts')
}

/**
 * Get all blog post IDs
 */
export function getBlogPostIds(): string[] {
  return getMarkdocContentIds('posts')
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getMarkdocContentByCategory('posts', category)
}
