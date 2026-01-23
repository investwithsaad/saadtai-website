#!/usr/bin/env python3
import re
import json
import os

# Read the TypeScript file
with open('src/data/blog-posts.ts', 'r') as f:
    content = f.read()

# Find all blog post objects
# Pattern: { id: "...", ... }
post_pattern = r'\{\s*id:\s*"([^"]+)".*?(?=},\s*\{|\]\s*$)'

posts = []
for match in re.finditer(post_pattern, content, re.DOTALL):
    post_block = match.group(0)

    # Extract fields
    id_match = re.search(r'id:\s*"([^"]+)"', post_block)
    title_match = re.search(r'title:\s*"([^"]*(?:\\"[^"]*)*)"', post_block)
    subtitle_match = re.search(r'subtitle:\s*"([^"]*(?:\\"[^"]*)*)"', post_block)
    excerpt_match = re.search(r'excerpt:\s*"([^"]*(?:\\"[^"]*)*)"', post_block)
    date_match = re.search(r'date:\s*"([^"]+)"', post_block)
    author_match = re.search(r'author:\s*"([^"]+)"', post_block)
    category_match = re.search(r'category:\s*"([^"]+)"', post_block)
    author_image_match = re.search(r'authorImage:\s*"([^"]+)"', post_block)

    if not id_match:
        continue

    post = {
        'id': id_match.group(1),
        'title': title_match.group(1) if title_match else '',
        'subtitle': subtitle_match.group(1) if subtitle_match else '',
        'excerpt': excerpt_match.group(1) if excerpt_match else '',
        'date': date_match.group(1) if date_match else '',
        'author': author_match.group(1) if author_match else '',
        'category': category_match.group(1) if category_match else '',
        'authorImage': author_image_match.group(1) if author_image_match else '/saad.png',
    }

    # Extract content array
    content_match = re.search(r'content:\s*\[(.*?)\]\s*', post_block, re.DOTALL)
    if content_match:
        content_str = content_match.group(1)
        # Parse content blocks
        blocks = []
        block_pattern = r'\{\s*type:\s*[\'"]([^\'"]+)[\'"]\s*,\s*text:\s*[\'"]([^\'"]*(?:\\[\'"][^\'"]*)*)[\'"]'
        for block_match in re.finditer(block_pattern, content_str, re.DOTALL):
            block_type = block_match.group(1)
            block_text = block_match.group(2)
            # Unescape text
            block_text = block_text.replace('\\n', '\n').replace('\\"', '"').replace("\\'", "'")
            blocks.append({'type': block_type, 'text': block_text})
        post['content'] = blocks

    posts.append(post)

print(f"Extracted {len(posts)} blog posts")

# Create posts directory
os.makedirs('posts', exist_ok=True)

# Convert to Markdoc format
for post in posts:
    # Build markdown content
    md_content = ''
    for block in post.get('content', []):
        block_type = block['type']
        block_text = block['text']

        if block_type == 'h2':
            md_content += f'\n## {block_text}\n'
        elif block_type == 'h3':
            md_content += f'\n### {block_text}\n'
        elif block_type == 'blockquote':
            md_content += f'\n> {block_text}\n'
        elif block_type == 'p':
            md_content += f'\n{block_text}\n'

    # Add related posts component
    md_content += f'\n{{% relatedPosts category="{post["category"]}" limit="3" /%}}\n'

    # Create YAML frontmatter
    title_escaped = post["title"].replace('"', '\\"')
    excerpt_escaped = post["excerpt"].replace('"', '\\"')
    subtitle_escaped = post["subtitle"].replace('"', '\\"')
    frontmatter = f'''---
title: "{title_escaped}"
excerpt: "{excerpt_escaped}"
subtitle: "{subtitle_escaped}"
date: {post["date"]}
author: {post["author"]}
category: {post["category"]}
authorImage: {post["authorImage"]}
---'''

    # Combine
    full_content = frontmatter + md_content

    # Write file
    filename = f'posts/{post["id"]}.mdoc'
    with open(filename, 'w') as f:
        f.write(full_content)
    print(f'✓ Created {filename}')

print(f'\n✅ Successfully converted {len(posts)} blog posts to Markdoc format!')
