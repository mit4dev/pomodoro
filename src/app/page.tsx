import { AboutContent } from './components/AboutContent'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import TimerContent from './components/TimerContent'

export default function Home() {
  return (
    <div className="h-screen snap-mandatory snap-y overflow-y-auto scroll-smooth">
      <div className="snap-start">
        <Header />
      </div>
      <main>
        <section className="h-screen snap-start">
          <TimerContent />
        </section>
        <section className="h-screen snap-start bg-slate-400 dark:bg-slate-700">
          <AboutContent />
        </section>
      </main>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  )
}
