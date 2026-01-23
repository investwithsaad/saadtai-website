#!/usr/bin/env python3
import re
import json
from pathlib import Path

# Read blog-posts.ts
blog_posts_path = Path('src/data/blog-posts.ts')
content = blog_posts_path.read_text()

# Extract the blogPosts array
match = re.search(r'export const blogPosts: BlogPost\[\] = \[(.*)\];', content, re.DOTALL)
if not match:
    print("Could not find blogPosts array")
    exit(1)

posts_content = match.group(1)

# Parse each blog post
current_post = {}
post_pattern = r'\{\s*id:\s*"([^"]+)"'

# Find all post IDs and their positions
id_matches = list(re.finditer(post_pattern, posts_content))

posts = []
for i, id_match in enumerate(id_matches):
    post_id = id_match.group(1)
    start = id_match.start()
    end = id_matches[i+1].start() if i+1 < len(id_matches) else len(posts_content)

    post_block = posts_content[start:end]

    # Extract metadata
    title_match = re.search(r'title:\s*"([^"]*(?:\\"[^"]*)*)"', post_block)
    subtitle_match = re.search(r'subtitle:\s*"([^"]*)"', post_block)
    excerpt_match = re.search(r'excerpt:\s*"([^"]*)"', post_block)
    author_match = re.search(r'author:\s*"([^"]*)"', post_block)
    date_match = re.search(r'date:\s*"([^"]*)"', post_block)
    category_match = re.search(r'category:\s*"([^"]*)"', post_block)
    authorImage_match = re.search(r'authorImage:\s*"([^"]*)"', post_block)

    title = title_match.group(1) if title_match else ""
    subtitle = subtitle_match.group(1) if subtitle_match else ""
    excerpt = excerpt_match.group(1) if excerpt_match else ""
    author = author_match.group(1) if author_match else "Saad Tai"
    date = date_match.group(1) if date_match else ""
    category = category_match.group(1) if category_match else "Investment"
    authorImage = authorImage_match.group(1) if authorImage_match else "/saad.png"

    # Extract content array
    content_match = re.search(r'content:\s*\[(.*?)\]\s*[},]', post_block, re.DOTALL)
    content_items = []

    if content_match:
        content_block = content_match.group(1)
        # Find all { type: ..., text: ... } objects
        item_pattern = r'\{\s*type:\s*["\']([^"\']+)["\']\s*,\s*text:\s*"((?:[^"\\]|\\.)*)"'
        for item_match in re.finditer(item_pattern, content_block):
            item_type = item_match.group(1)
            item_text = item_match.group(2)
            # Unescape quotes
            item_text = item_text.replace('\\"', '"')
            # Handle newlines in text
            item_text = item_text.replace('\\n', '\n')
            content_items.append((item_type, item_text))

    posts.append({
        'id': post_id,
        'title': title,
        'subtitle': subtitle,
        'excerpt': excerpt,
        'author': author,
        'date': date,
        'category': category,
        'authorImage': authorImage,
        'content': content_items
    })

# Convert each post to markdown
posts_dir = Path('posts')
posts_dir.mkdir(exist_ok=True)

for post in posts:
    mdoc_path = posts_dir / f"{post['id']}.mdoc"

    # Build markdown content
    lines = []
    lines.append('---')
    lines.append(f'title: "{post["title"]}"')
    lines.append(f'excerpt: "{post["excerpt"]}"')
    lines.append(f'subtitle: "{post["subtitle"]}"')
    lines.append(f'date: {post["date"]}')
    lines.append(f'author: {post["author"]}')
    lines.append(f'category: {post["category"]}')
    lines.append(f'authorImage: {post["authorImage"]}')
    lines.append('---')
    lines.append('')
    lines.append('{% relatedPosts category="Investment" limit="3" /%}')
    lines.append('')

    # Add content
    for content_type, text in post['content']:
        if content_type == 'h2':
            lines.append(f'## {text}')
        elif content_type == 'h3':
            lines.append(f'### {text}')
        elif content_type == 'p':
            lines.append(text)
        elif content_type == 'blockquote':
            lines.append(f'> {text}')
        lines.append('')

    mdoc_path.write_text('\n'.join(lines))
    print(f"Updated {mdoc_path}")

print(f"Successfully updated {len(posts)} blog posts")
