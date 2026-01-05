import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.investwithsaad.com'

  // Main navigation routes (highest priority)
  const mainNavRoutes = [
    { path: '', priority: 1.0 },
    { path: '/buying', priority: 0.9 },
    { path: '/selling', priority: 0.9 },
    { path: '/listings', priority: 0.9 },
    { path: '/vip-investor-list', priority: 0.9 },
    { path: '/blog', priority: 0.8 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))

  // Utility pages
  const utilityRoutes = [
    { path: '/calculator', priority: 0.7 },
    { path: '/faq', priority: 0.7 },
    { path: '/landing', priority: 0.6 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }))

  // Legal pages
  const legalRoutes = [
    { path: '/privacy-policy', priority: 0.5 },
    { path: '/terms-of-service', priority: 0.5 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: route.priority,
  }))

  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...mainNavRoutes, ...blogRoutes, ...utilityRoutes, ...legalRoutes]
}
