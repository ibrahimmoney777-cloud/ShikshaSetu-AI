import { navLinks } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-navy-950 pt-16 pb-8 text-slate-400">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              AI-Powered Vernacular Pedagogy and Real-Time Translation for Mother-Tongue-Based Primary Education
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Replace with official logos: /public/logos/sih.png, rathinam.png */}
              <div className="logo-placeholder h-12 w-28 border-white/20 bg-white/5 text-white/40">SIH Logo</div>
              <div className="logo-placeholder h-12 w-28 border-white/20 bg-white/5 text-white/40">Rathinam</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors hover:text-accent-cyan"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Smart India Hackathon 2026
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Problem Statement ID: <span className="text-white">SIH26042</span></li>
              <li>Theme: <span className="text-white">Smart Education</span></li>
              <li>Category: <span className="text-white">Software</span></li>
              <li className="pt-2">Rathinam Technical Campus, Coimbatore</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">© 2026 ShikshaSetu AI · Smart India Hackathon 2026</p>
          <p className="text-xs text-slate-600">Built for mother-tongue-based primary education</p>
        </div>
      </div>
    </footer>
  )
}
