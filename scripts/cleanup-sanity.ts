import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), '.env.local'),
})

import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2021-06-07',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
})

async function deleteAllDocuments() {
  console.log('🗑️  Fetching all documents...')

  const documents = await client.fetch(`*[_type != "sanity.imageAsset" && _type != "sanity.fileAsset"]`)
  console.log(`Found ${documents.length} documents to delete`)

  if (documents.length === 0) {
    console.log('✓ No documents to delete')
    return
  }

  console.log('🗑️  Deleting documents...')
  let deleted = 0

  for (const doc of documents) {
    try {
      await client.delete(doc._id)
      deleted++
    } catch (error: any) {
      console.error(`✗ Failed to delete ${doc._id}:`, error.message)
    }
  }

  console.log(`✓ Deleted ${deleted} documents`)
}

deleteAllDocuments().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
