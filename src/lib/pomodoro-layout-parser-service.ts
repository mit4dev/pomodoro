import { PomodoroBreakType } from '@/types'

export class PomodoroLayoutParserService {
  parseBreaks(layout: string): PomodoroBreakType[] {
    const phases = layout.split('.')
    const tokens = phases.flatMap((p) => p.split('+').pop()!)

    return tokens.map(this.mapBreakTokenToBreakType)
  }

  private mapBreakTokenToBreakType(token: string) {
    switch (token) {
      case 's':
        return PomodoroBreakType.SHORT
      case 'l':
        return PomodoroBreakType.LONG
      default:
        throw new Error(`Unknown break token ${token}`)
    }
  }
}
