import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog-utils'
import { getHowToGuides } from '@/lib/how-to-utils'
import { BASE_URL } from '@/lib/metadata-factory'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts()
  const howToGuides = getHowToGuides()

  // Main navigation routes (highest priority)
  const mainNavRoutes = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.9 },
    { path: '/buying', priority: 0.9 },
    { path: '/selling', priority: 0.9 },
    { path: '/listings', priority: 0.9 },
    { path: '/vip-investor-list', priority: 0.9 },
    { path: '/blog', priority: 0.8 },
    { path: '/how-to', priority: 0.8 },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))

  // Utility pages
  const utilityRoutes = [
    { path: '/calculator', priority: 0.7 },
    { path: '/faq', priority: 0.7 },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }))

  // Legal pages
  const legalRoutes = [
    { path: '/privacy-policy', priority: 0.5 },
    { path: '/terms-of-service', priority: 0.5 },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: route.priority,
  }))

  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Dynamic how-to guide routes
  const guideRoutes = howToGuides.map((guide) => ({
    url: `${BASE_URL}/how-to/${guide.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...mainNavRoutes, ...blogRoutes, ...guideRoutes, ...utilityRoutes, ...legalRoutes]
}
