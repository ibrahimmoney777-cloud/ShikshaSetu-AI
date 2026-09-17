import { useEffect, useState } from 'react'

const demos = [
  { from: 'Hindi', to: 'Ho', text: 'Teacher explains today\'s lesson...', translated: 'Translated lesson in Ho...' },
  { from: 'Hindi', to: 'Mundari', text: 'Please open your textbook...', translated: 'Translated instruction in Mundari...' },
  { from: 'Ho', to: 'Hindi', text: 'Student asks a question...', translated: 'Translated response for teacher...' },
]

export default function HeroMockup() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'input' | 'processing' | 'output'>('input')

  useEffect(() => {
    const cycle = () => {
      setPhase('input')
      setTimeout(() => setPhase('processing'), 1200)
      setTimeout(() => setPhase('output'), 2400)
      setTimeout(() => setIndex((i) => (i + 1) % demos.length), 4200)
    }
    cycle()
    const id = setInterval(cycle, 5000)
    return () => clearInterval(id)
  }, [])

  const demo = demos[index]

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 blur-2xl" />
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-800 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <div className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>
            <span className="text-xs font-medium text-slate-400">ShikshaSetu AI · Live Demo</span>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Active
            </span>
          </div>

          <div className="space-y-4 p-5 sm:p-6">
            <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
              <span className="text-xs text-slate-400">Direction</span>
              <span className="rounded-full bg-accent-cyan/10 px-3 py-0.5 text-xs font-semibold text-accent-cyan">
                {demo.from} → {demo.to}
              </span>
            </div>

            <div className="rounded-xl border border-white/10 bg-navy-900/60 p-4">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                {phase === 'output' ? 'Translated Output' : 'Voice Input'}
              </p>
              <p className="min-h-[2.5rem] font-medium text-white transition-opacity duration-500">
                {phase === 'output' ? demo.translated : demo.text}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 py-1">
              {(['input', 'processing', 'output'] as const).map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs transition-all duration-500 ${
                      phase === step
                        ? 'scale-110 bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/30'
                        : i < ['input', 'processing', 'output'].indexOf(phase)
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-white/5 text-slate-500'
                    }`}
                  >
                    {step === 'input' ? '🎤' : step === 'processing' ? '⚡' : '✓'}
                  </div>
                  {i < 2 && <div className="h-px w-6 bg-white/10 sm:w-10" />}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              {['Speech', 'Translate', 'Speak'].map((label) => (
                <div key={label} className="rounded-lg bg-white/5 py-2">
                  <p className="text-[10px] text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-4 rounded-xl border border-accent-cyan/30 bg-navy-800/95 px-4 py-3 shadow-xl backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-wider text-slate-400">Two-Way Bridge</p>
        <p className="font-display text-sm font-bold text-accent-cyan">Teacher ↔ Student</p>
      </div>

      <div className="absolute -right-3 -top-3 rounded-xl border border-accent-purple/30 bg-navy-800/95 px-3 py-2 shadow-xl backdrop-blur-md">
        <p className="text-xs font-semibold text-accent-purple">NLLB-200</p>
      </div>
    </div>
  )
}
