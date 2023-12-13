type ConfigKey = 'pomodoroConfig'

const configMap: Record<ConfigKey, string | undefined> = {
  pomodoroConfig: process.env['NEXT_PUBLIC_POMODORO_LAYOUT'],
}

export class ConfigService {
  get(key: ConfigKey) {
    return configMap[key]
  }

  getOrThrow(key: ConfigKey): string {
    const value = this.get(key)

    if (!value) {
      throw new Error(`Config value not found for the key '${key}'`)
    }

    return value
  }
}
