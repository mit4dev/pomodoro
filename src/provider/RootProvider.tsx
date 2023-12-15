'use client'

import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { AppContextProvider } from './AppContextProvider'

export default function RootProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster toastOptions={{ duration: 5000, position: 'top-right' }} />
      <AppContextProvider>{children}</AppContextProvider>
    </>
  )
}
