"use client"

import React, { useEffect, useState } from 'react'
import { TocHeading } from '../../lib/mdx'

interface TableOfContentsProps {
  headings: TocHeading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -60% 0px' }
    )

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings || headings.length === 0) return null

  return (
    <div className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-20 p-4 rounded-2xl glass-panel text-xs space-y-3">
        <h4 className="font-bold uppercase tracking-wider text-[10px] text-[var(--muted)]">
          Table of Contents
        </h4>
        <nav className="space-y-1.5 font-medium">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block transition-colors ${
                heading.level === 3 ? 'pl-3 text-[11px]' : 'pl-0'
              } ${
                activeId === heading.id
                  ? 'text-[var(--accent-cyan)] font-semibold border-l-2 border-[var(--accent-cyan)] pl-2'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
