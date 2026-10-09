import { Link } from 'react-router'
import { ArrowRight, BarChart3, Flame, MousePointerClick, Search, Wallet } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f3]">
      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center bg-[var(--ink)]">
              <BarChart3 size={16} className="text-[var(--accent)]" />
            </span>
            <h1 className="font-mono2 text-sm font-bold tracking-tight text-[var(--ink)] sm:text-base">
              AFFILIATE<span className="text-[var(--accent)]">-SUITE</span>
            </h1>
          </div>
          <SiteNav variant="ink" />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-8 sm:px-6 sm:pt-14">
        <div className="rise mb-8 sm:mb-12">
          <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
            Dua alat analisis, satu aplikasi.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            Pilih menu di bawah — SHOPEEAFF-NALYZER untuk statistik &amp; perbandingan laporan
            Shopee Affiliate, atau Cora Viral Finder untuk menemukan postingan paling viral.
            Semua diproses lokal di browser, tanpa server.
          </p>
        </div>

        <div className="rise rise-1 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Menu Analyzer */}
          <Link
            to="/analyzer"
            className="group border border-[var(--line)] bg-white p-6 transition-shadow hover:shadow-[0_12px_40px_-16px_rgba(18,20,31,0.25)] sm:p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center bg-[var(--ink)]">
              <BarChart3 size={20} className="text-[var(--accent)]" />
            </span>
            <h3 className="font-mono2 mt-5 text-base font-bold tracking-tight text-[var(--ink)] sm:text-lg">
              SHOPEEAFF<span className="text-[var(--accent)]">-NALYZER</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
              Statistik komisi &amp; klik, breakdown per jam/platform/taglink, tabel data interaktif,
              ekspor .xlsx rapi, plus perbandingan dua periode berdampingan.
            </p>
            <ul className="font-mono2 mt-4 space-y-1.5 text-[11px] text-[var(--ink-mute)]">
              <li className="flex items-center gap-2">
                <Wallet size={12} /> Komisi &amp; Klik
              </li>
              <li className="flex items-center gap-2">
                <MousePointerClick size={12} /> Bandingkan Data A vs B
              </li>
            </ul>
            <span className="mt-6 inline-flex min-h-[44px] items-center gap-2 bg-[var(--ink)] px-5 text-sm font-medium text-white transition-colors group-hover:bg-[var(--accent)]">
              Buka Analyzer <ArrowRight size={15} />
            </span>
          </Link>

          {/* Menu Viral Finder */}
          <Link
            to="/viral"
            className="group rounded-3xl border border-[#18181b]/10 bg-[#faf7f1] p-6 transition-shadow hover:shadow-[0_12px_40px_-16px_rgba(24,24,27,0.25)] sm:p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c0613d] text-[#faf7f1]">
              <Flame size={20} strokeWidth={2} />
            </span>
            <h3 className="font-display mt-5 text-xl font-bold text-[#18181b] sm:text-2xl">
              Cora Viral Finder
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#18181b]/55">
              Unggah file Excel data postingan Facebook — lihat grid postingan dengan skor viral,
              pencarian, filter, sorting, dan ekspor CSV.
            </p>
            <ul className="mt-4 space-y-1.5 text-[13px] font-medium text-[#18181b]/45">
              <li className="flex items-center gap-2">
                <Search size={13} /> Cari, filter &amp; urutkan
              </li>
              <li className="flex items-center gap-2">
                <Flame size={13} /> Skor viral otomatis
              </li>
            </ul>
            <span className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#c0613d] px-5 text-sm font-semibold text-[#faf7f1] transition-colors group-hover:bg-[#a94f30]">
              Buka Viral Finder <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
