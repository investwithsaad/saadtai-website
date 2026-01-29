import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog-utils'

interface RelatedPostsProps {
  category?: string
  limit?: number
}

export function RelatedPosts({ category, limit = 3 }: RelatedPostsProps) {
  if (!category) {
    return null
  }

  const blogPosts = getBlogPosts()
  // Filter posts by category (excluding current post if needed)
  const relatedPosts = blogPosts
    .filter((post) => post.category === category)
    .slice(0, limit)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="group cursor-pointer h-full">
              <div className="border border-gray-200 rounded-lg p-4 h-full hover:border-primary transition-colors">
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="text-sm text-primary font-medium">
                  Read More →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
