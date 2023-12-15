'use client'

import { useAppContext } from '@/context/AppContext'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ComputerDesktop from './ComputerDesktopIcon'
import Moon from './MoonIcon'
import Sun from './SunIcon'

type ThemeMode = 'light' | 'dark' | 'system'

const localStorageKey = 'theme'

const svgMap: Record<ThemeMode, any> = {
  dark: Moon,
  light: Sun,
  system: ComputerDesktop,
}

const defaultInitMap: Record<ThemeMode, () => void> = {
  dark: () => {
    document.documentElement.classList.add('dark')
  },
  light: () => {
    document.documentElement.classList.remove('dark')
  },
  system: () => localStorage.removeItem(localStorageKey),
}

const actionMap: Record<ThemeMode, () => void> = {
  dark: () => {
    localStorage.setItem(localStorageKey, 'dark')
    document.documentElement.classList.add('dark')
  },
  light: () => {
    localStorage.setItem(localStorageKey, 'light')
    document.documentElement.classList.remove('dark')
  },
  system: () => localStorage.removeItem(localStorageKey),
}

const nextThemeMap: Record<ThemeMode, ThemeMode> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
}

const iconColorMap: Record<ThemeMode, () => void> = {
  light: () => 'text-amber-500',
  dark: () => 'text-sky-500',
  system: () => {
    if (typeof window !== 'object') {
      return 'text-white'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'text-sky-500' : 'text-amber-500'
  },
}

const getThemeMode = (): ThemeMode => {
  if (typeof localStorage !== 'object') {
    return 'system'
  }

  if (!localStorage.getItem(localStorageKey) && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'system'
  }

  if (
    localStorage.theme === 'dark' ||
    (!(localStorageKey in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark'
  }

  if (
    localStorage.theme === 'light' ||
    (!(localStorageKey in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
  ) {
    return 'light'
  }

  return 'system'
}

function ThemeSwitcher() {
  const { t } = useTranslation()
  const [colorMode, setColorMode] = useState(() => getThemeMode())
  const { setLoading } = useAppContext()

  useEffect(() => {
    const initFn = defaultInitMap[colorMode]
    initFn()

    setTimeout(() => setLoading(false), 500)
  }, [colorMode])

  /**
   * Display dependent on the stored theme mode
   */
  const displayMode: ThemeMode = localStorage.getItem(localStorageKey) ? colorMode : 'system'

  const Svg = svgMap[displayMode]

  return (
    <div>
      <button
        className="flex gap-2 items-center justify-end"
        onClick={() => {
          const nextTheme = nextThemeMap[displayMode]
          const changeThemeFn = actionMap[nextTheme]
          changeThemeFn()
          setColorMode(nextTheme)
        }}
      >
        <Svg className={`w-5 ${iconColorMap[displayMode]()}`} />
        {t(displayMode)}
      </button>
    </div>
  )
}

export default dynamic(() => Promise.resolve(ThemeSwitcher), { ssr: false })
