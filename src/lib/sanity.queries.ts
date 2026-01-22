import { client } from './sanity.client'

/**
 * Listing Queries
 */
export async function getListings(status?: string) {
  const statusFilter = status ? `&& status == $status` : ''
  return client.fetch(
    `
    *[_type == "listing" ${statusFilter}] | order(status asc, address asc) {
      ...,
      image {
        asset -> {
          url
        },
        hotspot,
        crop
      }
    }
    `,
    { status }
  )
}

export async function getListing(slug: string) {
  return client.fetch(
    `
    *[_type == "listing" && slug.current == $slug][0] {
      ...,
      image {
        asset -> {
          url
        },
        hotspot,
        crop
      }
    }
    `,
    { slug }
  )
}

/**
 * Page Queries
 */
export async function getPage(slug: string) {
  return client.fetch(
    `
    *[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      ogImage {
        asset -> {
          url
        }
      },
      hero {
        headline,
        description,
        ctaText
      }
    }
    `,
    { slug }
  )
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
