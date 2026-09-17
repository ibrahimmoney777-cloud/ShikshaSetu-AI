interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  dark?: boolean
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p
        className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? 'text-accent-cyan' : 'text-accent-blue'
        }`}
      >
        <span className={`h-px w-8 ${dark ? 'bg-accent-cyan/50' : 'bg-accent-blue/40'}`} />
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
