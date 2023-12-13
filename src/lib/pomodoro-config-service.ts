import { ConfigService } from './config-service'
import { PomodoroConfigValidatorService } from './pomodoro-config-validator-service'

export class PomodoroConfigService {
  constructor(
    private readonly config: ConfigService,
    private readonly pomodoroConfigValidator: PomodoroConfigValidatorService,
  ) {}

  getConfig() {
    const configStr = this.config.getOrThrow('pomodoroConfig')
    const parsed = JSON.parse(configStr)
    return this.pomodoroConfigValidator.validate(parsed)
  }
}
