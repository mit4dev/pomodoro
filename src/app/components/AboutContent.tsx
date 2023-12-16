'use client'

import { useTranslation } from 'react-i18next'

export function AboutContent() {
  const { t } = useTranslation()

  return (
    <div id="about" className="container mx-auto ">
      <p className="text-2xl text-teal-500">{t('Welcome to pomodoro timer')}</p>
    </div>
  )
}
