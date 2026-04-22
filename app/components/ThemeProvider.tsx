"use client";

import React, { useEffect, useState } from "react";

const THEME_KEY = "theme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        document.documentElement.classList.toggle("dark", stored === "dark");
        return;
      }
    } catch (e) {
      // ignore
    }

    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Override CSS variables set by prefers-color-scheme so the toggle works
    try {
      const root = document.documentElement;
      if (theme === "dark") {
        root.style.setProperty("--background", "#0a0a0a");
        root.style.setProperty("--foreground", "#ededed");
      } else {
        root.style.setProperty("--background", "#ffffff");
        root.style.setProperty("--foreground", "#171717");
      }
    } catch (e) {
      // ignore
    }

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <>
      <div className="min-h-screen">
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={toggle}
          className="fixed top-4 right-4 z-50 p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 focus:outline-none"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        {children}
      </div>
    </>
  );
}
