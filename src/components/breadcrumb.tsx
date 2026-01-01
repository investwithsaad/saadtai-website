'use client'

import Link from 'next/link'
import { COLORS } from '@/lib/colors'
import { Text } from '@/components/ui'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { getBreadcrumbSchema } from '@/lib/schema-generators'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  renderSchema?: boolean
}

export function Breadcrumb({ items, renderSchema = true }: BreadcrumbProps) {
  const allItems = [
    { label: 'Home', href: '/' },
    ...items
  ]

  // Convert visual breadcrumbs to full URLs for schema
  const schemaItems = allItems.map(item => ({
    name: item.label,
    url: item.href ? `https://saadtherealtor.com${item.href}` : 'https://saadtherealtor.com'
  }))

  const breadcrumbSchema = getBreadcrumbSchema(schemaItems)

  return (
    <>
      {/* Render breadcrumb schema if enabled */}
      {renderSchema && <SchemaRenderer schema={breadcrumbSchema} />}

      {/* Visual breadcrumb navigation */}
      <nav className="px-6 py-4">
        <Text size="sm">
          {allItems.map((item, index) => (
            <span key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{color: COLORS.primary}}
                >
                  {item.label}
                </Link>
              ) : (
                <span style={{color: COLORS.primary, fontWeight: '600'}}>{item.label}</span>
              )}
              {index < allItems.length - 1 && <span className="mx-2" style={{color: COLORS.primary}}>{'>'}</span>}
            </span>
          ))}
        </Text>
      </nav>
    </>
  )
}
