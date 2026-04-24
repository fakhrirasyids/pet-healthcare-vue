import { createI18n } from 'vue-i18n'
import en from './messages/en.json'
import id from './messages/id.json'
import zh from './messages/zh.json'

export type SupportedLocale = 'en' | 'id' | 'zh'

const STORAGE_KEY = 'gttnano_locale'

export function getInitialLocale(): SupportedLocale {
  const stored = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null
  if (stored === 'en' || stored === 'id' || stored === 'zh') return stored

  const nav = (navigator.language || 'en').toLowerCase()
  if (nav.startsWith('id')) return 'id'
  if (nav.startsWith('zh')) return 'zh'
  return 'en'
}

export function setLocaleRef(localeRef: { value: string }, next: SupportedLocale) {
  localeRef.value = next
  localStorage.setItem(STORAGE_KEY, next)
  document.documentElement.lang = next
}

const messages = {
  en,
  id,
  zh,
} as const

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages,
})

export default i18n
