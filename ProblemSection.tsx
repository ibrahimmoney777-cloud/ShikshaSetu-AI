import { problems } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding mesh-bg">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="Challenge"
            title="The Problem"
            description="In many rural and tribal educational environments, teachers and students may not share the same language. A teacher may be trained in Hindi or another commonly used language, while students may be more comfortable communicating in their mother tongue. This language difference can make it difficult for students to understand explanations, instructions and classroom content."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="card-base group relative h-full overflow-hidden">
                <span className="absolute -right-2 -top-4 font-display text-7xl font-black text-slate-100 transition-colors group-hover:text-accent-blue/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-xl">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
