import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is required')
}

if (!dataset) {
  throw new Error('NEXT_PUBLIC_SANITY_DATASET is required')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2021-06-07',
  useCdn: false,
})
