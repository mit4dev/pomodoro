'use client'

import { useTranslation } from 'react-i18next'

const noop = () => null

const actions = {
  start: noop,
  stop: noop,
  reset: noop,
}
export default function ActionBar() {
  // Action
  const { t } = useTranslation()

  return (
    <div className="">
      <button className="bg-sky-500 hover:bg-sky-700 py-2 px-4 rounded-full">{t('start')}</button>
      <button className="bg-rose-500 hover:bg-rose-700 py-2 px-4 rounded-full">{t('stop')}</button>
    </div>
  )
}
