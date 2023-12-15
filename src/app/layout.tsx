import RootProvider from '@/provider/RootProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../i18n'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pomodoro Timer',
  description: 'Pomodoro timer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <RootProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </RootProvider>
      </body>
    </html>
  )
}
