import React from 'react'
import { CodeIcon } from '../components/Icons'

export const metadata = {
  title: 'Projects',
  description: 'Computational tools and software projects by Chima Emmanuel.',
}

export default function ProjectsPage() {
  return (
    <div className="space-y-8 py-4 animate-fade-in max-w-4xl">
      <div className="space-y-3 border-b border-[var(--card-border)] pb-6">
        <div className="flex items-center gap-2">
          <CodeIcon className="w-6 h-6 text-[var(--foreground)]" />
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
            Projects
          </h1>
        </div>
      </div>

      <div className="p-12 text-center rounded-2xl glass-panel space-y-3 border border-[var(--card-border)]">
        <p className="text-sm font-semibold text-[var(--foreground)]">
          No projects listed yet.
        </p>
        <p className="text-xs text-[var(--muted)]">
          This page will be populated with open-source tools and software repositories.
        </p>
      </div>
    </div>
  )
}
