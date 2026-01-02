import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

// Load Sanity project configuration from environment variables
// Vite uses VITE_ prefix, fall back to NEXT_PUBLIC_ for compatibility
const projectId = (import.meta.env.VITE_SANITY_PROJECT_ID as string) || 'gdcsnoeu'
const dataset = (import.meta.env.VITE_SANITY_DATASET as string) || 'production'

if (!projectId) {
  throw new Error('VITE_SANITY_PROJECT_ID is not set in .env.local')
}

if (!dataset) {
  throw new Error('VITE_SANITY_DATASET is not set in .env.local')
}

export default defineConfig({
  name: 'invest-with-saad',
  title: 'Invest with Saad CMS',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
