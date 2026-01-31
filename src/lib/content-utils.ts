import fs from 'fs'
import path from 'path'

/**
 * Generic interface for Markdoc content (blog posts, guides, etc.)
 */
export interface MarkdocContent {
  id: string
  title: string
  excerpt: string
  subtitle?: string
  date: string
  author: string
  category: string
  authorImage?: string
  [key: string]: any
}

/**
 * Parse YAML frontmatter from Markdoc content
 */
function parseFrontmatter(content: string): Record<string, any> {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  let frontmatter: Record<string, any> = {}

  if (frontmatterMatch) {
    const yamlContent = frontmatterMatch[1]
    const lines = yamlContent.split('\n')
    for (const line of lines) {
      const [key, ...valueParts] = line.split(':')
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim()
        const cleanValue = value.replace(/^["']|["']$/g, '')
        if (cleanValue === 'true') frontmatter[key.trim()] = true
        else if (cleanValue === 'false') frontmatter[key.trim()] = false
        else if (!isNaN(Number(cleanValue)) && cleanValue !== '') frontmatter[key.trim()] = Number(cleanValue)
        else frontmatter[key.trim()] = cleanValue
      }
    }
  }

  return frontmatter
}

/**
 * Read all Markdoc files from a directory
 */
export function getMarkdocContent(directoryName: string): MarkdocContent[] {
  const contentDir = path.join(process.cwd(), directoryName)
  if (!fs.existsSync(contentDir)) return []

  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.mdoc'))

  return files
    .map(file => {
      const filePath = path.join(contentDir, file)
      const source = fs.readFileSync(filePath, 'utf-8')
      const frontmatter = parseFrontmatter(source)
      const id = file.replace('.mdoc', '')

      return {
        id,
        title: frontmatter.title || '',
        subtitle: frontmatter.subtitle,
        excerpt: frontmatter.excerpt || '',
        author: frontmatter.author || '',
        authorImage: frontmatter.authorImage,
        date: frontmatter.date || '',
        category: frontmatter.category || '',
        ...frontmatter,
      } as MarkdocContent
    })
    .filter(item => item.title && item.date && item.category)
}

/**
 * Get a single piece of content by ID from a directory
 */
export function getMarkdocContentById(directoryName: string, id: string): MarkdocContent | undefined {
  const contentDir = path.join(process.cwd(), directoryName)
  const filePath = path.join(contentDir, `${id}.mdoc`)

  if (!fs.existsSync(filePath)) return undefined

  const source = fs.readFileSync(filePath, 'utf-8')
  const frontmatter = parseFrontmatter(source)

  return {
    id,
    title: frontmatter.title || '',
    subtitle: frontmatter.subtitle,
    excerpt: frontmatter.excerpt || '',
    author: frontmatter.author || '',
    authorImage: frontmatter.authorImage,
    date: frontmatter.date || '',
    category: frontmatter.category || '',
    ...frontmatter,
  } as MarkdocContent
}

/**
 * Get all content IDs from a directory
 */
export function getMarkdocContentIds(directoryName: string): string[] {
  const content = getMarkdocContent(directoryName)
  return content.map(item => item.id)
}

/**
 * Get content items by category from a directory
 */
export function getMarkdocContentByCategory(directoryName: string, category: string): MarkdocContent[] {
  const content = getMarkdocContent(directoryName)
  return content.filter(item => item.category === category)
}
