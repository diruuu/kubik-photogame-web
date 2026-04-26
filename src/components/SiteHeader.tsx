import { Link, NavLink } from 'react-router-dom'
import { BrandMark } from './BrandMark'
import { cn } from '../lib/cn'

const NAV = [
  { to: '/#fitur', label: 'Fitur' },
  { to: '/#paket', label: 'Paket' },
  { to: '/#cara', label: 'Cara kerja' },
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="font-display text-lg tracking-[-0.5px] text-foreground">
            Kubik Play
          </span>
          <span className="hidden font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground sm:inline">
            · BETA
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="font-mono text-[0.6875rem] uppercase tracking-monoWide text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              cn(
                'font-mono text-[0.6875rem] uppercase tracking-monoWide transition',
                isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )
            }
          >
            Privasi
          </NavLink>
        </nav>

        <a
          href="#unduh"
          className="hidden rounded-pill bg-foreground px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-monoWide text-background transition active:scale-95 sm:inline-flex"
        >
          Unduh
        </a>
      </div>
    </header>
  )
}
