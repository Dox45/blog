import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface TocHeading {
  id: string
  text: string
  level: number
}

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
  content: string
  url: string
  readingTime: string
  toc: TocHeading[]
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

function extractHeadings(markdown: string): TocHeading[] {
  const headingLines = markdown.split('\n').filter((line) => line.match(/^#{2,3}\s+/))
  return headingLines.map((line) => {
    const level = line.startsWith('###') ? 3 : 2
    const text = line.replace(/^#{2,3}\s+/, '').replace(/\*+/g, '').trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
    return { id, text, level }
  })
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '').replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        title: data.title || 'Untitled Article',
        date: data.date ? String(data.date).split('T')[0] : '2026-01-01',
        description: data.description || 'No description available.',
        tags: data.tags || [],
        url: `/blog/${slug}`,
        readingTime: calculateReadingTime(content),
        toc: extractHeadings(content)
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    let fullPath = path.join(postsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`)
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      title: data.title || 'Untitled Article',
      date: data.date ? String(data.date).split('T')[0] : '2026-01-01',
      description: data.description || 'No description available.',
      tags: data.tags || [],
      url: `/blog/${slug}`,
      readingTime: calculateReadingTime(content),
      toc: extractHeadings(content)
    }
  } catch (e) {
    return null
  }
}
