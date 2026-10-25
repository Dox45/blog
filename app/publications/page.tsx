import React from 'react'
import { PaperIcon } from '../components/Icons'

export const metadata = {
  title: 'Publications',
  description: 'Publications and research papers by Chima Emmanuel.',
}

type Pub = {
  title: string
  kind: string
  date: string
  authors?: string
  venue?: string
  summary: string
  links: { label: string; href: string; download?: boolean }[]
}

const publications: Pub[] = [
  {
    title:
      'Development of an AI-Driven Mobile Application for Poultry Disease Diagnosis and Decision Support Using a Pre-Trained Transformer-Based Model',
    kind: 'Journal article',
    date: 'July 2026',
    authors: 'A. I. Erike, A. Azubogu, C. Ikerionwu, V. C. Obodoagwu, E. A. Chima, M. C. Erike',
    venue: 'African Journal of Advances in Science and Technology Research, 23(1), 35–48',
    summary:
      'A mobile app that pairs a CNN image classifier (84.5% accuracy on poultry diseases) with a transformer model for diagnosis and treatment advice, rated by three veterinary experts.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.62154/ajastr.2026.023.01014' },
      { label: 'Journal page', href: 'https://afropolitanjournals.com/index.php/ajastr/article/view/1543' },
    ],
  },
  {
    title: 'Building R&D on Soft Ground',
    kind: 'Essay · 8 pages',
    date: 'October 2026',
    summary: 'What structural engineers know about building serious research where the infrastructure is missing.',
    links: [
      { label: 'Read PDF', href: '/pdf/building-rnd-on-soft-ground.pdf' },
      { label: 'Download', href: '/pdf/building-rnd-on-soft-ground.pdf', download: true },
    ],
  },
  {
    title: 'The Local Minimum',
    kind: 'Mini-book · 11 pages',
    date: 'October 2026',
    summary: 'Lessons from building models, products, and a research lab early.',
    links: [
      { label: 'Read PDF', href: '/pdf/the-local-minimum.pdf' },
      { label: 'Download', href: '/pdf/the-local-minimum.pdf', download: true },
    ],
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
            key={p.title}
            className="p-6 rounded-2xl glass-panel border border-[var(--card-border)] space-y-2"
          >
            <p className="text-xs text-[var(--muted)]">
              {p.kind} · {p.date}
            </p>
            <h2 className="text-lg font-bold text-[var(--foreground)]">{p.title}</h2>
            {p.authors && <p className="text-xs text-[var(--foreground)] opacity-80">{p.authors}</p>}
            {p.venue && <p className="text-xs italic text-[var(--muted)]">{p.venue}</p>}
            <p className="text-sm text-[var(--muted)]">{p.summary}</p>
            <div className="flex gap-4 pt-1 text-sm font-semibold">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="underline text-[var(--foreground)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
