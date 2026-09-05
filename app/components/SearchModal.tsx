"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { SearchIcon, CloseIcon, BookIcon, ChevronRightIcon } from './Icons'

interface SearchItem {
  id: string
  title: string
  description: string
  url: string
  tags: string[]
}

const ARTICLES: SearchItem[] = [
  {
    id: 'lagrange',
    title: 'Why Neural Networks Fail on Constraints and why Lagrangian Geometry works better',
    description: 'Exploring hard constraints, Lagrangian geometry, and optimization on non-convex manifolds.',
    url: '/blog/lagrange',
    tags: ['Machine Learning', 'Mathematics', 'Optimization']
  },
  {
    id: 'autoencoder',
    title: 'Autoencoders and Representation Learning in Vision',
    description: 'Compressing data into lower-dimensional spaces and non-linear latent feature extraction.',
    url: '/blog/autoencoder',
    tags: ['Autoencoders', 'Signal Processing', 'Medical Imaging']
  },
  {
    id: 'dimension',
    title: 'High-Dimensional Geometry and Manifold Learning',
    description: 'Curse of dimensionality, PCA, UMAP, t-SNE, and low-dimensional embeddings.',
    url: '/blog/dimension',
    tags: ['Geometry', 'Mathematics', 'Dimensionality Reduction']
  }
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else {
          const btn = document.querySelector('[title*="Search"]') as HTMLButtonElement
          if (btn) btn.click()
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filteredItems = query.trim()
    ? ARTICLES.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : ARTICLES

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-xl bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--sidebar-border)] bg-[var(--hover-bg)]/40">
          <SearchIcon className="w-5 h-5 text-[var(--foreground)] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles and topics..."
            autoFocus
            className="w-full bg-transparent text-sm text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[var(--muted)] hover:bg-[var(--hover-bg)]"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-xs text-[var(--muted)]">
              No matching articles found for "<span className="text-[var(--foreground)] font-semibold">{query}</span>"
            </div>
          ) : (
            filteredItems.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={onClose}
                className="group flex items-start justify-between p-3 rounded-xl hover:bg-[var(--hover-bg)] transition-colors border border-transparent hover:border-[var(--card-border)]"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BookIcon className="w-3.5 h-3.5 text-[var(--foreground)]" />
                    <span className="text-xs font-semibold text-[var(--foreground)] group-hover:opacity-80 transition-opacity">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted)] line-clamp-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1.5 pt-1">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
              </Link>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-[var(--sidebar-border)] bg-[var(--hover-bg)]/20 flex items-center justify-between text-[11px] text-[var(--muted)] font-mono">
          <span>Search Articles</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  )
}
