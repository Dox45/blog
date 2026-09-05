"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookIcon,
  SearchIcon,
  GitHubIcon,
  XTwitterIcon,
  MailIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SunIcon,
  MoonIcon,
  CloseIcon
} from './Icons'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onOpenSearch: () => void
  theme: 'light' | 'dark' | null
  onToggleTheme: () => void
}

export default function Sidebar({
  isOpen,
  onClose,
  onOpenSearch,
  theme,
  onToggleTheme
}: SidebarProps) {
  const pathname = usePathname()

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    general: true,
    writings: true
  })

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Mobile overlay backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-[var(--sidebar-bg)] border-r border-[var(--sidebar-border)] flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header Branding */}
        <div className="p-5 border-b border-[var(--sidebar-border)] flex items-center justify-between">
          <Link href="/" onClick={onClose} className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-foreground text-background font-black text-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              CE
            </div>
            <div>
              <h1 className="font-bold text-base tracking-tight text-[var(--foreground)] group-hover:opacity-80 transition-opacity">
                Chima Emmanuel
              </h1>
              <p className="text-[11px] text-[var(--muted)] flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                Research Scientist
              </p>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-[var(--muted)] hover:bg-[var(--hover-bg)]"
            aria-label="Close sidebar"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search Button */}
        <div className="p-3 border-b border-[var(--sidebar-border)]">
          <button
            onClick={() => {
              onClose()
              onOpenSearch()
            }}
            className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg bg-[var(--hover-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/40 transition-all group font-mono"
          >
            <span className="flex items-center gap-2">
              <SearchIcon className="w-4 h-4 text-[var(--foreground)]" />
              <span>Search articles...</span>
            </span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Navigation Content */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-4 text-xs font-medium">
          {/* General Information */}
          <div>
            <button
              onClick={() => toggleSection('general')}
              className="w-full flex items-center justify-between px-2 py-1.5 text-[var(--muted)] uppercase tracking-wider font-bold text-[10px] hover:text-[var(--foreground)]"
            >
              <span>General Information</span>
              {openSections.general ? <ChevronDownIcon className="w-3 h-3" /> : <ChevronRightIcon className="w-3 h-3" />}
            </button>

            {openSections.general && (
              <div className="mt-1 space-y-0.5 pl-2">
                <Link
                  href="/"
                  onClick={onClose}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isActive('/') && pathname === '/'
                      ? 'bg-[var(--hover-bg)] text-[var(--foreground)] font-bold border-l-2 border-[var(--foreground)]'
                      : 'text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[var(--hover-bg)]'
                  }`}
                >
                  <span>Overview</span>
                </Link>
                <Link
                  href="/about"
                  onClick={onClose}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isActive('/about')
                      ? 'bg-[var(--hover-bg)] text-[var(--foreground)] font-bold border-l-2 border-[var(--foreground)]'
                      : 'text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[var(--hover-bg)]'
                  }`}
                >
                  <span>About & Bio</span>
                </Link>
              </div>
            )}
          </div>

          {/* Writings & Articles */}
          <div>
            <button
              onClick={() => toggleSection('writings')}
              className="w-full flex items-center justify-between px-2 py-1.5 text-[var(--muted)] uppercase tracking-wider font-bold text-[10px] hover:text-[var(--foreground)]"
            >
              <span className="flex items-center gap-1.5">
                <BookIcon className="w-3.5 h-3.5 text-[var(--foreground)]" />
                Articles & Writings
              </span>
              {openSections.writings ? <ChevronDownIcon className="w-3 h-3" /> : <ChevronRightIcon className="w-3 h-3" />}
            </button>

            {openSections.writings && (
              <div className="mt-1 space-y-0.5 pl-2">
                <Link
                  href="/blog"
                  onClick={onClose}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-md transition-colors ${
                    isActive('/blog') && pathname === '/blog'
                      ? 'bg-[var(--hover-bg)] text-[var(--foreground)] font-bold border-l-2 border-[var(--foreground)]'
                      : 'text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[var(--hover-bg)]'
                  }`}
                >
                  <span>All Articles</span>
                  <span className="px-1.5 py-0.2 text-[10px] rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono">
                    3
                  </span>
                </Link>

                <div className="pt-1 border-l border-[var(--sidebar-border)] ml-2 pl-2 space-y-0.5 text-[11px]">
                  <Link
                    href="/blog/lagrange"
                    onClick={onClose}
                    className="block py-1 px-1.5 text-[var(--muted)] hover:text-[var(--foreground)] truncate"
                  >
                    Lagrangian Geometry
                  </Link>
                  <Link
                    href="/blog/autoencoder"
                    onClick={onClose}
                    className="block py-1 px-1.5 text-[var(--muted)] hover:text-[var(--foreground)] truncate"
                  >
                    Autoencoders & Vision
                  </Link>
                  <Link
                    href="/blog/dimension"
                    onClick={onClose}
                    className="block py-1 px-1.5 text-[var(--muted)] hover:text-[var(--foreground)] truncate"
                  >
                    Dimension Reduction
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Socials & Connect */}
          <div className="pt-2 border-t border-[var(--sidebar-border)]">
            <p className="px-2 mb-1.5 text-[10px] uppercase font-bold text-[var(--muted)] tracking-wider">
              Social Links
            </p>
            <div className="space-y-0.5 pl-1">
              <a
                href="https://github.com/Dox45"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--hover-bg)] transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-[var(--foreground)]" />
                <span>GitHub (Dox45)</span>
              </a>
              <a
                href="https://x.com/purple_wavelet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--hover-bg)] transition-colors"
              >
                <XTwitterIcon className="w-4 h-4 text-[var(--foreground)]" />
                <span>X / Twitter</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Sidebar Footer & Theme Toggle */}
        <div className="p-3 border-t border-[var(--sidebar-border)] bg-[var(--hover-bg)]/40 flex items-center justify-between">
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--foreground)] hover:bg-[var(--hover-bg)] transition-colors"
          >
            {theme === 'dark' ? (
              <>
                <SunIcon className="w-4 h-4 text-neutral-200" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <MoonIcon className="w-4 h-4 text-neutral-800" />
                <span>Dark Mode</span>
              </>
            )}
          </button>

          <span className="text-[10px] font-mono text-[var(--muted)]">
            MIT / CC-BY
          </span>
        </div>
      </aside>
    </>
  )
}
