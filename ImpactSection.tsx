import { impacts } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const icons = ['📚', '🤝', '👩‍🏫', '♿', '🔬', '💰']

export default function ImpactSection() {
  return (
    <section id="impact" className="section-padding mesh-bg">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="Outcomes"
            title="Impact & Benefits"
            description="ShikshaSetu AI aims to create meaningful change in primary education through accessible multilingual communication."
            centered
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="card-base group h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 text-xl transition-transform group-hover:scale-110">
                  {icons[i]}
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300 group-hover:w-12" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
