import Reveal from './Reveal'
import HeroMockup from './HeroMockup'

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-accent-blue/15 blur-3xl animate-pulse-soft" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-purple/15 blur-3xl animate-pulse-soft" />
      </div>

      <div className="section-container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="badge bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/20">SIH 2026</span>
                <span className="badge bg-white/5 text-slate-300 ring-1 ring-white/10">SIH26042</span>
                <span className="badge bg-accent-purple/15 text-accent-purple ring-1 ring-accent-purple/20">Smart Education</span>
                <span className="badge bg-white/5 text-slate-300 ring-1 ring-white/10">Software</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                ShikshaSetu{' '}
                <span className="gradient-text">AI</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-5 text-lg font-medium leading-snug text-accent-cyan/90 sm:text-xl">
                AI-Powered Vernacular Pedagogy and Real-Time Translation for Mother-Tongue-Based Primary Education
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
                Breaking language barriers in primary education through AI-powered multilingual communication and mother-tongue learning.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#solution" className="btn-primary">
                  Explore Solution
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#case-study"
                  className="btn-secondary !border-white/15 !bg-white/5 !text-white hover:!border-accent-cyan hover:!bg-white/10 hover:!text-accent-cyan"
                >
                  View Case Study
                </a>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-10 flex flex-wrap gap-2">
                {['Ho', 'Mundari', 'Santhali', 'Hindi'].map((lang) => (
                  <span
                    key={lang}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <HeroMockup />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
