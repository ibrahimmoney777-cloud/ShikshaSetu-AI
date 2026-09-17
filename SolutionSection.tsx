import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function FlowCard({
  title,
  accent,
  steps,
  emoji,
}: {
  title: string
  accent: 'blue' | 'purple'
  steps: string[]
  emoji: string
}) {
  const colors =
    accent === 'blue'
      ? { header: 'from-accent-blue to-accent-blue/80', dot: 'bg-accent-blue', ring: 'ring-accent-blue/20' }
      : { header: 'from-accent-purple to-accent-purple/80', dot: 'bg-accent-purple', ring: 'ring-accent-purple/20' }

  return (
    <div className={`card-base overflow-hidden !p-0 ring-1 ${colors.ring}`}>
      <div className={`bg-gradient-to-r ${colors.header} px-6 py-4`}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{emoji}</span>
          <h3 className="font-display text-lg font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="space-y-0 p-4">
        {steps.map((step, i) => (
          <div key={step} className="flex gap-3 py-3">
            <div className="flex flex-col items-center">
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${colors.dot} text-xs font-bold text-white`}>
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="my-1 w-px flex-1 bg-slate-200" />}
            </div>
            <p className={`pt-0.5 text-sm font-medium ${i === 0 || i === steps.length - 1 ? 'text-navy-900' : 'text-slate-600'}`}>
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SolutionSection() {
  const teacherFlow = [
    'Teacher speaks in a familiar language',
    'AI processes speech',
    'Speech is converted to text',
    'Content is translated',
    'Student receives the translated output',
  ]

  const studentFlow = [
    'Student speaks',
    'AI processes speech',
    'Speech is converted to text',
    'Content is translated',
    'Teacher receives the translated output',
  ]

  return (
    <section id="solution" className="section-padding bg-white">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="Our Approach"
            title="Our Solution"
            description="ShikshaSetu AI is an AI-powered educational solution designed to reduce the communication gap between teachers and students by supporting real-time multilingual communication and mother-tongue-based learning."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal delay={100}>
            <FlowCard title="Teacher → Student Flow" accent="blue" steps={teacherFlow} emoji="👩‍🏫" />
          </Reveal>
          <Reveal delay={200}>
            <FlowCard title="Student → Teacher Flow" accent="purple" steps={studentFlow} emoji="🎒" />
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-accent-blue/20 bg-gradient-to-r from-accent-blue/5 via-white to-accent-purple/5 p-8 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />
            <p className="relative font-display text-lg font-bold text-navy-900 sm:text-xl">
              ShikshaSetu AI is focused on the educational use case, not just general-purpose translation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
