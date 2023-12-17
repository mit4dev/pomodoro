import RootProvider from '@/provider/RootProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../i18n'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pomodoro Timer',
  description: 'Pomodoro timer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProvider>
          <div className="h-screen snap-mandatory snap-y overflow-y-auto scroll-smooth">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </RootProvider>
      </body>
    </html>
  )
}
