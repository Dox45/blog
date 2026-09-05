"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, SearchIcon, SunIcon, MoonIcon } from './Icons'

interface HeaderProps {
  onOpenSidebar: () => void
  onOpenSearch: () => void
  theme: 'light' | 'dark' | null
  onToggleTheme: () => void
}

export default function Header({
  onOpenSidebar,
  onOpenSearch,
  theme,
  onToggleTheme
}: HeaderProps) {
  const pathname = usePathname()

  const getBreadcrumb = () => {
    if (pathname === '/') return 'Overview'
    if (pathname === '/about') return 'About & Bio'
    if (pathname === '/blog') return 'Articles'
    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '')
      return `Article: ${slug}`
    }
    return pathname.replace('/', '')
  }

  return (
    <header className="sticky top-0 z-30 h-14 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--sidebar-border)] flex items-center justify-between px-4 lg:px-8 transition-colors">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onOpenSidebar}
          className="lg:hidden p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--hover-bg)] transition-colors"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="w-5 h-5" />
        </button>

        {/* Breadcrumb path */}
        <div className="flex items-center gap-2 text-xs">
          <Link href="/" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors font-medium">
            Chima Emmanuel
          </Link>
          <span className="text-[var(--muted)] opacity-40">/</span>
          <span className="font-semibold text-[var(--foreground)] truncate max-w-[200px] sm:max-w-xs font-mono">
            {getBreadcrumb()}
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenSearch}
          className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--hover-bg)] transition-colors flex items-center gap-2 text-xs font-mono"
          title="Search website (⌘K)"
        >
          <SearchIcon className="w-4 h-4 text-[var(--foreground)]" />
          <span className="hidden sm:inline font-mono text-[11px] opacity-70">⌘K</span>
        </button>

        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--hover-bg)] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <SunIcon className="w-4 h-4 text-neutral-200" />
          ) : (
            <MoonIcon className="w-4 h-4 text-neutral-800" />
          )}
        </button>
      </div>
    </header>
  )
}
