'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: 'Who can participate in AVENTUS?',
    a: 'Any student currently enrolled in an undergraduate or postgraduate program is welcome. You do not need to be a DSCE student — hackers from across the country are encouraged to apply.',
  },
  {
    q: 'Do I need a team?',
    a: 'Teams can have 2 to 4 members. You can register with your team or come solo and find teammates during our team-formation mixer before hacking begins.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No. AVENTUS is completely free to attend. Meals, snacks, swag, and a place to crash are all provided throughout the event.',
  },
  {
    q: 'What should I bring?',
    a: 'Your laptop, chargers, a valid student ID, and plenty of enthusiasm. We handle food, Wi-Fi, power, and workspace.',
  },
  {
    q: 'Do I need to be an expert coder?',
    a: 'Not at all. Hackers of every skill level are welcome. Mentors and workshops will be available throughout to help you learn and build.',
  },
  {
    q: 'What can I build?',
    a: 'Anything within your chosen track — or go with Open Innovation. Projects must be started at the event, but you can come with ideas and designs.',
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-medium sm:text-lg">{q}</span>
        <Plus
          className={`h-5 w-5 flex-shrink-0 text-cyan transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Questions"
          title={
            <>
              Frequently <span className="gradient-text">asked</span>
            </>
          }
          description="Everything you need to know before you hit register."
        />

        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
