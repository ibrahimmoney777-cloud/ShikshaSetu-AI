import { techStack } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const categories = [
  { key: 'frontend' as const, label: 'Frontend', icon: '💻', color: 'accent-blue' },
  { key: 'backend' as const, label: 'Backend', icon: '⚙️', color: 'accent-purple' },
  { key: 'ai' as const, label: 'AI / Translation', icon: '🧠', color: 'accent-cyan' },
  { key: 'speech' as const, label: 'Speech', icon: '🎙️', color: 'emerald-500' },
  { key: 'deployment' as const, label: 'Deployment / Development', icon: '🚀', color: 'orange-500' },
]

export default function TechnologySection() {
  return (
    <section id="technology" className="section-padding bg-slate-100">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="Stack"
            title="Technology Behind ShikshaSetu AI"
            description="A modern stack combining AI translation, speech processing and responsive web technologies."
            centered
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 70}>
              <div className="card-base group h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-lg transition-transform group-hover:scale-110">
                    {cat.icon}
                  </span>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack[cat.key].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-sm font-medium text-navy-900 transition-colors hover:border-accent-blue/30 hover:bg-accent-blue/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
