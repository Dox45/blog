import React from 'react'
import { CodeIcon, ExternalLinkIcon } from '../components/Icons'
import { OPEN_MODELS, HF_ORG_URL } from '../../lib/models'

export const metadata = {
  title: 'Open Models & Projects',
  description: 'Open models and research projects released by Chima Emmanuel through Modular.',
}

export default function ProjectsPage() {
  return (
    <div className="space-y-8 py-4 animate-fade-in max-w-4xl">
      <div className="space-y-3 border-b border-[var(--card-border)] pb-6">
        <div className="flex items-center gap-2">
          <CodeIcon className="w-6 h-6 text-[var(--foreground)]" />
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
            Open Models & Projects
          </h1>
        </div>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          Models I have built and released openly through{' '}
          <a href="https://modularcomputing.cloud" target="_blank" rel="noopener noreferrer" className="underline text-[var(--foreground)]">
            Modular
          </a>{' '}
          on Hugging Face. Each model card documents its data, licence, results and limitations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {OPEN_MODELS.map((m) => (
          <a
            key={m.repo}
            href={m.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl glass-card space-y-2 hover:border-[var(--foreground)] transition-all"
          >
            <p className="text-[10px] uppercase tracking-wider font-mono text-[var(--muted)]">{m.area}</p>
            <h2 className="text-base font-bold text-[var(--foreground)] flex items-center gap-1.5">
              {m.name}
              <ExternalLinkIcon className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
            </h2>
            <p className="text-xs text-[var(--muted)] leading-relaxed">{m.summary}</p>
          </a>
        ))}
      </div>

      <a
        href={HF_ORG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all"
      >
        <span>🤗</span>
        <span>All models on Hugging Face</span>
      </a>
    </div>
  )
}
