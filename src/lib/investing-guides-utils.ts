import { getMarkdocContent, getMarkdocContentIds, getMarkdocContentByCategory, type MarkdocContent } from './content-utils'

/**
 * Investing guide is just a MarkdocContent from the /investing directory
 */
export type InvestingGuide = MarkdocContent

/**
 * Get all investing guides from /guides directory
 */
export function getInvestingGuides(): InvestingGuide[] {
  return getMarkdocContent('guides')
}

/**
 * Get all investing guide IDs
 */
export function getInvestingGuideIds(): string[] {
  return getMarkdocContentIds('guides')
}

/**
 * Get investing guides by category
 */
export function getGuidesByCategory(category: string): InvestingGuide[] {
  return getMarkdocContentByCategory('guides', category)
}

/**
 * Get related guides by category (excluding current guide)
 */
export function getRelatedGuides(currentId: string, limit: number = 3): InvestingGuide[] {
  const guides = getInvestingGuides()
  const currentGuide = guides.find(g => g.id === currentId)

  if (!currentGuide) return []

  return guides
    .filter(g => g.id !== currentId && g.category === currentGuide.category)
    .slice(0, limit)
}
