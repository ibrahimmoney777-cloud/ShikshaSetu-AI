import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-navy-950/95 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between lg:h-[4.5rem]">
        <a href="#home" className="relative z-50" onClick={() => setOpen(false)}>
          <Logo dark />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-accent-cyan' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent-cyan" />
                )}
              </button>
            )
          })}
          <button onClick={() => handleNav('#solution')} className="btn-primary ml-4 !py-2.5 !text-xs">
            Explore Solution
          </button>
        </nav>

        <button
          className="relative z-50 rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />

      <nav
        className={`fixed inset-x-0 top-16 z-40 border-b border-white/10 bg-navy-950 px-4 py-6 transition-all duration-300 lg:hidden ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        {navLinks.map((link) => {
          const id = link.href.replace('#', '')
          return (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`block w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                active === id ? 'bg-accent-cyan/10 text-accent-cyan' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          )
        })}
        <button onClick={() => handleNav('#solution')} className="btn-primary mt-4 w-full">
          Explore Solution
        </button>
      </nav>
    </header>
  )
}
