'use client'

import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="flex h-12 bg-sky-800 dark:bg-slate-950">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-10">
          <a className="text-white" href="#timer">
            {t('timer')}
          </a>
          <a className="text-white" href="#about">
            {t('about')}
          </a>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
