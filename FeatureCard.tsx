interface FeatureCardProps {
  title: string
  description: string
  icon?: string
  dark?: boolean
  index?: number
}

const lightAccents = [
  { bg: 'from-accent-blue/10 to-accent-blue/5', border: 'border-accent-blue/30' },
  { bg: 'from-accent-purple/10 to-accent-purple/5', border: 'border-accent-purple/30' },
  { bg: 'from-accent-cyan/10 to-accent-cyan/5', border: 'border-accent-cyan/30' },
]

export default function FeatureCard({ title, description, icon, dark = false, index = 0 }: FeatureCardProps) {
  if (dark) {
    return (
      <article className="card-dark group h-full">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="font-display text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
        <div className="mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 transition-opacity group-hover:opacity-100" />
      </article>
    )
  }

  const accent = lightAccents[index % lightAccents.length]

  return (
    <article className={`card-base group h-full border-t-4 ${accent.border}`}>
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-2xl transition-transform duration-300 group-hover:scale-110 ${accent.bg}`}>
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  )
}
