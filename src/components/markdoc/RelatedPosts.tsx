import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog-utils'
import { getInvestingGuides } from '@/lib/investing-guides-utils'

interface RelatedPostsProps {
  category?: string
  limit?: number
}

interface RelatedItem {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  type: 'blog' | 'guide'
  href: string
}

export function RelatedPosts({ category, limit = 3 }: RelatedPostsProps) {
  if (!category) {
    return null
  }

  const blogPosts = getBlogPosts()
    .filter((post) => post.category === category)
    .map((post): RelatedItem => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      category: post.category,
      type: 'blog',
      href: `/blog/${post.id}`,
    }))

  const guides = getInvestingGuides()
    .filter((guide) => guide.category === category)
    .map((guide): RelatedItem => ({
      id: guide.id,
      title: guide.title,
      excerpt: guide.excerpt,
      date: guide.date,
      category: guide.category,
      type: 'guide',
      href: `/investing/${guide.id}`,
    }))

  // Merge and sort by date (newest first), then take the limit
  const allItems = [...blogPosts, ...guides]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)

  if (allItems.length === 0) {
    return null
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Related Articles & Guides</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allItems.map((item) => (
          <Link key={`${item.type}-${item.id}`} href={item.href} aria-label={`Read ${item.type === 'guide' ? 'guide' : 'article'}: ${item.title}`}>
            <div className="group cursor-pointer h-full">
              <div className="border border-gray-200 rounded-lg p-4 h-full hover:border-primary transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                    item.type === 'guide'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {item.type === 'guide' ? 'Guide' : 'Article'}
                  </span>
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
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
