'use client'

import { useTranslation } from 'react-i18next'

export function AboutContent() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-slate-600">
      <div id="about" className="container mx-auto ">
        <p className="text-2xl text-teal-500">{t('Welcome to pomodoro timer')}</p>
      </div>
    </div>
  )
}
