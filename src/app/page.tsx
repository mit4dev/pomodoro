import { AboutContent } from './components/AboutContent'
import TimerContent from './components/TimerContent'

export default function Home() {
  return (
    <main className="flex flex-col snap-y snap-mandatory overflow-y-scroll">
      <section className="snap-center">
        <TimerContent />
      </section>
      <section className="h-screen snap-start">
        <AboutContent />
      </section>
      <section className="h-screen snap-end">
        <AboutContent />
      </section>
      <section className="h-screen snap-end">
        <AboutContent />
      </section>
    </main>
  )
}
