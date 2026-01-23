const fs = require('fs');
const path = require('path');

// Read blog-posts.ts
const fileContent = fs.readFileSync('./src/data/blog-posts.ts', 'utf8');

// Extract the array - find everything between the first [ and last ]
const firstBracket = fileContent.indexOf('[');
const lastBracket = fileContent.lastIndexOf(']');
let arrayContent = fileContent.substring(firstBracket, lastBracket + 1);

// Convert to valid JavaScript by removing type annotations
arrayContent = arrayContent
  .replace(/type:\s*'(h[1-6]|p|blockquote)'/g, "type: '$1'")
  .replace(/:[^\n]*?\/\//g, ':'); // Remove comments after colons

let blogPosts = [];
try {
  blogPosts = eval(arrayContent);
} catch (e) {
  console.error('Parse error:', e.message);
  console.error('Trying alternative approach...');

  // Alternative: Extract posts manually
  const postMatches = fileContent.matchAll(/id:\s*"([^"]+)"[\s\S]*?content:\s*\[([\s\S]*?)\]\s*\}/g);

  for (const match of postMatches) {
    const id = match[1];
    console.log('Found post:', id);
  }
  process.exit(1);
}

console.log('Parsed', blogPosts.length, 'blog posts');

// Update each .mdoc file with content
const postsDir = './posts';
blogPosts.forEach(post => {
  const mdocPath = path.join(postsDir, `${post.id}.mdoc`);

  let content = [];
  content.push('---');
  content.push(`title: "${post.title.replace(/"/g, '\\"')}`);
  content.push(`excerpt: "${post.excerpt.replace(/"/g, '\\"')}`);
  content.push(`subtitle: "${post.subtitle.replace(/"/g, '\\"')}`);
  content.push(`date: ${post.date}`);
  content.push(`author: ${post.author}`);
  content.push(`category: ${post.category}`);
  content.push(`authorImage: ${post.authorImage}`);
  content.push('---');
  content.push('');
  content.push('{% relatedPosts category="Investment" limit="3" /%}');
  content.push('');

  // Add content
  if (post.content && Array.isArray(post.content)) {
    post.content.forEach(item => {
      if (item.type === 'h2') {
        content.push(`## ${item.text}`);
      } else if (item.type === 'h3') {
        content.push(`### ${item.text}`);
      } else if (item.type === 'p') {
        content.push(item.text);
      } else if (item.type === 'blockquote') {
        content.push(`> ${item.text}`);
      }
      content.push('');
    });
  }

  fs.writeFileSync(mdocPath, content.join('\n'));
  console.log('Updated:', mdocPath);
});

console.log(`\nSuccessfully updated ${blogPosts.length} blog posts`);
