<template>
  <Teleport to="body">
    <Transition name="drawer" appear @after-leave="onAfterLeave">
      <div v-if="modelValue" class="fixed inset-0 z-[200]" role="dialog" aria-modal="true">
        <div
          class="absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out"
          :class="isActive ? 'opacity-100' : 'opacity-0'"
          @click="onOverlayClick"
        />

        <div
          class="absolute left-0 top-0 h-full w-[320px] max-w-[85vw]
                 bg-[#164972] text-white shadow-2xl
                 transition-transform duration-300 ease-out will-change-transform"
          :class="panelTransformClass"
        >
          <div class="p-6 flex items-center justify-between">
            <a href="#top" class="inline-flex items-center" @click.prevent="navigate('#top')">
              <img :src="logo" :alt="t('common.logoAlt')" class="h-10 w-auto" />
            </a>

            <button class="p-2" @click="close" :aria-label="t('nav.closeMenu')">
              <XIcon :size="24" />
            </button>
          </div>

          <div class="px-6 pb-6 h-[calc(100%-88px)] flex flex-col">
            <div class="flex flex-col gap-3">
              <a
                v-for="item in items"
                :key="item.href"
                :href="item.href"
                class="text-white text-[15px] font-medium tracking-[0.2px] opacity-95 hover:opacity-80 transition-opacity"
                @click.prevent="navigate(item.href)"
              >
                {{ item.label }}
              </a>
            </div>

            <div class="my-6 h-px w-full bg-white/15" />

            <div class="relative w-full">
              <LanguageDropdown class="w-full" align="left" />
            </div>

            <div class="flex-1" />

            <div class="mt-6 text-white/60 text-xs font-['Montserrat',sans-serif]">
              © {{ new Date().getFullYear() }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { X as XIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import LanguageDropdown from '@/components/LanguageDropdown.vue'

export type NavItem = { href: string; label: string }

const props = defineProps<{
  modelValue: boolean
  items: NavItem[]
  logo: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
  (e: 'navigate', href: string): void
}>()

const { t } = useI18n({ useScope: 'global' })

const isActive = ref(false)
const isLeavingRight = ref(false)
const isTransitioning = ref(false)

function setBodyLock(locked: boolean) {
  document.documentElement.style.overflow = locked ? 'hidden' : ''
}

function close() {
  emit('update:modelValue', false)
}

function onOverlayClick() {
  if (isTransitioning.value) return
  close()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) close()
}

function navigate(href: string) {
  emit('navigate', href)
  close()
}

const panelTransformClass = computed(() => {
  if (!isActive.value) {
    return isLeavingRight.value ? 'translate-x-full' : '-translate-x-full'
  }
  return 'translate-x-0'
})

function onAfterLeave() {
  isActive.value = false
  isLeavingRight.value = false
  isTransitioning.value = false
  setBodyLock(false)
}

watch(
  () => props.modelValue,
  async (open) => {
    isTransitioning.value = true

    if (open) {
      isLeavingRight.value = false
      isActive.value = false
      setBodyLock(true)

      await nextTick()
      requestAnimationFrame(() => {
        isActive.value = true
        window.setTimeout(() => (isTransitioning.value = false), 200)
      })
    } else {
      isLeavingRight.value = true
      isActive.value = false
      window.setTimeout(() => (isTransitioning.value = false), 260)
    }
  },
  { immediate: true }
)

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  setBodyLock(false)
})
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 300ms ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
.drawer-enter-to,
.drawer-leave-from {
  opacity: 1;
}
</style>
