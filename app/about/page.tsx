import React from 'react'
import Link from 'next/link'
import { GitHubIcon, XTwitterIcon, MailIcon } from '../components/Icons'
import { OPEN_MODELS, HF_ORG_URL } from '../../lib/models'

export const metadata = {
  title: 'About Me',
  description: 'Bio, research focus, and open models of Chima Emmanuel, founder of Modular.',
}

const focus = [
  {
    title: 'Speech for how Nigerians actually talk',
    body: 'Text-to-speech, speech recognition and voice agents for English, Pidgin, Igbo, Yoruba and Hausa, built for code-switching inside a single sentence.',
  },
  {
    title: 'Multilingual & multimodal representation',
    body: 'Embedding and vision–language models that put Nigerian languages and images in one shared space for search, retrieval and grounding.',
  },
  {
    title: 'Small foundation models',
    body: 'Compact models trained from scratch for the GPU-poor, such as a 2.4M-parameter time-series forecaster that runs on a phone-class device.',
  },
  {
    title: 'ML for the life sciences',
    body: 'Structure-conditioned protein stability prediction and other tools for Modular’s biotech work.',
  },
  {
    title: 'Edge & on-device ML',
    body: 'Getting models onto small hardware, including open-source contributions to PyTorch’s ExecuTorch runtime for microcontrollers.',
  },
  {
    title: 'Research under constraints',
    body: 'Licence-clean data, staged experiments on rented compute, and honest evaluation where the usual infrastructure is missing.',
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-8 py-4 animate-fade-in max-w-3xl">
      <div className="space-y-3 border-b border-[var(--card-border)] pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
          About Me — Chima Emmanuel
        </h1>
        <p className="text-sm text-[var(--muted)] font-mono">
          Founder, Modular · ML researcher & engineer · Nigeria
        </p>
      </div>

      <div className="p-6 rounded-2xl glass-panel space-y-4 border border-[var(--card-border)]">
        <p className="text-base sm:text-lg leading-relaxed text-[var(--foreground)]">
          I&apos;m Chima Emmanuel Akuegbo, a machine learning researcher and engineer, and the founder of{' '}
          <a href="https://modularcomputing.cloud" target="_blank" rel="noopener noreferrer" className="underline">
            Modular
          </a>
          , an AI and data infrastructure company building open models, datasets and pipelines, with a biotech division.
        </p>
        <p className="text-sm leading-relaxed text-[var(--foreground)] opacity-90">
          At Modular I lead the research: code-switching speech models for Nigerian languages, multilingual embedding and
          vision–language models, a small time-series foundation model, and protein stability prediction. We release our
          work openly on{' '}
          <a href={HF_ORG_URL} target="_blank" rel="noopener noreferrer" className="underline">
            Hugging Face
          </a>
          , with model cards that state what works, what does not, and what each model was allowed to learn from.
        </p>
        <p className="text-sm leading-relaxed text-[var(--foreground)] opacity-90">
          Alongside Modular, I&apos;m Lead AI Engineer at Phace LLC (AnomalyForex), co-founder of Llava, an AI operating
          system for lawyers, and of Forecast, a Nigerian prediction market, and a software engineering intern at Squad by
          HabariPay (GTCO). I study Software Engineering at the Federal University of Technology Owerri, and I contribute to
          open-source ML infrastructure, most recently PyTorch&apos;s ExecuTorch.
        </p>
        <p className="text-sm leading-relaxed text-[var(--foreground)] opacity-90">
          I write about building serious R&amp;D where the infrastructure is thin. Start with the essay and the short book
          on the <Link href="/publications" className="underline">Publications</Link> page.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--foreground)] border-b border-[var(--card-border)] pb-2">
          Research Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {focus.map((f) => (
            <div key={f.title} className="p-5 rounded-xl glass-card space-y-2">
              <h3 className="text-sm font-bold text-[var(--foreground)]">{f.title}</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--foreground)] border-b border-[var(--card-border)] pb-2">
          Open Models on Hugging Face
        </h2>
        <div className="space-y-2">
          {OPEN_MODELS.map((m) => (
            <a
              key={m.repo}
              href={m.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-between gap-4 px-4 py-2.5 rounded-lg glass-card hover:border-[var(--foreground)] transition-all"
            >
              <span className="text-sm font-semibold text-[var(--foreground)]">{m.name}</span>
              <span className="text-[11px] font-mono text-[var(--muted)] text-right">{m.area}</span>
            </a>
          ))}
        </div>
        <Link href="/projects" className="text-xs font-semibold underline text-[var(--foreground)]">
          Descriptions of every model →
        </Link>
      </div>

      <div className="space-y-4 pt-4 border-t border-[var(--card-border)]">
        <h2 className="font-bold text-[var(--foreground)] uppercase tracking-wider font-mono text-xs">
          Profiles & Contact
        </h2>
        <div className="flex flex-wrap gap-3">
          <a href="https://github.com/Dox45" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all">
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub (@Dox45)</span>
          </a>
          <a href={HF_ORG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all">
            <span>🤗</span>
            <span>Hugging Face (Modularcomputing)</span>
          </a>
          <a href="https://x.com/purple_wavelet" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all">
            <XTwitterIcon className="w-4 h-4" />
            <span>X / Twitter (@purple_wavelet)</span>
          </a>
          <a href="https://www.linkedin.com/in/chima-emmanuel-045794271" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all">
            <span>LinkedIn</span>
          </a>
          <a href="mailto:contact@modularcomputing.cloud" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition-all">
            <MailIcon className="w-4 h-4" />
            <span>contact@modularcomputing.cloud</span>
          </a>
        </div>
      </div>
    </div>
  )
}
