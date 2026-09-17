import { languages } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function LanguageSection() {
  return (
    <section id="languages" className="relative section-padding overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent-purple/10 blur-3xl" />
      </div>

      <div className="section-container relative">
        <Reveal>
          <SectionHeader
            eyebrow="Inclusion"
            title="Designed for Low-Resource Languages"
            description="ShikshaSetu AI focuses on supporting students who may use regional or tribal languages that have fewer digital language resources."
            dark
            centered
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {languages.map((lang, i) => (
              <div
                key={lang}
                className="group relative rounded-2xl border border-white/10 bg-white/5 px-10 py-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-accent-cyan/40 hover:shadow-glow"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="font-display text-3xl font-bold text-white">{lang}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">Target Language</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
