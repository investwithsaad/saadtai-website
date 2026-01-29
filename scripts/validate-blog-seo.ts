import fs from 'fs'
import path from 'path'

interface ValidationResult {
  file: string
  title: string
  titleLength: number
  excerpt: string
  excerptLength: number
  valid: boolean
  errors: string[]
}

const TITLE_MAX_LENGTH = 70
const EXCERPT_MAX_LENGTH = 160

function extractFrontmatter(content: string): Record<string, string> {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  const frontmatter: Record<string, string> = {}

  if (frontmatterMatch) {
    const yamlContent = frontmatterMatch[1]
    const lines = yamlContent.split('\n')

    for (const line of lines) {
      const [key, ...valueParts] = line.split(':')
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '')
        frontmatter[key.trim()] = value
      }
    }
  }

  return frontmatter
}

function validateBlogPosts(): void {
  const postsDir = path.join(process.cwd(), 'posts')

  if (!fs.existsSync(postsDir)) {
    console.error('❌ Posts directory not found')
    process.exit(1)
  }

  const mdocFiles = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdoc'))
  const results: ValidationResult[] = []
  let hasErrors = false

  for (const file of mdocFiles) {
    const filePath = path.join(postsDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const frontmatter = extractFrontmatter(content)

    const title = frontmatter['title'] || ''
    const excerpt = frontmatter['excerpt'] || ''
    const titleLength = title.length
    const excerptLength = excerpt.length
    const errors: string[] = []

    if (titleLength > TITLE_MAX_LENGTH) {
      errors.push(`Title too long (${titleLength}/${TITLE_MAX_LENGTH} chars): "${title}"`)
    }

    if (excerptLength > EXCERPT_MAX_LENGTH) {
      errors.push(`Excerpt too long (${excerptLength}/${EXCERPT_MAX_LENGTH} chars): "${excerpt}"`)
    }

    const result: ValidationResult = {
      file,
      title,
      titleLength,
      excerpt,
      excerptLength,
      valid: errors.length === 0,
      errors
    }

    results.push(result)
    if (!result.valid) hasErrors = true
  }

  // Display results
  console.log('\n📋 SEO Validation Report\n')
  console.log(`Checked ${mdocFiles.length} blog posts\n`)

  const validResults = results.filter(r => r.valid)
  const invalidResults = results.filter(r => !r.valid)

  if (validResults.length > 0) {
    console.log(`✅ Valid (${validResults.length}):`)
    validResults.forEach(r => {
      console.log(`  ✓ ${r.file} (Title: ${r.titleLength}, Excerpt: ${r.excerptLength})`)
    })
    console.log()
  }

  if (invalidResults.length > 0) {
    console.log(`❌ Invalid (${invalidResults.length}):`)
    invalidResults.forEach(r => {
      console.log(`\n  ✗ ${r.file}`)
      r.errors.forEach(error => {
        console.log(`    → ${error}`)
      })
    })
    console.log()
    process.exit(1)
  }

  console.log('✨ All blog posts pass SEO validation!\n')
}

validateBlogPosts()
