import { ReactNode } from 'react'
import { FundingSolution } from '@/types/solutions'

/**
 * Extract plain text from a solution title that might be ReactNode
 * Handles both string and JSX (e.g., "Equipment Leasing <br /> & Financing" becomes "Equipment Leasing & Financing")
 */
export function getTitleAsString(title: string | ReactNode): string {
  if (typeof title === 'string') {
    return title
  }

  // For JSX elements, try to extract text content
  if (typeof title === 'object' && title !== null && 'props' in title) {
    const titleObj = title as any
    // If it's a React element with children, try to extract text
    if (titleObj.props && 'children' in titleObj.props) {
      const children = titleObj.props.children
      if (Array.isArray(children)) {
        return children
          .map((child: any) => {
            if (typeof child === 'string') return child
            if (typeof child === 'object' && child !== null && 'props' in child && child.props?.children) {
              return child.props.children
            }
            return ''
          })
          .filter(Boolean)
          .join(' ')
      }
    }
  }

  return String(title)
}

/**
 * Get all solution titles as strings (useful for schema generation, dropdowns, etc.)
 */
export function getSolutionTitlesAsStrings(solutions: FundingSolution[]): string[] {
  return solutions.map(solution => getTitleAsString(solution.title))
}
