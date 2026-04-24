<template>
  <Teleport to="body">
    <Transition name="drawer" appear @after-leave="onAfterLeave">
      <div v-if="modelValue" class="fixed inset-0 z-[200]" role="dialog" aria-modal="true">
        <div
          class="absolute inset-0 bg-black/60 transition-opacity duration-300 ease-out"
          :class="isActive ? 'opacity-100' : 'opacity-0'"
          @click="close"
        />

        <div
          class="absolute left-0 top-0 h-full w-[300px] max-w-[85vw]
                 bg-[#0a0a0a] text-white shadow-2xl
                 transition-transform duration-300 ease-out will-change-transform"
          :class="isActive ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="p-6 flex items-center justify-between border-b border-white/10">
            <button @click="navigate('home')">
              <img :src="logo" alt="GTTNano" class="h-9 w-auto" />
            </button>
            <button class="p-2 text-white" @click="close" aria-label="Close navigation">
              <XIcon :size="22" />
            </button>
          </div>

          <div class="px-6 py-6 flex flex-col gap-1">
            <button
              class="text-left py-3 text-[15px] font-medium transition-colors"
              :class="currentPage === 'home' ? 'text-[#009689]' : 'text-white/90 hover:text-white'"
              @click="navigate('home')"
            >Home</button>

            <button
              class="text-left py-3 text-[15px] font-medium transition-colors"
              :class="currentPage === 'about' ? 'text-[#009689]' : 'text-white/90 hover:text-white'"
              @click="navigate('about')"
            >About Company</button>

            <div>
              <button
                class="w-full text-left py-3 text-[15px] font-medium flex items-center justify-between transition-colors"
                :class="isPipelinePage ? 'text-[#009689]' : 'text-white/90 hover:text-white'"
                @click="pipelineOpen = !pipelineOpen"
              >
                Product Pipeline
                <svg
                  class="h-4 w-4 transition-transform duration-200"
                  :class="pipelineOpen ? 'rotate-180' : ''"
                  viewBox="0 0 20 20" fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
                </svg>
              </button>
              <div v-if="pipelineOpen" class="ml-4 flex flex-col gap-1 mb-2">
                <button
                  class="text-left py-2 text-[14px] transition-colors"
                  :class="currentPage === 'gttn-dx' ? 'text-[#009689]' : 'text-white/70 hover:text-white'"
                  @click="navigate('gttn-dx')"
                >GTTN-Dx / GTTN-SCI</button>
                <button
                  class="text-left py-2 text-[14px] transition-colors"
                  :class="currentPage === 'gttn-navi' ? 'text-[#009689]' : 'text-white/70 hover:text-white'"
                  @click="navigate('gttn-navi')"
                >GTTN-Navi</button>
                <button
                  class="text-left py-2 text-[14px] transition-colors"
                  :class="currentPage === 'gttn-tx' ? 'text-[#009689]' : 'text-white/70 hover:text-white'"
                  @click="navigate('gttn-tx')"
                >GTTN-Tx</button>
              </div>
            </div>

            <button
              class="text-left py-3 text-[15px] font-medium transition-colors"
              :class="currentPage === 'contact' ? 'text-[#009689]' : 'text-white/90 hover:text-white'"
              @click="navigate('contact')"
            >Contact Us</button>

            <div class="mt-4 border-t border-white/10 pt-4">
              <LanguageDropdown align="left" theme="dark" class="w-full" />
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
import LanguageDropdown from '@/components/LanguageDropdown.vue'
import type { PageName } from '@/App.vue'

const props = defineProps<{
  modelValue: boolean
  currentPage: PageName
  logo: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
  (e: 'navigate', page: PageName): void
}>()

const isActive = ref(false)
const pipelineOpen = ref(false)

const isPipelinePage = computed(() =>
  ['gttn-dx', 'gttn-navi', 'gttn-tx'].includes(props.currentPage)
)

function close() {
  emit('update:modelValue', false)
}

function navigate(page: PageName) {
  emit('navigate', page)
  close()
}

function onAfterLeave() {
  isActive.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) close()
}

watch(
  () => props.modelValue,
  async (open) => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
      await nextTick()
      requestAnimationFrame(() => { isActive.value = true })
    } else {
      isActive.value = false
      setTimeout(() => { document.documentElement.style.overflow = '' }, 300)
    }
  },
  { immediate: true }
)

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
.drawer-enter-active, .drawer-leave-active { transition: opacity 300ms ease; }
.drawer-enter-from, .drawer-leave-to { opacity: 0; }
.drawer-enter-to, .drawer-leave-from { opacity: 1; }
</style>
