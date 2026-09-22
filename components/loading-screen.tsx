'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 8) + 3
      })
    }, 90)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setDone(true), 500)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  const clamped = Math.min(progress, 100)

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-deep"
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center"
          >
            <div className="animate-float relative h-28 w-28 rounded-full">
              <div className="absolute inset-0 rounded-full glow-cyan" />
              <Image
                src="/aventus-logo.jpeg"
                alt="AVENTUS logo"
                fill
                priority
                className="rounded-full object-cover"
              />
            </div>
            <p className="font-display mt-8 text-sm uppercase tracking-[0.5em] text-cyan">
              Aventus
            </p>
          </motion.div>

          <div className="mt-10 w-56 max-w-[70vw]">
            <div className="h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan via-purple to-gold"
                style={{ width: `${clamped}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>Initializing</span>
              <span>{clamped}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
