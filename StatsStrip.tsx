import { heroHighlights } from '../data/content'
import Reveal from './Reveal'

export default function StatsStrip() {
  return (
    <section className="relative z-10 -mt-2 border-y border-slate-200/80 bg-white shadow-sm">
      <div className="section-container py-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {heroHighlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="text-center lg:text-left">
                <p className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
