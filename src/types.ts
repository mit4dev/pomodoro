export type WithVersion<T> = T & {
  $$version: number
}

export enum PomodoroBreakType {
  SHORT = 'SHORT',
  LONG = 'LONG',
}

export type PomodoroConfig = {
  layout: string
  work: number
  shortBreak: number
  longBreak: number
}

export function isPomodoroConfig(value: any): value is PomodoroConfig {
  if (typeof value?.layout !== 'string') {
    return false
  }

  const keys: (keyof PomodoroConfig)[] = ['layout', 'longBreak', 'shortBreak', 'work']
  if (keys.some((k) => !value[k])) {
    return false
  }

  return true
}

export function assertPomodoroConfig(value: any): asserts value is PomodoroConfig {
  if (!isPomodoroConfig(value)) {
    throw new Error(`Value is not a valid PomodoroConfig: ${JSON.stringify(value)}`)
  }
}
