import { Link } from 'react-router-dom'
import { BrandMark } from './BrandMark'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1120px] px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandMark />
              <span className="font-display text-lg tracking-[-0.5px]">
                Kubik Play
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Sesi photo-booth gamified untuk operator studio acara di Indonesia. Frame
              game, kartu suvenir cetak, QR untuk salinan digital.
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
              Produk
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="/#fitur" className="hover:text-foreground">Fitur</a>
              </li>
              <li>
                <a href="/#paket" className="hover:text-foreground">Paket & harga</a>
              </li>
              <li>
                <a href="/#cara" className="hover:text-foreground">Cara kerja</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-foreground">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@kubikplay.com"
                  className="hover:text-foreground"
                >
                  support@kubikplay.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
            © {year} Kubik Play · Dibuat di Indonesia
          </p>
          <p className="font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
            v1 · BETA · MEI 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
