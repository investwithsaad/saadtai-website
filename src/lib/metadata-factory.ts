import type { Metadata } from 'next'

export const BASE_URL = 'https://www.saadtherealtor.com'

interface PageMetadataProps {
  title: string
  description: string
  path: string
  keywords?: string
  ogImage?: string
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: PageMetadataProps): Metadata {
  const url = `${BASE_URL}${path}`

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
  }

  if (keywords) {
    metadata.keywords = keywords
  }

  if (ogImage) {
    metadata.openGraph = {
      ...metadata.openGraph,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    }
  }

  return metadata
}
