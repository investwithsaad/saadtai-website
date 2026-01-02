import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

// Load Sanity project configuration from environment variables
// Next.js uses NEXT_PUBLIC_ prefix for client-side and process.env for server-side
const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string) || 'gdcsnoeu'
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET as string) || 'production'

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local')
}

if (!dataset) {
  throw new Error('NEXT_PUBLIC_SANITY_DATASET is not set in .env.local')
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
