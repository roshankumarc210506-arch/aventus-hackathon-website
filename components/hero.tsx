'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { HeroScene } from './hero-scene'
import { useMousePosition } from '@/hooks/use-mouse-position'

export function Hero() {
  const { x, y } = useMousePosition()

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div className="grid-bg pointer-events-none absolute inset-0 z-[1] opacity-30" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-navy-deep/20 via-transparent to-navy-deep" />

      <div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8"
        style={{ transform: `translate(${x * -10}px, ${y * -10}px)` }}
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              National Level Hackathon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-6xl font-bold leading-[0.9] tracking-tight sm:text-8xl lg:text-[10rem]"
          >
            <span className="gradient-text">AVENTUS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            36 hours. One mission — build what&apos;s next. Join the brightest student
            innovators at Dayananda Sagar College of Engineering for a hackathon that
            turns bold ideas into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan" />
              March 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple" />
              DSCE, Bangalore
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#register"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-purple px-8 py-3.5 font-medium text-navy-deep transition-all hover:glow-cyan"
            >
              Register Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/15 px-8 py-3.5 font-medium text-foreground transition-all hover:border-white/40 hover:bg-white/5"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-cyan"
          />
        </div>
      </motion.div>
    </section>
  )
}
