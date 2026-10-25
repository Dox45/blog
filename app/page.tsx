import React from 'react'
import Link from 'next/link'
import {
  BookIcon,
  ChevronRightIcon,
  GitHubIcon,
  XTwitterIcon
} from './components/Icons'
import { getAllPosts } from '../lib/mdx'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Intro */}
      <section className="space-y-5 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
          Chima Emmanuel
        </h1>

        <div className="space-y-4 text-base leading-relaxed text-[var(--foreground)] opacity-90">
          <p>
            Hi, I&apos;m Chima. I train models, mostly speech and language models, and mostly for the languages
            people in Nigeria actually speak, which tend to get left out of the big labs&apos; datasets.
          </p>
          <p>
            I run <a href="https://modularcomputing.cloud" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">Modular</a>,
            a small research company. Everything we train goes out openly on 
            <a href="https://huggingface.co/Modularcomputing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">Hugging Face</a>:
            a text-to-speech model and a speech recognizer that handle switching between English, Pidgin, Igbo, Yoruba and
            Hausa mid-sentence, a 2.4M-parameter time-series forecaster trained from scratch, a protein stability predictor,
            and a few others. Almost all of it was trained on GPUs rented by the hour, so I&apos;ve learned to be stingy with
            experiments and honest about results.
          </p>
          <p>
            I&apos;m also a Software Engineering student at FUTO, and I contribute to open-source ML infrastructure,
            most recently PyTorch&apos;s ExecuTorch.
          </p>
          <p>
            This site is where I write things down: what I&apos;m building, what worked, and especially what didn&apos;t.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm font-medium">
          <Link href="/about" className="underline underline-offset-2 hover:opacity-70">About</Link>
          <Link href="/projects" className="underline underline-offset-2 hover:opacity-70">Models</Link>
          <Link href="/publications" className="underline underline-offset-2 hover:opacity-70">Publications</Link>
          <a href="https://github.com/Dox45" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">GitHub</a>
          <a href="https://huggingface.co/Modularcomputing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">Hugging Face</a>
          <a href="https://x.com/purple_wavelet" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">X</a>
          <a href="https://www.linkedin.com/in/chima-emmanuel-045794271" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">LinkedIn</a>
        </div>
      </section>

      {/* Recent */}
      <section className="space-y-3 max-w-2xl">
        <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)]">Recent</h2>
        <ul className="space-y-2 text-sm leading-relaxed text-[var(--foreground)] opacity-90 list-disc pl-5">
          <li>
            Released <a href="https://huggingface.co/Modularcomputing/dynamic-asr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">Dynamic ASR</a>,
            speech recognition for Nigerian code-switched speech, fine-tuned from Meta&apos;s Omnilingual ASR on 187 hours of licensed audio.
          </li>
          <li>
            Released <a href="https://huggingface.co/Modularcomputing/dynamic-accent-preview" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">Dynamic Accent</a>,
            one voice that speaks five languages and switches between them inside a sentence.
          </li>
          <li>
            Trained <a href="https://huggingface.co/Modularcomputing/Modular-TS-2.4M" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">Modular-TS-2.4M</a>,
            a tiny forecasting foundation model that runs on a CPU.
          </li>
          <li>
            Wrote <a href="/pdf/building-rnd-on-soft-ground.pdf" target="_blank" className="underline underline-offset-2 hover:opacity-70">Building R&amp;D on Soft Ground</a>, an essay on doing research
            where the infrastructure is missing, and <a href="/pdf/the-local-minimum.pdf" target="_blank" className="underline underline-offset-2 hover:opacity-70">The Local Minimum</a>, a short book on what failed experiments taught me.
          </li>
          <li>
            Co-authored a <a href="https://doi.org/10.62154/ajastr.2026.023.01014" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">journal paper</a> on
            an AI app for poultry disease diagnosis.
          </li>
        </ul>
      </section>

      {/* Articles & Writings */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookIcon className="w-5 h-5 text-[var(--foreground)]" />
            <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              Writing
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold text-[var(--foreground)] hover:underline flex items-center gap-1"
          >
            <span>Browse All ({posts.length})</span>
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.url}
              className="p-5 rounded-2xl glass-card block group space-y-2"
            >
              <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                <time className="font-mono">{post.date}</time>
                <span className="font-mono px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                  {post.readingTime}
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--foreground)] group-hover:opacity-80 transition-opacity">
                {post.title}
              </h3>
              <p className="text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Licensing & Contact Footer Box */}
      <section className="p-6 rounded-2xl glass-panel space-y-4 border border-[var(--card-border)]">
        <h3 className="text-base font-bold text-[var(--foreground)]">
          Licensing & Contact
        </h3>

        <p className="text-xs leading-relaxed text-[var(--muted)]">
          Code is released under the <strong>MIT License</strong>. Written articles are licensed under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] underline">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC-BY-NC-SA)</a>.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[var(--card-border)] text-xs font-medium">
          <a href="https://github.com/Dox45" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)]">
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub (@Dox45)</span>
          </a>
          <a href="https://x.com/purple_wavelet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)]">
            <XTwitterIcon className="w-4 h-4" />
            <span>X (@purple_wavelet)</span>
          </a>
          <a href="https://www.linkedin.com/in/chima-emmanuel-045794271" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)]">
            <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </div>
  )
}
