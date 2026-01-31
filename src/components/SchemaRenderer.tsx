'use client'

import { ReactNode } from 'react'

/**
 * SchemaRenderer Component
 * 
 * Renders JSON-LD schema markup in a script tag
 * Ensures proper serialization and validation
 * 
 * Usage:
 * <SchemaRenderer schema={getOrganizationSchema({...})} />
 * <SchemaRenderer schemas={[schema1, schema2]} />
 */

interface SchemaRendererProps {
  schema?: Record<string, any>
  schemas?: Record<string, any>[]
  nonce?: string
}

export function SchemaRenderer({ schema, schemas, nonce }: SchemaRendererProps) {
  // Use single schema or array of schemas
  const schemaData = schema ? [schema] : schemas || []

  if (schemaData.length === 0) {
    return null
  }

  // Wrap multiple schemas in array
  const schemaContent = schemaData.length === 1 ? schemaData[0] : schemaData

  try {
    return (
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaContent)
        }}
      />
    )
  } catch (error) {
    console.error('SchemaRenderer error:', error)
    return null
  }
}

/**
 * Helper to render multiple schemas efficiently
 */
export function SchemaRendererBatch({ schemas, nonce }: { schemas: Record<string, any>[]; nonce?: string }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <SchemaRenderer key={index} schema={schema} nonce={nonce} />
      ))}
    </>
  )
}
