'use client'

import { useAppContext } from '@/context/AppContext'
import { ReactNode } from 'react'
import { PageOverlay } from './PageOverlay'

export function Main({ children }: { children: ReactNode }) {
  const { loading } = useAppContext()

  return (
    <>
      {loading && <PageOverlay />}
      {children}
    </>
  )
}
