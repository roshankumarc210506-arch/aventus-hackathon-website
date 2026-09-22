'use client'

import Image from 'next/image'
import { Globe, Mail, MessageCircle, Send, Share2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const socials: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: MessageCircle, href: '#', label: 'Instagram' },
  { icon: Send, href: '#', label: 'Twitter' },
  { icon: Share2, href: '#', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Mail, href: '#', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image src="/aventus-logo.jpeg" alt="AVENTUS" fill className="object-cover" />
              </span>
              <span className="font-display text-xl font-bold tracking-widest">AVENTUS</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The flagship national hackathon at Dayananda Sagar College of Engineering.
              Build the future, one commit at a time.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white ring-1 ring-white/15">
                <Image
                  src="/dsce-logo.png"
                  alt="Dayananda Sagar College of Engineering"
                  fill
                  className="object-contain p-0.5"
                />
              </span>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Dayananda Sagar</p>
                <p className="text-xs text-muted-foreground">College of Engineering, Bangalore</p>
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-cyan/40 hover:text-cyan"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 AVENTUS · Dayananda Sagar College of Engineering</p>
          <p>Made with passion by the AVENTUS team</p>
        </div>
      </div>
    </footer>
  )
}
