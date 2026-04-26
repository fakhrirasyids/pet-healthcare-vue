import { createI18n } from 'vue-i18n'
import en from './messages/en.json'
import id from './messages/id.json'
import zh from './messages/zh.json'

export type SupportedLocale = 'en' | 'id' | 'zh'

const STORAGE_KEY = 'gttnano_locale'
const initialLocale = getInitialLocale()

export function getInitialLocale(): SupportedLocale {
  const stored = safeStorageGet() as SupportedLocale | null
  if (stored === 'en' || stored === 'id' || stored === 'zh') return stored

  const nav = (navigator.language || 'en').toLowerCase()
  if (nav.startsWith('id')) return 'id'
  if (nav.startsWith('zh')) return 'zh'
  return 'en'
}

export function setLocaleRef(localeRef: { value: string }, next: SupportedLocale) {
  localeRef.value = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Storage can be unavailable in private or embedded browser contexts.
  }
  document.documentElement.lang = next
}

function safeStorageGet() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

const messages = {
  en,
  id,
  zh,
} as const

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages,
})

document.documentElement.lang = initialLocale

export default i18n
