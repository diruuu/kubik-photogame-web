import {
  Camera,
  Heart,
  Printer,
  QrCode,
  WifiOff,
  ShieldCheck,
  Sparkles,
  Check,
  ArrowRight,
} from 'lucide-react'
import { PageShell } from '../components/PageShell'
import { cn } from '../lib/cn'

export default function LandingPage() {
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <Features />
      <HowItWorks />
      <Plans />
      <DownloadCTA />
    </PageShell>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-14 md:grid-cols-[1.1fr_1fr] md:gap-12 md:px-10 md:py-20 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[0.6875rem] uppercase tracking-monoWide text-muted-foreground">
            UNTUK · OPERATOR · PHOTO-BOOTH
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-1px] sm:text-5xl md:text-[3.4rem]">
            Sesi foto yang <em className="not-italic underline decoration-foreground decoration-[3px] underline-offset-[6px]">main</em>, bukan sekadar dicetak.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Kubik Play membungkus tiap sesi photo-booth dalam <strong className="text-foreground">frame game</strong>{' '}
            — Love Meter, Personality Test, Career Scan, Soul Age — lalu mencetaknya
            sebagai kartu suvenir dengan QR untuk salinan digital. Dirancang untuk
            tetap jalan saat sinyal jelek.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#unduh"
              className="inline-flex items-center gap-2 rounded-pill bg-foreground px-5 py-3 font-mono text-[0.75rem] uppercase tracking-monoWide text-background transition active:scale-95"
            >
              Unduh untuk Android
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
            <a
              href="#cara"
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-card px-5 py-3 font-mono text-[0.75rem] uppercase tracking-monoWide text-foreground transition hover:border-foreground"
            >
              Lihat cara kerja
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <Stat label="Frame game" value="6+" />
            <Stat label="Mulai dari" value="Rp 0" />
            <Stat label="Offline-tolerant" value="✓" />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <HeroCard />
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-[1.875rem] tracking-[-0.6px]">{value}</p>
      <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
        {label}
      </p>
    </div>
  )
}

function HeroCard() {
  return (
    <div className="relative w-full max-w-[380px]">
      <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-pill bg-muted md:block" />
      <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-pill border border-border bg-card md:block" />

      <div className="relative rounded-lg border border-border bg-card p-5 shadow-card">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
            LOVE · METER · 02
          </p>
          <span className="rounded-pill bg-muted px-2 py-1 font-mono text-[0.625rem] uppercase tracking-monoWide text-foreground">
            2 KREDIT
          </span>
        </div>

        <div className="mt-4 aspect-[3/4] overflow-hidden rounded-md bg-foreground/95 text-background">
          <div className="flex h-full flex-col items-center justify-between p-6">
            <p className="font-mono text-[0.625rem] uppercase tracking-monoWide text-background/70">
              Hasil Acak · untuk Hiburan
            </p>
            <div className="flex flex-col items-center gap-3">
              <Heart className="h-9 w-9" strokeWidth={1.5} />
              <p className="font-display text-[5rem] leading-none tracking-[-3px]">
                87<span className="text-3xl">%</span>
              </p>
              <p className="font-mono text-[0.6875rem] uppercase tracking-monoWide">
                Soulmate · Vibes
              </p>
            </div>
            <div className="grid w-full grid-cols-3 gap-2">
              <Pip />
              <Pip filled />
              <Pip filled />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="rounded-pill bg-foreground py-2.5 font-mono text-[0.6875rem] uppercase tracking-monoWide text-background"
          >
            Cetak Kartu
          </button>
          <button
            type="button"
            className="rounded-pill border border-border bg-background py-2.5 font-mono text-[0.6875rem] uppercase tracking-monoWide text-foreground"
          >
            Bagikan QR
          </button>
        </div>

        <p className="mt-4 text-center font-mono text-[0.5625rem] uppercase tracking-monoWide text-muted-foreground">
          AKHIR · LAP · 00 · STUDIO KEMANG · RABU 22 APRIL
        </p>
      </div>
    </div>
  )
}

function Pip({ filled }: { filled?: boolean }) {
  return (
    <div
      className={cn(
        'h-1.5 w-full rounded-pill',
        filled ? 'bg-background' : 'bg-background/25',
      )}
    />
  )
}

function Marquee() {
  const items = [
    'LOVE · METER',
    'PERSONALITY · TEST',
    'CAREER · SCAN',
    'SOUL · AGE',
    'KUBIK · DATE',
    'COMPATIBILITY',
  ]
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5 md:px-10">
        {items.map((item) => (
          <span
            key={item}
            className="font-mono text-[0.6875rem] uppercase tracking-monoWide opacity-80"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

const FEATURES = [
  {
    icon: Camera,
    eyebrow: 'FITUR · 01',
    title: 'Frame game siap pakai',
    body: 'Love Meter, Personality Test, Career Scan, Soul Age — semua jadi format kartu suvenir dengan hasil acak yang teatrikal. Tidak perlu edit manual.',
  },
  {
    icon: Printer,
    eyebrow: 'FITUR · 02',
    title: 'Cetak ke printer lokal',
    body: 'Bluetooth, USB, atau WiFi-direct. Cetak gratis dan tidak menghabiskan kredit. Bekerja tanpa internet — mesin kasir bisa istirahat di pojok booth.',
  },
  {
    icon: QrCode,
    eyebrow: 'FITUR · 03',
    title: 'QR ke salinan digital',
    body: 'Tiap kartu cetak punya QR unik. Tamu pindai, langsung unduh foto resolusi penuh. Tidak perlu install apa-apa, tidak ada email yang harus dikumpulkan.',
  },
  {
    icon: WifiOff,
    eyebrow: 'FITUR · 04',
    title: 'Tetap jalan saat sinyal jelek',
    body: 'Loop sesi inti — ambil foto, generate, cetak — berjalan offline. Sinkronisasi saldo kredit dan unggahan QR mengejar saat koneksi pulih.',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'FITUR · 05',
    title: 'Cadangan cloud (paket berbayar)',
    body: 'Mulai dari Paket Personal, semua sesi tersimpan otomatis di cloud. Ganti HP, masuk lagi dengan akun yang sama — riwayat sesi pulih tanpa drama.',
  },
  {
    icon: Sparkles,
    eyebrow: 'FITUR · 06',
    title: 'Branding studio (Pro)',
    body: 'Logo studio kecil di pojok kartu, warna aksen mengikuti identitas booth. Tema dasar tetap rapi — branding hadir tanpa merusak komposisi frame.',
  },
] as const

function Features() {
  return (
    <section id="fitur" className="border-b border-border">
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-14">
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-monoWide text-muted-foreground">
              FITUR · UNTUK · OPERATOR
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.7px] md:text-4xl">
              Semua yang dibutuhkan untuk satu booth, tidak lebih.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Kubik Play dirancang untuk operator photo-booth Indonesia yang bekerja
              di pernikahan, acara kantor, expo, dan event sekolah. Bukan aplikasi
              filter konsumen.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <FeatureCard key={f.eyebrow} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  eyebrow,
  title,
  body,
}: (typeof FEATURES)[number]) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-foreground text-background">
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </span>
        <p className="font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
          {eyebrow}
        </p>
      </div>
      <h3 className="mt-5 font-display text-lg tracking-[-0.4px]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  )
}

const STEPS = [
  {
    n: '01',
    title: 'Pilih frame game',
    body: 'Tamu (atau operator) pilih dari pustaka frame yang sudah diunduh. Biaya kredit per pakai ditampilkan jelas.',
  },
  {
    n: '02',
    title: 'Ambil foto, generate hasil',
    body: 'Kamera berjalan dengan countdown dan mode mirror standar. Aplikasi mengomposisi foto ke frame dan menghitung hasil game.',
  },
  {
    n: '03',
    title: 'Cetak kartu, bagikan QR',
    body: 'Kartu suvenir tercetak dalam hitungan detik. Tamu pindai QR untuk unduh salinan digital — atau bisa juga dibagikan dari layar.',
  },
] as const

function HowItWorks() {
  return (
    <section id="cara" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.6875rem] uppercase tracking-monoWide text-muted-foreground">
            ALUR · SESI · 01–03
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.7px] md:text-4xl">
            Tiga langkah dari tamu duduk sampai kartu di tangan.
          </h2>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="rounded-lg border border-border bg-card p-6"
            >
              <p className="font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
                LANGKAH · {step.n}
              </p>
              <h3 className="mt-6 font-display text-2xl leading-tight tracking-[-0.5px]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PLANS = [
  {
    name: 'Free',
    price: 'Rp 0',
    cadence: 'sekali coba',
    credits: '15 kredit (uji coba)',
    features: [
      'Akses semua frame (kredit yang membatasi)',
      'Cetak ke printer lokal',
      'Share link 7 hari',
    ],
    highlight: false,
  },
  {
    name: 'Personal',
    price: 'Rp 50.000',
    cadence: 'per bulan',
    credits: '20 kredit / bulan',
    features: [
      'Cadangan cloud',
      'Share link 30 hari',
      'Top-up kapan saja',
    ],
    highlight: false,
  },
  {
    name: 'Basic',
    price: 'Rp 150.000',
    cadence: 'per bulan',
    credits: '100 kredit / bulan',
    features: [
      'QRIS pembayaran customer',
      'Cadangan cloud',
      'Share link 90 hari',
    ],
    highlight: true,
  },
  {
    name: 'Pro',
    price: 'Rp 300.000',
    cadence: 'per bulan',
    credits: '200 kredit / bulan',
    features: [
      'Branding studio (logo + warna)',
      'Frame Editor — buat frame sendiri',
      'Analitik lanjutan · Share link 1 tahun',
    ],
    highlight: false,
  },
] as const

function Plans() {
  return (
    <section id="paket" className="border-b border-border">
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-[0.6875rem] uppercase tracking-monoWide text-muted-foreground">
              PAKET · LANGGANAN
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.7px] md:text-4xl">
              Layanan plus kredit, dalam satu harga jelas.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground md:text-right">
            Tiap paket memberikan fitur layanan + kredit bulanan. Kredit dihargai
            flat <strong className="text-foreground">Rp 1.000 / kredit</strong>; top-up
            tersedia dengan diskon volume.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>

        <p className="mt-6 font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
          TOP-UP · STARTER 100 / REGULER 300 / HEMAT 500 / BORONGAN 1.000 — TURUN HINGGA RP 850 / KREDIT
        </p>
      </div>
    </section>
  )
}

function PlanCard({
  name,
  price,
  cadence,
  credits,
  features,
  highlight,
}: (typeof PLANS)[number]) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border p-6 transition',
        highlight
          ? 'border-foreground bg-foreground text-background shadow-card'
          : 'border-border bg-card text-foreground',
      )}
    >
      <div className="flex items-center justify-between">
        <p
          className={cn(
            'font-mono text-[0.625rem] uppercase tracking-monoWide',
            highlight ? 'text-background/70' : 'text-muted-foreground',
          )}
        >
          PAKET · {name.toUpperCase()}
        </p>
        {highlight && (
          <span className="rounded-pill bg-background px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-monoWide text-foreground">
            POPULER
          </span>
        )}
      </div>

      <p className="mt-5 font-display text-[2rem] leading-none tracking-[-0.7px]">
        {price}
      </p>
      <p
        className={cn(
          'mt-1 font-mono text-[0.625rem] uppercase tracking-monoWide',
          highlight ? 'text-background/70' : 'text-muted-foreground',
        )}
      >
        {cadence}
      </p>

      <div
        className={cn(
          'mt-5 rounded-md px-3 py-2 text-xs',
          highlight ? 'bg-background/10 text-background' : 'bg-muted text-foreground',
        )}
      >
        {credits}
      </div>

      <ul className="mt-5 space-y-2.5 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check
              className={cn(
                'mt-0.5 h-4 w-4 shrink-0',
                highlight ? 'text-background' : 'text-foreground',
              )}
              strokeWidth={2}
            />
            <span
              className={cn(
                'leading-snug',
                highlight ? 'text-background/90' : 'text-muted-foreground',
              )}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DownloadCTA() {
  return (
    <section id="unduh">
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-10 md:py-24">
        <div className="overflow-hidden rounded-lg border border-border bg-card p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-monoWide text-muted-foreground">
                MULAI · GRATIS · 15 KREDIT
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.7px] md:text-4xl">
                Unduh Kubik Play. Booth pertama tanpa biaya.
              </h2>
              <p className="mt-4 max-w-lg text-sm text-muted-foreground md:text-base">
                Verifikasi nomor HP, dapat 15 kredit untuk uji coba — pakai untuk
                acara berikutnya. Top-up atau berlangganan kapan pun saat siap
                naik kelas.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.kubikpass.app"
                  className="inline-flex items-center gap-2 rounded-pill bg-foreground px-5 py-3 font-mono text-[0.75rem] uppercase tracking-monoWide text-background transition active:scale-95"
                >
                  Google Play
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
                <a
                  href="mailto:support@kubikplay.com"
                  className="inline-flex items-center gap-2 rounded-pill border border-border px-5 py-3 font-mono text-[0.75rem] uppercase tracking-monoWide text-foreground transition hover:border-foreground"
                >
                  Hubungi tim
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="rounded-md border border-border bg-background p-5">
                <p className="font-mono text-[0.625rem] uppercase tracking-monoWide text-muted-foreground">
                  KEBUTUHAN · MINIMUM
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex justify-between gap-3">
                    <span className="text-muted-foreground">OS</span>
                    <span>Android 10+</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Akun</span>
                    <span>Google / Email</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Printer</span>
                    <span>BT / USB / WiFi</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Verifikasi</span>
                    <span>Nomor HP</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
