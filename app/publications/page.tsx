import React from 'react'
import { PaperIcon } from '../components/Icons'

export const metadata = {
  title: 'Publications',
  description: 'Publications and research papers by Chima Emmanuel.',
}

const publications = [
  {
    title: 'Building R&D on Soft Ground',
    kind: 'Essay · 8 pages',
    date: 'October 2026',
    summary:
      'What structural engineers know about building serious research where the infrastructure is missing.',
    href: '/pdf/building-rnd-on-soft-ground.pdf',
  },
  {
    title: 'The Local Minimum',
    kind: 'Mini-book · 11 pages',
    date: 'October 2026',
    summary:
      'Lessons from building models, products, and a research lab early.',
    href: '/pdf/the-local-minimum.pdf',
  },
]

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

      <div className="space-y-4">
        {publications.map((p) => (
          <div
            key={p.href}
            className="p-6 rounded-2xl glass-panel border border-[var(--card-border)] space-y-2"
          >
            <p className="text-xs text-[var(--muted)]">
              {p.kind} · {p.date}
            </p>
            <h2 className="text-lg font-bold text-[var(--foreground)]">{p.title}</h2>
            <p className="text-sm text-[var(--muted)]">{p.summary}</p>
            <div className="flex gap-4 pt-1 text-sm font-semibold">
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="underline text-[var(--foreground)]">
                Read PDF
              </a>
              <a href={p.href} download className="underline text-[var(--foreground)]">
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
