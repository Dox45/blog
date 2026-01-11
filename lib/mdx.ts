import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
    slug: string
    title: string
    date: string
    description: string
    tags?: string[]
    content: string
}

export function getAllPosts(): Post[] {
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
                ...(data as { title: string; date: string; description: string; tags?: string[] }),
                url: `/blog/${slug}`,
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
            ...(data as { title: string; date: string; description: string; tags?: string[] }),
            url: `/blog/${slug}`,
        }
    } catch (e) {
        return null
    }
}
