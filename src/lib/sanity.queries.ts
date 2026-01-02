import { client } from './sanity.client'

/**
 * Blog Post Queries
 */
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc)
  `)
}

export async function getBlogPost(slug: string) {
  return client.fetch(
    `
    *[_type == "blogPost" && slug.current == $slug][0]
    `,
    { slug }
  )
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "blogPost" && slug.current == $slug][0]
    `,
    { slug }
  )
}

/**
 * Listing Queries
 */
export async function getListings(status?: string) {
  const statusFilter = status ? `&& status == $status` : ''
  return client.fetch(
    `
    *[_type == "listing" ${statusFilter}] | order(status asc, address asc)
    `,
    { status }
  )
}

export async function getListing(slug: string) {
  return client.fetch(
    `
    *[_type == "listing" && slug.current == $slug][0]
    `,
    { slug }
  )
}

/**
 * FAQ Queries
 */
export async function getFAQs(category?: string) {
  const categoryFilter = category ? `&& category == $category` : ''
  return client.fetch(
    `
    *[_type == "faq" ${categoryFilter}] | order(order asc, question asc)
    `,
    { category }
  )
}

export async function getFAQCategories() {
  return client.fetch(`
    *[_type == "faq"] | group(category) | map(category)
  `)
}

/**
 * Neighborhood Queries
 */
export async function getNeighborhoods() {
  return client.fetch(`
    *[_type == "neighborhood"] | order(name asc)
  `)
}

export async function getNeighborhood(slug: string) {
  return client.fetch(
    `
    *[_type == "neighborhood" && slug.current == $slug][0]
    `,
    { slug }
  )
}

/**
 * Testimonial Queries
 */
export async function getTestimonials(onlyHomepage = true) {
  const filter = onlyHomepage ? `&& displayOnHomepage == true` : ''
  return client.fetch(`
    *[_type == "testimonial" ${filter}] | order(_createdAt desc)
  `)
}

/**
 * Page Section Queries (A/B Testing)
 */
export async function getPageSection(identifier: string) {
  return client.fetch(
    `
    *[_type == "pageSection" && identifier == $identifier && active == true][0]
    `,
    { identifier }
  )
}

export async function getPageSectionVariants(identifier: string) {
  return client.fetch(
    `
    *[_type == "pageSection" && identifier == $identifier] | order(variant asc)
    `,
    { identifier }
  )
}

/**
 * Site Settings Query
 */
export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0]
  `)
}

/**
 * Utility: Fetch with fallback to TypeScript data
 * Useful during migration
 */
export async function fetchWithFallback<T>(
  query: string,
  fallback: T
): Promise<T> {
  try {
    const result = await client.fetch(query)
    return result || fallback
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback:', error)
    return fallback
  }
}
