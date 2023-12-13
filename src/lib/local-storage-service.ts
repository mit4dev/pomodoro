export class LocalStorageService {
  get<T = any>(key: string): T | null {
    try {
      return JSON.parse(localStorage.getItem(key) ?? 'null')
    } catch (error) {
      return null
    }
  }

  set<T = any>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
