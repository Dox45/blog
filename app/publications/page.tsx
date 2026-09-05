import React from 'react'
import { PaperIcon } from '../components/Icons'

export const metadata = {
  title: 'Publications',
  description: 'Publications and research papers by Chima Emmanuel.',
}

export default function PublicationsPage() {
  return (
    <div className="space-y-8 py-4 animate-fade-in max-w-4xl">
      <div className="space-y-3 border-b border-[var(--card-border)] pb-6">
        <div className="flex items-center gap-2">
          <PaperIcon className="w-6 h-6 text-[var(--foreground)]" />
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
            Publications
          </h1>
        </div>
      </div>

      <div className="p-12 text-center rounded-2xl glass-panel space-y-3 border border-[var(--card-border)]">
        <p className="text-sm font-semibold text-[var(--foreground)]">
          No publications listed yet.
        </p>
        <p className="text-xs text-[var(--muted)]">
          This page will be populated with paper preprints, talks, and journal publications.
        </p>
      </div>
    </div>
  )
}
