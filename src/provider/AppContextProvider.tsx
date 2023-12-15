import { AppContext } from '@/context/AppContext'
import { ReactNode, useState } from 'react'

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  return <AppContext.Provider value={{ loading, setLoading }}>{children}</AppContext.Provider>
}
