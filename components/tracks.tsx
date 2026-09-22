'use client'

import { motion } from 'framer-motion'
import { Bot, HeartPulse, Leaf, Lock, Sparkles, Wallet } from 'lucide-react'
import { SectionHeading } from './section-heading'

const tracks = [
  {
    icon: Bot,
    title: 'AI & Machine Learning',
    desc: 'Build intelligent agents, LLM apps, and models that learn and adapt.',
    color: 'cyan',
  },
  {
    icon: HeartPulse,
    title: 'HealthTech',
    desc: 'Reimagine healthcare access, diagnostics, and patient experiences.',
    color: 'purple',
  },
  {
    icon: Wallet,
    title: 'FinTech',
    desc: 'Design the future of payments, lending, and financial inclusion.',
    color: 'gold',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Engineer solutions for climate, energy, and a greener planet.',
    color: 'cyan',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    desc: 'Defend systems, secure data, and outsmart evolving threats.',
    color: 'purple',
  },
  {
    icon: Sparkles,
    title: 'Open Innovation',
    desc: 'No limits. Bring your wildest idea and make it come alive.',
    color: 'gold',
  },
]

const colorMap: Record<string, string> = {
  cyan: 'text-cyan group-hover:border-cyan/40',
  purple: 'text-purple group-hover:border-purple/40',
  gold: 'text-gold group-hover:border-gold/40',
}

export function Tracks() {
  return (
    <section id="tracks" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Problem Tracks"
          title={
            <>
              Choose your <span className="gradient-text">battlefield</span>
            </>
          }
          description="Six domains, endless possibilities. Pick a track that fires you up — or go rogue with open innovation."
        />

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 ${colorMap[track.color]}`}
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${colorMap[track.color]}`}
              >
                <track.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {track.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {track.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
