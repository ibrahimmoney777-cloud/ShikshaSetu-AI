import { workflowSteps } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function WorkflowSection() {
  return (
    <section id="workflow" className="section-padding mesh-bg">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="Pipeline"
            title="How ShikshaSetu AI Works"
            description="A two-way communication bridge between teachers and students through speech recognition, AI processing, translation and text-to-speech."
            centered
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-14">
            <div className="hidden lg:absolute lg:inset-x-0 lg:top-1/2 lg:block lg:h-0.5 lg:-translate-y-1/2 lg:bg-gradient-to-r lg:from-transparent lg:via-accent-blue/30 lg:to-transparent" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:gap-2">
              {workflowSteps.map((step, i) => (
                <div key={step.label} className="relative flex flex-col items-center">
                  <div className="card-base group w-full !p-4 text-center lg:!p-3">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple text-lg text-white shadow-md transition-transform group-hover:scale-110">
                      {step.icon}
                    </div>
                    <p className="text-xs font-semibold leading-tight text-navy-900">{step.label}</p>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div className="my-2 flex items-center text-accent-cyan lg:absolute lg:-right-3 lg:top-1/2 lg:my-0 lg:-translate-y-1/2 lg:text-lg">
                      <span className="lg:hidden">↓</span>
                      <span className="hidden lg:inline">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-accent-blue/20 bg-gradient-to-br from-accent-blue/5 to-white p-6 text-center shadow-card">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue/10 text-lg">👩‍🏫</div>
              <p className="font-display font-bold text-accent-blue">Teacher → Student</p>
              <p className="mt-2 text-sm text-slate-600">Lesson delivery in the student&apos;s preferred language</p>
            </div>
            <div className="rounded-2xl border border-accent-purple/20 bg-gradient-to-br from-accent-purple/5 to-white p-6 text-center shadow-card">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-purple/10 text-lg">🎒</div>
              <p className="font-display font-bold text-accent-purple">Student → Teacher</p>
              <p className="mt-2 text-sm text-slate-600">Student responses translated back for the teacher</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
