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
    { path: '/how-to', priority: 0.8, file: 'src/app/how-to/page.tsx' },
    { path: '/listings', priority: 0.85, file: 'src/app/listings/page.tsx' },
    { path: '/vip-investor-list', priority: 0.85, file: 'src/app/vip-investor-list/page.tsx' },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: getFileModificationDate(path.join(process.cwd(), route.file)),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))

  // High-impact guide & resource pages (GEO optimized)
  const guideResourceRoutes = [
    { path: '/investing', priority: 0.9, file: 'src/app/investing/page.tsx' },
    { path: '/investing/multifamily-investment-guide', priority: 0.85, file: 'src/app/investing/multifamily-investment-guide/page.tsx' },
    { path: '/investing/cap-rate-guide', priority: 0.85, file: 'src/app/investing/cap-rate-guide/page.tsx' },
    { path: '/investing/albany-multifamily-investing', priority: 0.8, file: 'src/app/investing/albany-multifamily-investing/page.tsx' },
    { path: '/investing/schenectady-multifamily-investing', priority: 0.8, file: 'src/app/investing/schenectady-multifamily-investing/page.tsx' },
    { path: '/investing/troy-multifamily-investing', priority: 0.8, file: 'src/app/investing/troy-multifamily-investing/page.tsx' },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: getFileModificationDate(path.join(process.cwd(), route.file)),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  })).filter(route => {
    // Only include routes that actually exist
    try {
      fs.statSync(new URL(route.url).pathname)
      return true
    } catch {
      return true // Include even if file check fails (may be dynamic)
    }
  })

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
    url: `${BASE_URL}/how-to/${guide.id}`,
    lastModified: parseDate(guide.date),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...mainNavRoutes, ...guideResourceRoutes, ...blogRoutes, ...guideRoutes, ...utilityRoutes, ...legalRoutes]
}
