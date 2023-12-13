import { PomodoroConfig } from '@/types'
import dayjs from 'dayjs'
import { ConfigService } from './config-service'
import { LocalStorageService } from './local-storage-service'
import { PomodoroConfigService } from './pomodoro-config-service'
import { PomodoroConfigValidatorService } from './pomodoro-config-validator-service'
import { PomodoroLayoutParserService } from './pomodoro-layout-parser-service'
import { PomodoroLayoutValidatorService } from './pomodoro-layout-validator-service'
import { PomodoroService, PomodoroServiceConfig } from './pomodoro-service'

describe('pomodoro-service', () => {
  const storage = new LocalStorageService()
  const configService = new ConfigService()
  const pomodoroLayoutValidator = new PomodoroLayoutValidatorService()
  const pomodoroConfigValidator = new PomodoroConfigValidatorService(pomodoroLayoutValidator)
  const pomodoroConfigParser = new PomodoroConfigService(configService, pomodoroConfigValidator)
  const pomodoroLayoutParserService = new PomodoroLayoutParserService()
  const serviceConfig: PomodoroServiceConfig = { storageKey: 'sample' }
  const instance = new PomodoroService(
    serviceConfig,
    storage,
    pomodoroConfigParser,
    pomodoroLayoutParserService,
    pomodoroConfigValidator,
  )

  it('calculates phase meta', () => {
    const startDate = dayjs('2023-12-15T16:00:00')
    const workDuration = 20 * 60
    const breakDuration = 5 * 60
    const meta = instance.getPhaseMeta(startDate.toDate(), workDuration, breakDuration)

    expect(meta.workStart.getMinutes()).toBe(0)
    expect(meta.workEnd.getMinutes()).toBe(20)
    expect(meta.breakStart.getMinutes()).toBe(20)
    expect(meta.breakEnd.getMinutes()).toBe(25)
  })

  it('calculates the pomodoro schedule', () => {
    const startDate = dayjs('2023-12-15T16:00:00Z')
    const pomodoroConfig: PomodoroConfig = {
      layout: 'w+s.w+l.w+s',
      work: 20 * 60,
      shortBreak: 5 * 60,
      longBreak: 15 * 60,
    }
    const schedule = instance.getSchedule(startDate.toDate(), pomodoroConfig)

    expect(schedule).toStrictEqual({})
  })

  it.todo('Resets the timer')
})
