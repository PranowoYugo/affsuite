export default function SiteFooter({ variant = 'ink' }: { variant?: 'ink' | 'terra' }) {
  const border = variant === 'terra' ? 'border-[#18181b]/10' : 'border-[var(--line)]'
  const text = variant === 'terra' ? 'text-[#18181b]/55' : 'text-[var(--ink-soft)]'
  const link = variant === 'terra' ? 'text-[#c0613d]' : 'text-[var(--accent)]'
  return (
    <footer className={`border-t ${border} py-6`}>
      <p className={`px-4 text-center text-sm ${text}`}>
        Dibuat oleh{' '}
        <a
          href="https://instagram.com/pranowoyugo"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold ${link} underline-offset-2 hover:underline`}
        >
          Pranowo Yugo
        </a>
      </p>
    </footer>
  )
}
