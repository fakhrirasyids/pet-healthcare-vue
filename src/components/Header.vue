<template>
  <header class="fixed inset-x-0 top-0 z-[110]">
    <div
      class="transition-all duration-300 ease-out"
      :class="scrolled ? 'bg-black shadow-[0_2px_20px_rgba(0,0,0,0.4)]' : 'bg-transparent'"
    >
      <nav class="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 md:py-5">
        <div class="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          <!-- Logo -->
          <button
            class="flex items-center flex-shrink-0"
            @click="emit('navigate', 'home')"
          >
            <img
              :src="imgLogo"
              alt="GTTNano"
              class="h-9 md:h-10 w-auto"
            />
          </button>

          <!-- Desktop nav -->
          <div class="hidden lg:flex items-center gap-8 xl:gap-10">
            <button
              class="text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-200"
              :class="currentPage === 'home' ? 'text-[#009689]' : 'text-white hover:text-white/80'"
              @click="emit('navigate', 'home')"
            >
              Home
            </button>

            <button
              class="text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-200"
              :class="currentPage === 'about' ? 'text-[#009689]' : 'text-white hover:text-white/80'"
              @click="emit('navigate', 'about')"
            >
              About Company
            </button>

            <!-- Product Pipeline dropdown -->
            <div class="relative" ref="pipelineRef">
              <button
                class="flex items-center gap-1.5 text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-200"
                :class="isPipelinePage ? 'text-[#009689]' : 'text-white hover:text-white/80'"
                @click="togglePipeline"
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

              <!-- Dropdown -->
              <Transition name="dropdown">
                <div
                  v-if="pipelineOpen"
                  class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-black/8 overflow-hidden"
                >
                  <div class="p-4 grid grid-cols-2 gap-3">
                    <button
                      v-for="item in pipelineItems"
                      :key="item.page"
                      class="flex gap-3 items-start p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group"
                      @click="goToPipeline(item.page)"
                    >
                      <div class="w-16 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-black/8">
                        <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p class="font-semibold text-[13px] text-[#101828] group-hover:text-[#009689] transition-colors leading-tight">{{ item.title }}</p>
                        <p class="text-[12px] text-[#475467] mt-1 leading-snug">{{ item.desc }}</p>
                      </div>
                    </button>
                  </div>
                </div>
              </Transition>
            </div>

            <button
              class="text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-200"
              :class="currentPage === 'contact' ? 'text-[#009689]' : 'text-white hover:text-white/80'"
              @click="emit('navigate', 'contact')"
            >
              Contact Us
            </button>
          </div>

          <!-- Right side: language + hamburger -->
          <div class="flex items-center gap-3">
            <div class="hidden md:block">
              <LanguageDropdown theme="light" />
            </div>

            <button
              class="lg:hidden p-2 text-white"
              aria-label="Open navigation"
              @click="drawerOpen = true"
            >
              <MenuIcon :size="24" />
            </button>
          </div>
        </div>
      </nav>
    </div>

    <!-- Mobile drawer -->
    <MobileDrawerGtt
      v-model="drawerOpen"
      :current-page="currentPage"
      :logo="imgLogo"
      @navigate="handleMobileNav"
    />
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Menu as MenuIcon } from 'lucide-vue-next'
import LanguageDropdown from '@/components/LanguageDropdown.vue'
import MobileDrawerGtt from '@/components/MobileDrawerGtt.vue'
import imgLogo from '@/assets/gtt/09100268d4e53aba4728250212eca777cd8fb25b.png'

import heroSlide02 from '@/assets/gtt/c0ab7a1d4dda2bd0ad42477b59706868447935b6.png'
import heroSlide03 from '@/assets/gtt/96f118309c104bbe9320c0a3eec34d6a987a4d08.png'
import heroSlide04 from '@/assets/gtt/5d65a2acd9cbca36d942b6f6bd3cd48054e18b26.jpg'
import imgNext from '@/assets/gtt/9c9ace973e69ea70ca9c9ac8c5ee50d97b45ef8b.png'

import type { PageName } from '@/App.vue'

const props = defineProps<{
  currentPage: PageName
}>()

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const scrolled = ref(false)
const drawerOpen = ref(false)
const pipelineOpen = ref(false)
const pipelineRef = ref<HTMLElement | null>(null)

const isPipelinePage = computed(() =>
  ['gttn-dx', 'gttn-navi', 'gttn-tx'].includes(props.currentPage)
)

const pipelineItems = [
  {
    page: 'gttn-dx' as PageName,
    title: 'GTTN-Dx / GTTN-SCI',
    desc: 'For Cancer Early Screening and Research Use. cFDA registered and commercially available.',
    image: heroSlide02,
  },
  {
    page: 'gttn-navi' as PageName,
    title: 'GTTN-Navi',
    desc: 'For Cancer Early Screening and Research Use. cFDA registered and commercially available.',
    image: heroSlide03,
  },
  {
    page: 'gttn-tx' as PageName,
    title: 'GTTN-Tx',
    desc: 'Drug-device combination under innovative device review, projected approval by 2029.',
    image: heroSlide04,
  },
  {
    page: 'home' as PageName,
    title: 'Next in Line',
    desc: 'Lymphatic tumor navigation, CT/MRI contrast agents, and radiopharmaceutical carriers.',
    image: imgNext,
  },
]

function togglePipeline() {
  pipelineOpen.value = !pipelineOpen.value
}

function goToPipeline(page: PageName) {
  pipelineOpen.value = false
  emit('navigate', page)
}

function handleMobileNav(page: PageName) {
  drawerOpen.value = false
  emit('navigate', page)
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function onDocClick(e: MouseEvent) {
  if (pipelineRef.value && !pipelineRef.value.contains(e.target as Node)) {
    pipelineOpen.value = false
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onDocClick, { capture: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocClick, { capture: true } as any)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
</style>
