import { features } from '../data/content'
import FeatureCard from './FeatureCard'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function FeaturesSection() {
  return (
    <section id="features" className="relative section-padding overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-blue/10 blur-3xl" />

      <div className="section-container relative">
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="Key Features"
            description="Purpose-built tools for multilingual classroom communication and mother-tongue-based learning."
            dark
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 70}>
              <FeatureCard {...feat} dark index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
