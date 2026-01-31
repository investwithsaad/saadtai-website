import { getMarkdocContent, getMarkdocContentIds, getMarkdocContentByCategory, type MarkdocContent } from './content-utils'

/**
 * How-to guide is just a MarkdocContent from the /how-to directory
 */
export type HowToGuide = MarkdocContent

/**
 * Get all how-to guides from /how-to directory
 */
export function getHowToGuides(): HowToGuide[] {
  return getMarkdocContent('how-to')
}

/**
 * Get all how-to guide IDs
 */
export function getHowToGuideIds(): string[] {
  return getMarkdocContentIds('how-to')
}

/**
 * Get how-to guides by category
 */
export function getGuidesByCategory(category: string): HowToGuide[] {
  return getMarkdocContentByCategory('how-to', category)
}

/**
 * Get related guides by category (excluding current guide)
 */
export function getRelatedGuides(currentId: string, limit: number = 3): HowToGuide[] {
  const guides = getHowToGuides()
  const currentGuide = guides.find(g => g.id === currentId)

  if (!currentGuide) return []

  return guides
    .filter(g => g.id !== currentId && g.category === currentGuide.category)
    .slice(0, limit)
}
