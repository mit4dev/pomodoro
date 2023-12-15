import i18n, { createInstance } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'

const initI18nInstance = async () => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`../public/locales/${language}/${namespace}.json`),
      ),
    )
    .init({
      fallbackLng: 'en',
      ns: ['main'],
      defaultNS: 'main',
      debug: process.env.NODE_ENV === 'development',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      react: { useSuspense: false },
    })
  return i18nInstance
}

export async function useSSRTranslation() {
  const i18nextInstance = await initI18nInstance()
  return {
    t: i18nextInstance.t,
    i18n: i18nextInstance,
  }
}

export default i18n
