import { AboutContent } from './components/AboutContent'
import TimerContent from './components/TimerContent'

export default function Home() {
  return (
    <>
      <section className="h-screen snap-start">
        <TimerContent />
      </section>
      <section className="h-screen snap-start bg-slate-400 dark:bg-slate-700">
        <AboutContent />
      </section>
    </>
  )
}
