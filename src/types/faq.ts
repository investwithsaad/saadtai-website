/**
 * Shared FAQ Types
 * Used across all FAQ implementations for consistency
 */

// Simple FAQ format - used in accordions, solution pages, homepage
export interface FAQ {
  id: string
  q: string
  a: string
}

// FAQ Category for organization
export interface FAQCategory {
  id: string
  name: string
  description: string
}
