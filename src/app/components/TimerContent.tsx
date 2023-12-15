'use client'

import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

const Timer = dynamic(async () => await import('../../components/Timer/Timer'), { ssr: false })

function TimerContent() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <div id="timer" className="container mx-auto flex flex-col items-center">
        <div className="flex flex-1 h-max">
          <p className="text-3xl text-slate-900 dark:text-slate-300 mt-2">{t('welcome')}</p>
        </div>
        <div className="flex xs:w-2/3 md:w-1/2 lg:w-2/5">
          <Timer progress={0} />
        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(TimerContent), { ssr: false })
