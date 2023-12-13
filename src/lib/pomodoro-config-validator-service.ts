import { assertPomodoroConfig } from '@/types'
import { PomodoroLayoutValidatorService } from './pomodoro-layout-validator-service'

export class PomodoroConfigValidatorService {
  constructor(private readonly layoutValidator: PomodoroLayoutValidatorService) {}

  validate(config: any) {
    assertPomodoroConfig(config)
    this.layoutValidator.assertLayout(config.layout)

    return config
  }
}
