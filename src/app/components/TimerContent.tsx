'use client'

import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

const Timer = dynamic(async () => await import('../../components/Timer/Timer'), { ssr: false })

function TimerContent() {
  const { t } = useTranslation()

  return (
    <div className="h-full bg-white-50 dark:bg-slate-700">
      <div id="timer" className="container mx-auto flex flex-col items-center">
        <div className="flex flex-1 ">
          <p className="text-3xl text-slate-900 dark:text-slate-300 my-6">{t('welcome')}</p>
        </div>
        <div className="relative flex xs:w-2/3 md:w-1/2 lg:w-2/5">
          <Timer progress={0} />
        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(TimerContent), { ssr: false })
