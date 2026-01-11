import Link from 'next/link'
import { getAllPosts, Post } from '../../lib/mdx'
import { format } from 'date-fns'

export const metadata = {
    title: 'Blog',
    description: 'Read my latest articles on Machine Learning and more.',
}

export default function BlogPage() {
    const posts: Post[] = getAllPosts()

    return (
        <div className="max-w-3xl mx-auto py-10 px-6">
            <h1 className="text-4xl font-bold mb-8">My Articles</h1>
            <div className="space-y-8">
                {posts.map((post: Post) => (
                    <article key={post.slug} className="border-b pb-8 border-neutral-200 dark:border-neutral-800 last:border-0">
                        <Link href={post.url} className="block group">
                            <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                                {post.title}
                            </h2>
                        </Link>
                        <time className="text-sm text-neutral-500 mb-3 block">
                            {format(new Date(post.date), 'MMMM dd, yyyy')}
                        </time>
                        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                            {post.description}
                        </p>
                        <div className="flex gap-2">
                            {post.tags?.map((tag: string) => (
                                <span key={tag} className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
                {posts.length === 0 && (
                    <p className="text-neutral-500 italic">No posts found.</p>
                )}
            </div>
        </div>
    )
}
