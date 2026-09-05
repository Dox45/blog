import { getPostBySlug, getAllPosts, Post } from '../../../lib/mdx'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import TableOfContents from '../../components/TableOfContents'
import { ChevronRightIcon } from '../../components/Icons'

export const generateStaticParams = async () => getAllPosts().map((post: Post) => ({ slug: post.slug }))

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post: Post | null = getPostBySlug(slug)
  if (!post) throw new Error(`Post not found for slug: ${slug}`)
  return { title: post.title, description: post.description }
}

export default async function PostLayout({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <div className="py-4 animate-fade-in">
      <div className="flex gap-8 items-start">
        {/* Main Article Content */}
        <article className="flex-1 min-w-0 max-w-3xl space-y-8">
          {/* Header */}
          <div className="space-y-4 border-b border-[var(--card-border)] pb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--foreground)] font-semibold hover:underline mb-2"
            >
              <span>&larr; Back to Articles</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
              <time className="font-mono">{post.date}</time>
              <span>•</span>
              <span className="font-mono text-[var(--foreground)] font-semibold px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
                {post.readingTime}
              </span>
              <span>•</span>
              <span>Author: <strong>Chima Emmanuel</strong></span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {post.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[10px] px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* MDX Body */}
          <div className="prose leading-relaxed">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkMath],
                  rehypePlugins: [
                    rehypeHighlight,
                    [
                      rehypeKatex,
                      {
                        strict: false,
                        trust: true,
                        throwOnError: false
                      }
                    ]
                  ]
                }
              }}
            />
          </div>

          {/* Footer Navigation */}
          <div className="p-6 rounded-2xl glass-panel border border-[var(--card-border)] flex items-center justify-between mt-12">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[var(--foreground)]">
                More Writings & Bio
              </h4>
              <p className="text-xs text-[var(--muted)]">
                Read more articles or check out Chima Emmanuel's research background.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-foreground text-background font-semibold text-xs shadow-md hover:opacity-90 transition-all"
            >
              <span>View About Bio</span>
              <ChevronRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </article>

        {/* Side Rail Table of Contents */}
        <TableOfContents headings={post.toc} />
      </div>
    </div>
  )
}
