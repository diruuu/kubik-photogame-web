import type { ReactNode } from 'react'
import { PageShell } from './PageShell'

interface Props {
  eyebrow: string
  title: string
  updated: string
  intro: string
  children: ReactNode
}

export function LegalLayout({ eyebrow, title, updated, intro, children }: Props) {
  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[820px] px-6 py-14 md:px-10 md:py-20">
          <p className="font-mono text-[0.6875rem] uppercase tracking-monoWide text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-[-0.9px] md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-monoWide text-muted-foreground">
            DIPERBARUI · {updated}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-[820px] px-6 py-14 md:px-10 md:py-20">
        <div className="legal-prose">{children}</div>
      </article>
    </PageShell>
  )
}
