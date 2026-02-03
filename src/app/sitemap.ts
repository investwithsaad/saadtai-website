import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { getBlogPosts } from '@/lib/blog-utils'
import { getHowToGuides } from '@/lib/how-to-utils'
import { BASE_URL } from '@/lib/metadata-factory'

/**
 * Parse date string (YYYY-MM-DD) to Date object
 */
function parseDate(dateString: string): Date {
  const date = new Date(dateString)
  return isNaN(date.getTime()) ? new Date() : date
}

/**
 * Get file modification time for a page file
 */
function getFileModificationDate(filePath: string): Date {
  try {
    const stats = fs.statSync(filePath)
    return stats.mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts()
  const howToGuides = getHowToGuides()

  // Main navigation routes (highest priority)
  const mainNavRoutes = [
    { path: '', priority: 1.0, file: 'src/app/page.tsx' },
    { path: '/about', priority: 0.9, file: 'src/app/about/page.tsx' },
    { path: '/buying', priority: 0.9, file: 'src/app/buying/page.tsx' },
    { path: '/selling', priority: 0.9, file: 'src/app/selling/page.tsx' },
    { path: '/blog', priority: 0.8, file: 'src/app/blog/page.tsx' },
    { path: '/investing', priority: 0.8, file: 'src/app/investing/page.tsx' },
    { path: '/listings', priority: 0.85, file: 'src/app/listings/page.tsx' },
    { path: '/vip-investor-list', priority: 0.85, file: 'src/app/vip-investor-list/page.tsx' },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: getFileModificationDate(path.join(process.cwd(), route.file)),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))

  // Utility pages
  const utilityRoutes = [
    { path: '/calculator', priority: 0.7, file: 'src/app/calculator/page.tsx' },
    { path: '/faq', priority: 0.7, file: 'src/app/faq/page.tsx' },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: getFileModificationDate(path.join(process.cwd(), route.file)),
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }))

  // Legal pages
  const legalRoutes = [
    { path: '/privacy-policy', priority: 0.5, file: 'src/app/privacy-policy/page.tsx' },
    { path: '/terms-of-service', priority: 0.5, file: 'src/app/terms-of-service/page.tsx' },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: getFileModificationDate(path.join(process.cwd(), route.file)),
    changeFrequency: 'yearly' as const,
    priority: route.priority,
  }))

  // Dynamic blog routes - use actual post dates
  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: parseDate(post.date),
    changeFrequency: 'never' as const,
    priority: 0.75,
  }))

  // Dynamic how-to guide routes - use actual guide dates
  const guideRoutes = howToGuides.map((guide) => ({
    url: `${BASE_URL}/investing/${guide.id}`,
    lastModified: parseDate(guide.date),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const allRoutes = [...mainNavRoutes, ...blogRoutes, ...guideRoutes, ...utilityRoutes, ...legalRoutes]

  // De-dupe by URL (keep first occurrence for priority ordering)
  const uniqueRoutes = new Map<string, MetadataRoute.Sitemap[number]>()
  for (const route of allRoutes) {
    if (!uniqueRoutes.has(route.url)) {
      uniqueRoutes.set(route.url, route)
    }
  }

  return Array.from(uniqueRoutes.values())
}
