import { MetadataRoute } from 'next'
import { fundingSolutions } from '@/data/solutions'
import { blogPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saadtherealtor.com'

  // Static routes
  const routes = [
    '',
    '/contact-us',
    '/faq',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
    '/buyer-seller-tips',
    '/buying',
    '/selling',
    '/listings',
    '/buy-sell',
    '/vip-investor-list',
    '/compare/albany-vs-schenectady-vs-Niskayuna',
    '/how-to/mortgage-pre-approval',
    '/how-to/first-time-buyer-guide',
    '/how-to/selling-your-home',
    '/benchmarks/capital-region-2025',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic solution routes
  const solutionRoutes = fundingSolutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...solutionRoutes, ...blogRoutes]
}
