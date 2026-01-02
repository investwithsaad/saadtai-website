/**
 * Sanity Schema Types
 * Exports all document types and schema definitions
 */

import blogPost from './blogPost'
import listing from './listing'
import faq from './faq'
import neighborhood from './neighborhood'
import testimonial from './testimonial'
import solution from './solution'
import pageSection from './pageSection'
import siteSettings from './siteSettings'

export const schemaTypes = [
  siteSettings,
  blogPost,
  listing,
  faq,
  neighborhood,
  testimonial,
  solution,
  pageSection,
]
