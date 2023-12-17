'use client'

import { PageOverlay } from '@/app/components/PageOverlay'
import { useAppContext } from '@/context/AppContext'
import { ReactNode } from 'react'

export function AppOverlayProvider({ children }: { children: ReactNode }) {
  const { loading } = useAppContext()

  return (
    <>
      {loading && <PageOverlay />}
      {children}
    </>
  )
}
