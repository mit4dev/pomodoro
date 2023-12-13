import { Suspense } from 'react'
import Timer from './components/Timer'

export default function Home() {
  return (
    <Suspense>
      <main className="dark:bg-slate-800 flex min-h-screen flex-col items-center justify-between p-24">
        <div className="">
          <p className="text-2xl">Welcome to pomodoro timer</p>
          <Timer />
        </div>
      </main>
    </Suspense>
  )
}
