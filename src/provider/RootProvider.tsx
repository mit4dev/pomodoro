'use client'

import { AppProgressBar } from 'next-nprogress-bar'
import { ReactNode, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

export default function RootProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense>
        <AppProgressBar />
      </Suspense>
      <Toaster toastOptions={{ duration: 5000, position: 'top-right' }} />
      <>{children}</>
    </>
  )
}
