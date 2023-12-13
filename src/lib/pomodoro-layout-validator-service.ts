export class PomodoroLayoutValidatorService {
  /**
   * @example
   *
   * const r = 'w+s.w+l.l' // no match
   * const r = 'w+s.' // no match
   * const r = 'w+l.w+a' // no match
   * const r = 'w+a.w+l' // no match
   * const r = 'w+l.w+s.w+s' // match
   * const r = 'w+s.w+s.w+l' // match
   * const r = 'w+s.w+l' // match
   * const r = 'w+l.w+s' // match
   */
  private readonly layoutRegex = /^((?:\.)?(w\+[sl]))+$/

  isValidLayout(layout: string) {
    return this.layoutRegex.test(layout)
  }

  assertLayout(layout: string) {
    if (!this.isValidLayout(layout)) {
      throw new Error(`Invalid pomodoro layout ${layout}`)
    }
  }
}
