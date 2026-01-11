import { getPostBySlug, getAllPosts, Post } from '../../../lib/mdx'
import { format } from 'date-fns'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

export const generateStaticParams = async () => getAllPosts().map((post: Post) => ({ slug: post.slug }))

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const post: Post | null = getPostBySlug(slug)
    if (!post) throw new Error(`Post not found for slug: ${slug}`)
    return { title: post.title }
}

export default async function PostLayout({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) notFound()

    return (
        <article className="max-w-3xl mx-auto py-10 px-6">
            <div className="mb-8">
                <Link href="/blog" className="text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 mb-4 inline-block">&larr; Back to Blog</Link>
                <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                <time className="text-sm text-neutral-500 block mb-4">
                    {format(new Date(post.date), 'MMMM dd, yyyy')}
                </time>
                <div className="flex gap-2 mb-8">
                    {post.tags?.map((tag: string) => (
                        <span key={tag} className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3">
                <MDXRemote
                    source={post.content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkMath],
                            rehypePlugins: [
                                [rehypeKatex, {
                                    strict: false,
                                    trust: true,
                                    throwOnError: false
                                }]
                            ],
                        }
                    }}
                />
            </div>
        </article>
    )
}
