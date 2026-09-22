'use client'

import { motion } from 'framer-motion'
import { Clock, Code2, Trophy, Users } from 'lucide-react'
import { SectionHeading } from './section-heading'

const stats = [
  { icon: Clock, value: '36', label: 'Hours of Building' },
  { icon: Users, value: '500+', label: 'Hackers' },
  { icon: Code2, value: '6', label: 'Problem Tracks' },
  { icon: Trophy, value: '₹5L+', label: 'In Prizes' },
]

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What is Aventus"
          title={
            <>
              Where ideas become <span className="gradient-text">reality</span>
            </>
          }
          description="AVENTUS is the flagship national hackathon hosted by Dayananda Sagar College of Engineering, Bangalore. For 36 non-stop hours, hundreds of student developers, designers, and dreamers collaborate to solve real-world problems, learn from industry mentors, and ship products that matter."
        />

        <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-cyan/30"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan/10 blur-2xl transition-all group-hover:bg-cyan/20" />
              <stat.icon className="h-6 w-6 text-cyan" />
              <p className="font-display mt-5 text-4xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
