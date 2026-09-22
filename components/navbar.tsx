'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-4 transition-all duration-300 sm:px-8 ${
          scrolled
            ? 'mt-3 rounded-2xl border border-white/10 bg-navy/70 backdrop-blur-xl md:mx-6'
            : 'bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/15">
            <Image src="/aventus-logo.jpeg" alt="AVENTUS" fill className="object-cover" />
          </span>
          <span className="font-display text-lg font-bold tracking-widest">AVENTUS</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#register"
            className="rounded-full border border-cyan/40 bg-cyan/10 px-5 py-2 text-sm font-medium text-cyan transition-all hover:glow-cyan hover:bg-cyan/20"
          >
            Register
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy/95 p-4 backdrop-blur-xl md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-cyan/15 px-4 py-3 text-center text-sm font-medium text-cyan"
          >
            Register
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
