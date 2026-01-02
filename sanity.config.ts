import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is required')
}

if (!dataset) {
  throw new Error('NEXT_PUBLIC_SANITY_DATASET is required')
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
