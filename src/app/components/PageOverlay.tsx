import { Spinner } from '@/components/Spinner/SpinIcon'

export function PageOverlay() {
  return (
    <div className="fixed inset-0 z-20 bg-gradient-to-b from-slate-200 to-sky-300 flex items-center justify-center">
      <Spinner size="12" />
    </div>
  )
}
