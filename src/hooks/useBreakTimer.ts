import { useEffect, useState } from 'react'

const defaultInterval = 1000

export function useBreakTimer({ interval: intervalProp = defaultInterval }) {
  const [timeRemaining, setTimeRemaining] = useState<undefined | number>()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {}, intervalProp)

    return () => {
      clearInterval(interval)
    }
  }, [intervalProp])

  return {
    timeRemaining,
    isActive,
  }
}
