import { createContext, useContext } from 'react'

export type AppContext = {
  loading: boolean
  setLoading: (value: boolean) => void
}

export const AppContext = createContext<AppContext>({
  loading: true,
  setLoading: () => null,
})

export const useAppContext = () => {
  const ctx = useContext(AppContext)

  if (!ctx) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }

  return ctx
}
