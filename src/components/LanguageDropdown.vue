<template>
  <div ref="root" class="relative" :class="externalClass">
    <button
      type="button"
      class="inline-flex items-center justify-between gap-2 rounded-full px-4 py-2 transition-colors duration-300"
      :class="[widthClass, buttonThemeClass]"
      @click="toggle"
      aria-haspopup="menu"
      :aria-expanded="open ? 'true' : 'false'"
    >
      <span class="font-sans text-sm font-semibold">{{ currentLabel }}</span>

      <svg class="h-4 w-4 opacity-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-if="open"
      class="absolute mt-2 overflow-hidden rounded-2xl border shadow-2xl"
      :class="[menuClass, menuThemeClass]"
      role="menu"
    >
      <button
        class="w-full px-4 py-2.5 text-left text-sm transition-colors"
        :class="menuItemThemeClass"
        role="menuitem"
        @click="switchTo('en')"
      >
        {{ t('lang.en') }}
      </button>

      <button
        class="w-full px-4 py-2.5 text-left text-sm transition-colors"
        :class="menuItemThemeClass"
        role="menuitem"
        @click="switchTo('id')"
      >
        {{ t('lang.id') }}
      </button>

      <button
        class="w-full px-4 py-2.5 text-left text-sm transition-colors"
        :class="menuItemThemeClass"
        role="menuitem"
        @click="switchTo('zh')"
      >
        {{ t('lang.zh') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useAttrs } from 'vue'
import { useI18n } from 'vue-i18n'
import type { SupportedLocale } from '@/i18n'
import { setLocaleRef } from '@/i18n'

const props = withDefaults(
  defineProps<{
    align?: 'left' | 'right'
    theme?: 'light' | 'dark'
  }>(),
  {
    align: 'right',
    theme: 'light',
  }
)

const attrs = useAttrs()
const root = ref<HTMLElement | null>(null)
const open = ref(false)

const { locale, t } = useI18n({ useScope: 'global' })

const externalClass = computed(() => {
  const value = attrs.class
  if (typeof value === 'string') return value
  if (Array.isArray(value)) return value.join(' ')
  return ''
})

const widthClass = computed(() => {
  return externalClass.value.includes('w-full') ? 'w-full' : ''
})

const menuClass = computed(() => {
  const width = externalClass.value.includes('w-full') ? 'w-full' : 'min-w-[140px]'
  const align = props.align === 'left' ? 'left-0' : 'right-0'
  return `${width} ${align}`
})

const current = computed(() => (locale.value || 'en') as SupportedLocale)

const currentLabel = computed(() => {
  if (current.value === 'id') return t('languageSwitcher.shortId') || 'ID'
  if (current.value === 'zh') return t('languageSwitcher.shortZh') || '中文'
  return t('languageSwitcher.shortEn') || 'EN'
})

const buttonThemeClass = computed(() =>
  props.theme === 'dark'
    ? 'border border-black/15 bg-white text-black hover:bg-black/[0.04]'
    : 'border border-white/35 bg-transparent text-white hover:bg-white/10'
)

const menuThemeClass = computed(() =>
  props.theme === 'dark'
    ? 'border-black/10 bg-white'
    : 'border-white/15 bg-[#081221]/85 backdrop-blur-md'
)

const menuItemThemeClass = computed(() =>
  props.theme === 'dark'
    ? 'text-black/90 hover:bg-black/[0.04]'
    : 'text-white/95 hover:bg-white/10'
)

function toggle() {
  open.value = !open.value
}

function switchTo(next: SupportedLocale) {
  if (next === current.value) {
    open.value = false
    return
  }

  setLocaleRef(locale as any, next)
  open.value = false
}

function onDocClick(e: MouseEvent) {
  const target = e.target as Node | null
  if (!target || !root.value) return
  if (!root.value.contains(target)) open.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick, { capture: true })
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick, { capture: true } as any)
  document.removeEventListener('keydown', onKeydown)
})
</script>