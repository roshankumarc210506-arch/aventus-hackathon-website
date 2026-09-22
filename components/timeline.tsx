'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'

const events = [
  { time: 'Day 1 — 09:00', title: 'Check-in & Registration', desc: 'Grab your badge, swag, and find your squad.' },
  { time: 'Day 1 — 11:00', title: 'Opening Ceremony', desc: 'Keynote, track reveal, and rules of the game.' },
  { time: 'Day 1 — 12:00', title: 'Hacking Begins', desc: 'The clock starts. 36 hours on the board.' },
  { time: 'Day 1 — 18:00', title: 'Mentor Rounds', desc: 'Industry mentors help refine your build.' },
  { time: 'Day 2 — 22:00', title: 'Midnight Mini-Events', desc: 'Games, food runs, and a caffeine reset.' },
  { time: 'Day 3 — 00:00', title: 'Submissions Close', desc: 'Ship it. Final commits and demo prep.' },
  { time: 'Day 3 — 02:00', title: 'Judging & Demos', desc: 'Pitch to the panel and show what you built.' },
  { time: 'Day 3 — 05:00', title: 'Closing & Awards', desc: 'Winners crowned. Legends made.' },
]

export function Timeline() {
  return (
    <section id="timeline" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Schedule"
          title={
            <>
              36 hours, <span className="gradient-text">mapped out</span>
            </>
          }
          description="From opening keynote to the final pitch — here's how the weekend unfolds."
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-cyan via-purple to-gold sm:left-1/2" />
          <div className="space-y-10">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                }`}
              >
                <span
                  className={`absolute top-1.5 h-3 w-3 rounded-full bg-cyan ring-4 ring-cyan/20 ${
                    i % 2 === 0
                      ? 'left-[5px] sm:left-auto sm:-right-[6px]'
                      : 'left-[5px] sm:-left-[6px]'
                  }`}
                />
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                  {event.time}
                </p>
                <h3 className="font-display mt-2 text-lg font-semibold">{event.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
