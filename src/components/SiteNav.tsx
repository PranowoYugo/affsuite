import { NavLink } from 'react-router'

const LINKS = [
  { to: '/', label: 'Beranda' },
  { to: '/analyzer', label: 'Analyzer' },
  { to: '/viral', label: 'Viral Finder' },
]

export default function SiteNav({ variant = 'ink' }: { variant?: 'ink' | 'terra' }) {
  const active = variant === 'ink' ? 'text-[var(--accent)]' : 'text-[#c0613d]'
  const idle =
    variant === 'ink'
      ? 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
      : 'text-[#18181b]/55 hover:text-[#18181b]'
  return (
    <nav className="flex items-center gap-1 sm:gap-2" aria-label="Menu utama">
      {LINKS.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.to === '/'}
          className={({ isActive }) =>
            `flex min-h-[44px] items-center rounded-full px-3 text-xs font-semibold transition-colors sm:text-sm ${
              isActive ? active : idle
            }`
          }
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  )
}
