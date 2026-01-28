import fs from 'fs'
import path from 'path'

export interface BlogPost {
  id: string
  title: string
  subtitle: string
  excerpt: string
  author: string
  authorImage?: string
  date: string
  category: string
}

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

export function getBlogPosts(): BlogPost[] {
  const postsDir = path.join(process.cwd(), 'posts')
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdoc'))

  return files
    .map(file => {
      const filePath = path.join(postsDir, file)
      const source = fs.readFileSync(filePath, 'utf-8')
      const frontmatter = parseFrontmatter(source)
      const id = file.replace('.mdoc', '')

      return {
        id,
        title: frontmatter.title || '',
        subtitle: frontmatter.subtitle || '',
        excerpt: frontmatter.excerpt || '',
        author: frontmatter.author || '',
        authorImage: frontmatter.authorImage,
        date: frontmatter.date || '',
        category: frontmatter.category || '',
      } as BlogPost
    })
    .filter(post => post.title && post.date && post.category)
}
