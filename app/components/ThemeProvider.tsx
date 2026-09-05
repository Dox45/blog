"use client"

import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import SearchModal from "./SearchModal"

const THEME_KEY = "theme"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY)
      if (stored === "light" || stored === "dark") {
        setTheme(stored)
        document.documentElement.classList.toggle("dark", stored === "dark")
        return
      }
    } catch (e) {
      // ignore
    }

    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(prefersDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", prefersDark)
  }, [])

  useEffect(() => {
    if (!theme) return
    document.documentElement.classList.toggle("dark", theme === "dark")

    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch (e) {
      // ignore
    }
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)] selection:bg-cyan-500/20 selection:text-cyan-400">
      {/* Permanent & Mobile Drawer Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72 transition-all">
        <Header
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="flex-1 p-4 sm:p-8 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  )
}
