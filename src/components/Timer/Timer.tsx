import dynamic from 'next/dynamic'
import { CircularProgress } from '../CircularProgress/CircularProgress'
import ActionBar from './ActionBar'

export type TimerProps = {
  progress: number
  onStart?: () => void
  onEnd?: () => void
}

function Timer({ progress, onStart: onStartProp, onEnd: onEndProp }: TimerProps) {
  const onStartClick = () => {
    console.log('onStartClick')
    if (typeof onStartProp === 'function') {
      onStartProp()
    }
  }

  const onEndClick = () => {
    console.log('onEndClick')
    if (typeof onEndProp === 'function') {
      onEndProp()
    }
  }

  return (
    <div className="flex flex-1 flex-col align-center justify-center">
      <CircularProgress progress={progress} />
      <div className="mt-5">
        <ActionBar onStart={onStartClick} onEnd={onEndClick} />
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Timer), { ssr: false })
