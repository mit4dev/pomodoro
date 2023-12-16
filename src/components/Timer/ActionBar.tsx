'use client'

import { useTranslation } from 'react-i18next'

type Props = {
  onStart?: () => void
  onEnd?: () => void
}

const noop = () => null

const actions = {
  start: noop,
  stop: noop,
  reset: noop,
}
export default function ActionBar({ onEnd, onStart }: Props) {
  const { t } = useTranslation()

  return (
    <div className="flex justify-around">
      <button
        className="flex bg-sky-400 hover:bg-sky-500 active:bg-sky-600 py-4 px-8 items-center rounded-full text-white"
        onClick={onStart}
      >
        {t('start')}
      </button>
      <button
        className="bg-rose-400 hover:bg-rose-500 active:bg-rose-600 py-4 px-8 rounded-full text-white"
        onClick={onEnd}
      >
        {t('stop')}
      </button>
    </div>
  )
}
