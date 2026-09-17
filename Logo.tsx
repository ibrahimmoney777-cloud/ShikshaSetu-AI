interface LogoProps {
  size?: 'sm' | 'md'
  showText?: boolean
  dark?: boolean
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
      <path
        d="M10 26c0-6 4.5-10 10-10s10 4 10 10"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M14 18h12M20 12v12" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Logo({ size = 'md', showText = true, dark = false }: LogoProps) {
  const dim = size === 'sm' ? 'h-9 w-9' : 'h-10 w-10'

  return (
    <div className="flex items-center gap-3">
      <LogoMark className={dim} />
      {showText && (
        <span className={`font-display font-bold ${size === 'sm' ? 'text-base' : 'text-lg'} ${dark ? 'text-white' : 'text-navy-900'}`}>
          ShikshaSetu <span className="gradient-text">AI</span>
        </span>
      )}
    </div>
  )
}
