import { coreCapabilities, solutionData } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function DataSection() {
  return (
    <section id="solution-data" className="section-padding bg-slate-100">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="SIH Submission"
            title="Solution Data"
            description="Key project information from our Smart India Hackathon 2026 submission."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal delay={100}>
            <div className="card-base lg:col-span-3">
              <div className="divide-y divide-slate-100">
                {solutionData.map((row) => (
                  <div key={row.label} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-5 sm:gap-4">
                    <dt className="text-sm font-semibold text-navy-900 sm:col-span-2">{row.label}</dt>
                    <dd className="text-sm leading-relaxed text-slate-600 sm:col-span-3">{row.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-6 text-white shadow-card lg:col-span-2">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-cyan/10 blur-2xl" />
              <h3 className="relative font-display text-lg font-bold">Core Capabilities</h3>
              <ul className="relative mt-5 space-y-3">
                {coreCapabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-cyan/20 text-xs text-accent-cyan">✓</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
