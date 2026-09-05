import React from 'react'
import { GitHubIcon, XTwitterIcon, MailIcon } from '../components/Icons'

export const metadata = {
  title: 'About Me',
  description: 'Bio, research focus, and technical interests of Chima Emmanuel.',
}

export default function AboutPage() {
  return (
    <div className="space-y-8 py-4 animate-fade-in max-w-3xl">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[var(--card-border)] pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
          About Me — Chima Emmanuel
        </h1>

      </div>

      {/* Main Bio Paragraph */}
      <div className="p-6 rounded-2xl glass-panel space-y-4 border border-[var(--card-border)]">
        <p className="text-base sm:text-lg leading-relaxed text-[var(--foreground)] font-normal">
          Chima Emmanuel is a research scientist developing tools at the intersection of machine learning and computational biology. Builds educational machine learning infrastructure from scratch in Python. Created tooling to convert research papers into executable code modules. Implements GPU-accelerated graphics techniques for CPU compatibility. Works across Python, C++, and TypeScript for different technical domains.
        </p>
      </div>

      {/* Technical Focus & Derived Interests */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--foreground)] border-b border-[var(--card-border)] pb-2">
          Derived Research & Technical Interests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl glass-card space-y-2">
            <h3 className="text-sm font-bold text-[var(--foreground)]">
              Machine Learning & Computational Biology
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Designing algorithms and domain-specific tools at the convergence of ML models and biological sequence/structural analysis.
            </p>
          </div>

          <div className="p-5 rounded-xl glass-card space-y-2">
            <h3 className="text-sm font-bold text-[var(--foreground)]">
              From-Scratch ML Infrastructure
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Architecting educational machine learning frameworks and fundamental primitives directly from first principles in Python.
            </p>
          </div>

          <div className="p-5 rounded-xl glass-card space-y-2">
            <h3 className="text-sm font-bold text-[var(--foreground)]">
              Paper-to-Code Automation
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Building automated tooling and compilers that translate theoretical machine learning research papers into modular, executable code.
            </p>
          </div>

          <div className="p-5 rounded-xl glass-card space-y-2">
            <h3 className="text-sm font-bold text-[var(--foreground)]">
              GPU Graphics & CPU Compatibility Kernels
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Implementing hardware-accelerated graphics pipelines, compute shaders, and high-performance algorithms with robust CPU fallback paths.
            </p>
          </div>

          <div className="p-5 rounded-xl glass-card space-y-2 md:col-span-2">
            <h3 className="text-sm font-bold text-[var(--foreground)]">
              Cross-Language Systems Engineering
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Engineered across Python (ML/Data), C++ (Low-Level Kernels & Performance), and TypeScript (Interactive Web Systems).
            </p>
          </div>
        </div>
      </div>

      {/* Social Links & Contact */}
      <div className="space-y-4 pt-4 border-t border-[var(--card-border)]">
        <h2 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider font-mono text-xs">
          Profiles & Contact
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/Dox45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub (@Dox45)</span>
          </a>
          <a
            href="https://x.com/purple_wavelet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all"
          >
            <XTwitterIcon className="w-4 h-4" />
            <span>X / Twitter (@purple_wavelet)</span>
          </a>
        </div>
      </div>
    </div>
  )
}
