import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const subsections = [
  {
    id: 'A',
    title: 'Objective',
    items: [
      'Understand communication problems caused by language differences',
      'Identify primary users',
      'Understand teacher and student requirements',
      'Explore AI for real-time translation',
      'Support mother-tongue-based learning',
      'Consider low-connectivity environments',
    ],
  },
  {
    id: 'B',
    title: 'Primary Users',
    custom: (
      <div className="mt-4 space-y-4">
        <div className="rounded-xl bg-accent-blue/5 p-4">
          <p className="font-semibold text-navy-900">Teacher</p>
          <p className="mt-1 text-sm text-slate-600">Needs simple language assistance, quick translation, voice interaction and bilingual teaching content.</p>
        </div>
        <div className="rounded-xl bg-accent-purple/5 p-4">
          <p className="font-semibold text-navy-900">Student</p>
          <p className="mt-1 text-sm text-slate-600">Needs familiar language, simple explanations, audio support and accessible educational content.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'C',
    title: 'Case Study Scenario',
    paragraph:
      "A teacher comfortable with Hindi teaches students who mainly communicate in their mother tongue. ShikshaSetu AI processes the teacher's speech and provides the translated output in the student's selected language. The student can respond in their mother tongue, and the system can translate the response back for the teacher.",
    full: true,
  },
  {
    id: 'D',
    title: 'Key Observations',
    items: ['Easy to use', 'Affordable', 'Accessible', 'Suitable for actual users', 'Reliable in low-connectivity areas', 'Suitable for classroom environments'],
  },
  {
    id: 'E',
    title: 'Learnings',
    items: [
      'Understanding the user is important before developing technology.',
      'Language can become a major barrier to effective education.',
      'AI can support accessibility as well as automation.',
      'Voice interaction can make educational technology more natural.',
      'Offline support is important for areas with limited connectivity.',
      'Solutions should be simple enough for non-technical users.',
    ],
  },
]

export default function CaseStudySection() {
  return (
    <section id="case-study" className="section-padding bg-white">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="Research"
            title="Case Study"
            description="Our case study focused on understanding the communication gap between teachers and students when they do not share the same language, and exploring how AI can support mother-tongue-based primary education."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="badge bg-navy-900 text-white">Rathinam Technical Campus, Coimbatore</span>
            <span className="badge bg-accent-blue/10 text-accent-blue">Smart Education</span>
            <span className="badge bg-accent-purple/10 text-accent-purple">Artificial Intelligence</span>
          </div>
        </Reveal>

        <div className="mt-12 space-y-5">
          {subsections.map((sub, i) => (
            <Reveal key={sub.id} delay={100 + i * 60}>
              <article className={`card-base ${sub.full ? '' : ''}`}>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple font-display text-sm font-bold text-white">
                    {sub.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-navy-900">{sub.title}</h3>
                    {sub.items && (
                      <ul className="mt-4 space-y-2">
                        {sub.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {sub.paragraph && (
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{sub.paragraph}</p>
                    )}
                    {sub.custom}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12">
            <h3 className="mb-5 font-display text-lg font-bold text-navy-900">Case Study Images</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="image-placeholder aspect-[4/3]">
                  {/* Replace with actual case study image: /public/case-study/image-{n}.jpg */}
                  <div className="text-center">
                    <p className="font-medium text-navy-900">Case Study Photo {n}</p>
                    <p className="mt-1 text-xs text-slate-400">/public/case-study/image-{n}.jpg</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
