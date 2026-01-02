/**
 * Sanity Schema Types
 * Exports all document types and schema definitions
 */

import blogPost from './blogPost'
import listing from './listing'
import faq from './faq'
import neighborhood from './neighborhood'
import testimonial from './testimonial'
import pageSection from './pageSection'
import siteSettings from './siteSettings'
import heroSection from './heroSection'
import page from './page'

export const schemaTypes = [
  siteSettings,
  blogPost,
  listing,
  faq,
  neighborhood,
  testimonial,
  pageSection,
  heroSection,
  page,
]
