'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function RegisterCta() {
  return (
    <section id="register" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy p-10 text-center sm:p-16"
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan/20 blur-[100px]" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple/20 blur-[100px]" />

          <div className="relative">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
              Ready to <span className="gradient-text">build</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Spots are limited and fill fast. Lock in your seat at Bangalore&apos;s most
              electric hackathon and turn 36 hours into something legendary.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#top"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-purple px-9 py-4 text-lg font-medium text-navy-deep transition-all hover:glow-cyan"
              >
                Register Your Team
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Registrations close March 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
