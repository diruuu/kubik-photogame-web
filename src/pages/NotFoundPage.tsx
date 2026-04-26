import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'

export default function NotFoundPage() {
  return (
    <PageShell>
      <section className="mx-auto flex max-w-[1120px] flex-col items-start px-6 py-24 md:px-10 md:py-32">
        <p className="font-mono text-[0.6875rem] uppercase tracking-monoWide text-muted-foreground">
          GALAT · 404
        </p>
        <h1 className="mt-4 font-display text-5xl tracking-[-1px] md:text-6xl">
          Halaman tidak ditemukan.
        </h1>
        <p className="mt-4 max-w-lg text-base text-muted-foreground">
          Kami tidak menemukan halaman ini. Mungkin tautan sudah kedaluwarsa atau
          ada salah ketik.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-pill bg-foreground px-5 py-3 font-mono text-[0.75rem] uppercase tracking-monoWide text-background"
        >
          Kembali ke beranda
        </Link>
      </section>
    </PageShell>
  )
}
