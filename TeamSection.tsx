import { teamMembers } from '../data/team'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            eyebrow="People"
            title="Meet Our Team"
            description="The team behind ShikshaSetu AI — building accessible multilingual education for primary classrooms."
            centered
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 70}>
              <article
                className={`group overflow-hidden rounded-2xl border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  member.isLeader
                    ? 'border-accent-cyan/50 ring-2 ring-accent-cyan/30 ring-offset-2'
                    : 'border-slate-200/70 hover:border-accent-blue/20'
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200 sm:aspect-square">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  {member.isLeader && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent-cyan px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-900 shadow-md">
                      Team Leader
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-navy-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-blue">{member.department}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-3 inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-accent-blue"
                  >
                    <span aria-hidden="true">✉</span>
                    {member.email}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
