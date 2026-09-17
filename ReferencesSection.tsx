import { references } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function ReferencesSection() {
  return (
    <section id="references" className="section-padding bg-slate-100">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="Sources"
            title="References"
            description="Resources and research that inform our approach to vernacular pedagogy and multilingual education."
            centered
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {references.map((ref, i) => (
              <a
                key={ref.name}
                href={ref.url}
                className="card-base group flex items-center gap-4 !py-5"
                title="URL placeholder — replace with actual link"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-lg transition-transform group-hover:scale-110">
                  {['📋', '📖', '📄', '🔗'][i]}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display font-bold text-navy-900 group-hover:text-accent-blue">{ref.name}</p>
                  <p className="mt-0.5 truncate text-xs text-slate-400">Link placeholder — update URL</p>
                </div>
                <span className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-accent-blue">→</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
