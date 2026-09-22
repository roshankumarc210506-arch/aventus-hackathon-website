import { SmoothScroll } from '@/components/smooth-scroll'
import { LoadingScreen } from '@/components/loading-screen'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Tracks } from '@/components/tracks'
import { Timeline } from '@/components/timeline'
import { Prizes } from '@/components/prizes'
import { Faq } from '@/components/faq'
import { RegisterCta } from '@/components/register-cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Prizes />
        <Faq />
        <RegisterCta />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
