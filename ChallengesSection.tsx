import { challenges } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function ChallengesSection() {
  return (
    <section id="challenges" className="section-padding bg-white">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="Roadmap"
            title="Challenges & Mitigation"
            description="Identified challenges and proposed mitigation strategies for building an educational translation platform."
            centered
          />
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
          <div className="hidden bg-navy-900 px-6 py-4 md:grid md:grid-cols-2">
            <p className="text-sm font-semibold text-white">Challenge</p>
            <p className="text-sm font-semibold text-white">Mitigation Strategy</p>
          </div>

          {challenges.map((item, i) => (
            <Reveal key={item.challenge} delay={i * 50}>
              <div className="grid border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50/80 md:grid-cols-2 md:px-6 md:py-5">
                <div className="border-b border-slate-100 px-5 py-4 md:border-0 md:px-0 md:py-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-blue md:hidden">Challenge</span>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-blue/10 text-xs font-bold text-accent-blue">
                      {i + 1}
                    </span>
                    <p className="font-semibold text-navy-900">{item.challenge}</p>
                  </div>
                </div>
                <div className="px-5 py-4 md:px-0 md:py-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-purple md:hidden">Mitigation</span>
                  <p className="text-sm leading-relaxed text-slate-600 md:pl-4">{item.mitigation}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
