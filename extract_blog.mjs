import fs from 'fs';
import path from 'path';

// Read the blog-posts.ts file
const filePath = './src/data/blog-posts.ts';
let fileContent = fs.readFileSync(filePath, 'utf-8');

// Extract just the array part
const arrayStart = fileContent.indexOf('[');
const arrayEnd = fileContent.lastIndexOf(']') + 1;
const arrayContent = fileContent.substring(arrayStart, arrayEnd);

// Replace TypeScript types with plain JavaScript
const jsContent = arrayContent
  .replace(/type: 'h2'/g, `type: 'h2'`)
  .replace(/type: 'h3'/g, `type: 'h3'`)
  .replace(/type: 'p'/g, `type: 'p'`)
  .replace(/type: 'blockquote'/g, `type: 'blockquote'`);

let blogPosts;
try {
  blogPosts = eval('(' + jsContent + ')');
} catch (e) {
  console.error('Error parsing:', e.message);
  process.exit(1);
}

// Convert to markdown
const postsDir = './posts';
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir);
}

blogPosts.forEach(post => {
  const lines = [];

  // Frontmatter
  lines.push('---');
  lines.push(`title: "${post.title.replace(/"/g, '\\"')}"`);
  lines.push(`excerpt: "${post.excerpt.replace(/"/g, '\\"')}"`);
  lines.push(`subtitle: "${post.subtitle.replace(/"/g, '\\"')}"`);
  lines.push(`date: ${post.date}`);
  lines.push(`author: ${post.author}`);
  lines.push(`category: ${post.category}`);
  lines.push(`authorImage: ${post.authorImage}`);
  lines.push('---');
  lines.push('');
  lines.push('{% relatedPosts category="Investment" limit="3" /%}');
  lines.push('');

  // Content
  post.content.forEach(item => {
    if (item.type === 'h2') {
      lines.push(`## ${item.text}`);
    } else if (item.type === 'h3') {
      lines.push(`### ${item.text}`);
    } else if (item.type === 'p') {
      lines.push(item.text);
    } else if (item.type === 'blockquote') {
      lines.push(`> ${item.text}`);
    }
    lines.push('');
  });

  const mdocPath = path.join(postsDir, `${post.id}.mdoc`);
  fs.writeFileSync(mdocPath, lines.join('\n'));
  console.log(`Updated ${mdocPath}`);
});

console.log(`\nSuccessfully updated ${blogPosts.length} blog posts`);
