'use client'

import { motion } from 'framer-motion'
import { Award, Crown, Medal } from 'lucide-react'
import { SectionHeading } from './section-heading'

const prizes = [
  {
    icon: Medal,
    place: '2nd Place',
    amount: '₹1,00,000',
    perks: ['Cash prize', 'Mentorship access', 'Goodie bag'],
    accent: 'border-white/15',
    order: 'lg:order-1 lg:mt-12',
  },
  {
    icon: Crown,
    place: '1st Place',
    amount: '₹2,50,000',
    perks: ['Grand cash prize', 'Incubation support', 'Internship offers', 'Winner trophy'],
    accent: 'border-gold/40 glow-cyan',
    order: 'lg:order-2',
    featured: true,
  },
  {
    icon: Award,
    place: '3rd Place',
    amount: '₹50,000',
    perks: ['Cash prize', 'Swag kit', 'Certificate'],
    accent: 'border-white/15',
    order: 'lg:order-3 lg:mt-12',
  },
]

export function Prizes() {
  return (
    <section id="prizes" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Prize Pool"
          title={
            <>
              Over <span className="gradient-text">₹5 Lakh</span> to win
            </>
          }
          description="Cash, incubation, internships, and glory. The best builds walk away with more than bragging rights."
        />

        <div className="mt-20 grid items-start gap-6 lg:grid-cols-3">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12 }}
              className={`relative flex flex-col items-center rounded-3xl border bg-card/50 p-8 text-center backdrop-blur-sm ${prize.accent} ${prize.order}`}
            >
              {prize.featured && (
                <span className="absolute -top-3 rounded-full bg-gradient-to-r from-gold to-cyan px-4 py-1 text-xs font-semibold text-navy-deep">
                  Champion
                </span>
              )}
              <div
                className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 ${
                  prize.featured ? 'bg-gold/15 text-gold' : 'bg-white/5 text-muted-foreground'
                }`}
              >
                <prize.icon className="h-8 w-8" />
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                {prize.place}
              </p>
              <p className="font-display mt-2 text-4xl font-bold gradient-text">
                {prize.amount}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {prize.perks.map((perk) => (
                  <li key={perk} className="flex items-center justify-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan" />
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
