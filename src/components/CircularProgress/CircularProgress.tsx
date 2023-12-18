interface CircularProgressProps {
  progress: number
}

export const CircularProgress = ({ progress }: CircularProgressProps) => {
  const center = 100
  const r = 80
  const offset = (1 - progress) * 2 * Math.PI * r
  const dashArray = `${2 * Math.PI * r} ${offset}`

  return (
    <div className="flex flex-1 items-center justify-center">
      <svg width="100%" viewBox="0 0 200 200" className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="currentColor"
          strokeWidth="25"
          fill="transparent"
          className="text-sky-200"
        />

        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="currentColor"
          strokeWidth="30"
          fill="transparent"
          strokeDasharray={dashArray}
          strokeDashoffset={offset}
          className="text-sky-600"
        />
      </svg>
      <span className="absolute text-5xl text-sky-900 dark:text-white">{(progress * 100).toFixed(1)}%</span>
    </div>
  )
}
