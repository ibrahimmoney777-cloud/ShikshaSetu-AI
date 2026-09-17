import { prototypeFeatures } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const prototypeSlots = [
  { id: 'live-translation', label: 'Multilingual Live Translation', icon: '🌐' },
  { id: 'listening-mode', label: 'Listening Mode', icon: '👂' },
  { id: 'remote-comm', label: 'Remote Communication', icon: '📡' },
  { id: 'speech-processing', label: 'Real-Time Speech Processing', icon: '⚡' },
]

export default function PrototypeSection() {
  return (
    <section id="prototype" className="section-padding bg-slate-100">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="Product"
            title="Explore ShikshaSetu AI"
            description="A preview of our prototype capabilities for multilingual classroom communication and mother-tongue learning."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {prototypeSlots.map((slot, i) => (
            <Reveal key={slot.id} delay={i * 90}>
              <div className="card-base group overflow-hidden !p-0">
                {/* Replace with actual prototype image: /public/prototype/{slot.id}.png */}
                <div className="image-placeholder relative aspect-[16/10] rounded-none border-0 border-b border-dashed border-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-900/5 to-accent-blue/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative text-center">
                    <span className="mb-3 inline-block text-4xl">{slot.icon}</span>
                    <p className="font-display font-semibold text-navy-900">{slot.label}</p>
                    <p className="mt-2 text-xs text-slate-400">/public/prototype/{slot.id}.png</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="font-display font-bold text-navy-900">{slot.label}</h3>
                  <span className="rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue opacity-0 transition-opacity group-hover:opacity-100">
                    View →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <h3 className="font-display text-lg font-bold text-navy-900">Educational Capabilities</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {prototypeFeatures.slice(4).map((feat) => (
                <span
                  key={feat}
                  className="rounded-full border border-accent-blue/15 bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:border-accent-blue/30"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
