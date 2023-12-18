'use client'

import Timer from '@/components/Timer/Timer'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

function TimerContent() {
  const { t } = useTranslation()
  const timerIntervalRef = useRef<NodeJS.Timeout | undefined>()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    return () => {
      clearInterval(timerIntervalRef.current)
    }
  }, [])

  const onStart = () => {
    if (timerIntervalRef.current) {
      return
    }

    timerIntervalRef.current = setInterval(() => setProgress((p) => p + 0.0001), 25)
  }

  const onEnd = () => {
    clearInterval(timerIntervalRef.current)

    timerIntervalRef.current = undefined
  }

  return (
    <div className="h-full bg-white-50 dark:bg-slate-700">
      <div id="timer" className="container mx-auto flex flex-col items-center">
        <div className="flex flex-1 ">
          <p className="text-3xl text-slate-900 dark:text-slate-300 my-6">{t('welcome')}</p>
        </div>
        <div className="relative flex xs:w-2/3 md:w-1/2 lg:w-2/5">
          <Timer progress={progress} onStart={onStart} onEnd={onEnd} />
        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(TimerContent), { ssr: false })
