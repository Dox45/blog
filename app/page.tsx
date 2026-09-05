import React from 'react'
import Link from 'next/link'
import {
  BookIcon,
  ChevronRightIcon,
  GitHubIcon,
  XTwitterIcon
} from './components/Icons'
import { getAllPosts } from '../lib/mdx'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Hero Welcome Banner */}
      <section className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden border border-[var(--card-border)] shadow-sm">
        <div className="relative space-y-6 max-w-3xl">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-foreground/10 text-[var(--foreground)] border border-foreground/20">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            Research Scientist · Machine Learning & Computational Biology
          </div> */}

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
            Chima Emmanuel
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--foreground)] opacity-90 font-normal">
            Chima Emmanuel is a research scientist developing tools at the intersection of machine learning and computational biology. Builds educational machine learning infrastructure from scratch in Python. Created tooling to convert research papers into executable code modules. Implements GPU-accelerated graphics techniques for CPU compatibility. Works across Python, C++, and TypeScript for different technical domains.
          </p>

          {/* Social Links & Bio CTA */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background font-semibold text-xs shadow-md hover:opacity-90 transition-all"
            >
              <span>Full Bio & Interests</span>
              <ChevronRightIcon className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://github.com/Dox45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub (Dox45)</span>
            </a>
            <a
              href="https://x.com/purple_wavelet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all"
            >
              <XTwitterIcon className="w-4 h-4" />
              <span>X (@purple_wavelet)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Derived Technical Focus Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
          Research & Technical Domains
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl glass-card space-y-2">
            <h3 className="text-base font-bold text-[var(--foreground)]">
              ML & Computational Biology
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Developing domain-tailored machine learning infrastructure and computational tools for biological systems.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card space-y-2">
            <h3 className="text-base font-bold text-[var(--foreground)]">
              From-Scratch ML Infrastructure
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Building educational machine learning algorithms and neural frameworks ground-up in pure Python.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card space-y-2">
            <h3 className="text-base font-bold text-[var(--foreground)]">
              Paper-to-Code Automation
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Translating complex theoretical research publications into modular, executable code modules.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card space-y-2">
            <h3 className="text-base font-bold text-[var(--foreground)]">
              GPU Graphics & CPU Fallbacks
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Architecting GPU-accelerated graphics techniques with low-overhead CPU compatibility layers.
            </p>
          </div>
        </div>
      </section>

      {/* Articles & Writings */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookIcon className="w-5 h-5 text-[var(--foreground)]" />
            <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              Articles & Writings
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold text-[var(--foreground)] hover:underline flex items-center gap-1"
          >
            <span>Browse All ({posts.length})</span>
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.url}
              className="p-5 rounded-2xl glass-card block group space-y-2"
            >
              <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                <time className="font-mono">{post.date}</time>
                <span className="font-mono px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                  {post.readingTime}
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--foreground)] group-hover:opacity-80 transition-opacity">
                {post.title}
              </h3>
              <p className="text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Licensing & Contact Footer Box */}
      <section className="p-6 rounded-2xl glass-panel space-y-4 border border-[var(--card-border)]">
        <h3 className="text-base font-bold text-[var(--foreground)]">
          Licensing & Contact
        </h3>

        <p className="text-xs leading-relaxed text-[var(--muted)]">
          Code is released under the <strong>MIT License</strong>. Written articles are licensed under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] underline">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC-BY-NC-SA)</a>.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[var(--card-border)] text-xs font-medium">
          <a href="https://github.com/Dox45" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)]">
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub (@Dox45)</span>
          </a>
          <a href="https://x.com/purple_wavelet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)]">
            <XTwitterIcon className="w-4 h-4" />
            <span>X (@purple_wavelet)</span>
          </a>
        </div>
      </section>
    </div>
  )
}
