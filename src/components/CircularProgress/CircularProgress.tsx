interface CircularProgressProps {
  progress: number
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const CircularProgress = ({ label, progress, ...props }: CircularProgressProps) => {
  const center = 100
  const r = 80
  const offset = (1 - progress) * 2 * Math.PI * r
  const dashArray = `${2 * Math.PI * r} ${offset}`

  return (
    <div className="flex items-center justify-center w-80 h-80">
      <svg width="100%" viewBox="0 0 200 200" className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="currentColor"
          stroke-width="25"
          fill="transparent"
          className="text-sky-200"
        />

        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="currentColor"
          stroke-width="30"
          fill="transparent"
          stroke-dasharray={dashArray}
          stroke-dashoffset={offset}
          className="text-sky-600 animate-pulse"
        />
      </svg>
      <span className="absolute text-5xl text-sky-900 dark:text-white">{(progress * 100).toFixed(1)}%</span>
    </div>
  )
}
