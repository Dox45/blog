import React from 'react'
import Link from 'next/link'
import { getAllPosts, Post } from '../../lib/mdx'
import { BookIcon, ChevronRightIcon } from '../components/Icons'

export const metadata = {
  title: 'Articles & Writings',
  description: 'Technical articles, neural geometry, and machine learning essays by Chima Emmanuel.',
}

export default function BlogPage() {
  const posts: Post[] = getAllPosts()

  return (
    <div className="space-y-8 py-4 animate-fade-in max-w-4xl">
      {/* Header */}
      <div className="space-y-3 border-b border-[var(--card-border)] pb-6">
        <div className="flex items-center gap-2">
          <BookIcon className="w-6 h-6 text-[var(--foreground)]" />
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
            Articles & Writings
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
          Technical essays, theoretical derivations, and computational notes written by <strong>Chima Emmanuel</strong>.
        </p>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {posts.map((post: Post) => (
          <Link
            key={post.slug}
            href={post.url}
            className="p-6 rounded-2xl glass-card block group space-y-3 border border-[var(--card-border)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted)]">
              <time className="font-mono">{post.date}</time>
              <span className="font-mono px-2.5 py-0.5 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold border border-neutral-300 dark:border-neutral-700">
                {post.readingTime}
              </span>
            </div>

            <h2 className="text-xl font-bold text-[var(--foreground)] group-hover:opacity-80 transition-opacity leading-snug">
              {post.title}
            </h2>

            <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-3">
              {post.description}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-[var(--card-border)]">
              <div className="flex flex-wrap gap-1.5">
                {post.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <span className="text-xs font-semibold text-[var(--foreground)] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Read article</span>
                <ChevronRightIcon className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}

        {posts.length === 0 && (
          <div className="py-12 text-center text-xs text-[var(--muted)] italic">
            No articles found.
          </div>
        )}
      </div>
    </div>
  )
}
