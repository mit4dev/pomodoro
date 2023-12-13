import { PomodoroBreakType, PomodoroConfig } from '@/types'
import dayjs from 'dayjs'
import { LocalStorageService } from './local-storage-service'
import { PomodoroConfigService } from './pomodoro-config-service'
import { PomodoroConfigValidatorService } from './pomodoro-config-validator-service'
import { PomodoroLayoutParserService } from './pomodoro-layout-parser-service'

export type PomodoroServiceConfig = { storageKey: string }

const unit = 'seconds'

export class PomodoroService {
  constructor(
    private readonly config: PomodoroServiceConfig,
    private readonly storage: LocalStorageService,
    private readonly pomodoroConfigService: PomodoroConfigService,
    private readonly layoutParser: PomodoroLayoutParserService,
    private readonly pomodoroConfigValidator: PomodoroConfigValidatorService,
  ) {}

  private selectConfig(pomodoroConfig?: PomodoroConfig) {
    if (pomodoroConfig) {
      return this.pomodoroConfigValidator.validate(pomodoroConfig)
    }

    return this.pomodoroConfigService.getConfig()
  }

  start(from: Date, pomodoroConfig?: PomodoroConfig) {
    const { storageKey: key } = this.config
    const payload = this.getSchedule(from, pomodoroConfig)
    this.storage.set(key, payload)
  }

  getSchedule(from: Date, pomodoroConfig?: PomodoroConfig) {
    const { work, shortBreak, longBreak, layout } = this.selectConfig(pomodoroConfig)
    const breaks = this.layoutParser.parseBreaks(layout)
    const breakMap: Record<PomodoroBreakType, number> = {
      [PomodoroBreakType.SHORT]: shortBreak,
      [PomodoroBreakType.LONG]: longBreak,
    }

    const initialStartTime = dayjs(from)
    const phases = [...breaks].reduce(
      (acc, b, index) => {
        const breakTime = breakMap[b]
        const phase = {
          index,
          meta: this.getPhaseMeta(acc.previousEndTime.toDate(), work, breakTime),
        }

        return {
          previousEndTime: dayjs(phase.meta.breakEnd),
          phases: [...acc.phases, phase],
        }
      },
      { previousEndTime: dayjs(initialStartTime), phases: new Array() },
    )

    return phases
  }

  getPhaseMeta(from: Date, workTime: number, breakTime: number) {
    const workStart = dayjs(from)
    const workEnd = dayjs(workStart).add(workTime, unit)
    const breakStart = dayjs(workEnd)
    const breakEnd = dayjs(breakStart).add(breakTime, unit)

    return {
      workStart: workStart.toDate(),
      workEnd: workEnd.toDate(),
      breakStart: breakStart.toDate(),
      breakEnd: breakEnd.toDate(),
    }
  }

  end() {
    //
  }

  getNextShortBreak() {
    //
  }

  getNextLongBreak() {
    //
  }

  getStatus() {
    // running
    // stopped
    // idle
    // expired
  }
}
