<template>
  <header class="fixed inset-x-0 top-0 z-[110]">
    <div
      class="transition-all duration-300 ease-out"
      :class="headerBg"
    >
      <nav class="px-4 md:px-8 lg:px-12 xl:px-16 py-4 md:py-5">
        <div class="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          <!-- Logo -->
          <button
            class="flex items-center flex-shrink-0"
            @click="emit('navigate', 'home')"
          >
            <img
              :src="imgLogo"
              alt="8iSugar"
              class="h-10 md:h-12 w-auto"
            />
          </button>

          <!-- Desktop nav -->
          <div class="hidden lg:flex items-center gap-8 xl:gap-10">
            <button
              class="text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-200"
              :class="navLinkClass('home')"
              @click="emit('navigate', 'home')"
            >
              {{ t('sugar.nav.home') }}
            </button>

            <button
              class="text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-200"
              :class="navLinkClass('about')"
              @click="emit('navigate', 'about')"
            >
              {{ t('sugar.nav.about') }}
            </button>

            <!-- Our Products dropdown -->
            <div class="relative" ref="productsRef">
              <button
                class="flex items-center gap-1.5 text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-200"
                :class="isProductPage ? 'text-white font-semibold' : navLinkClass('')"
                @click="toggleProducts"
              >
                {{ t('sugar.nav.products') }}
                <svg
                  class="h-4 w-4 transition-transform duration-200"
                  :class="productsOpen ? 'rotate-180' : ''"
                  viewBox="0 0 20 20" fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
                </svg>
              </button>

              <Transition name="dropdown">
                <div
                  v-if="productsOpen"
                  class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[920px] max-w-[92vw] rounded-2xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] border border-black/8 overflow-hidden"
                >
                  <div class="px-6 pt-6 pb-2">
                    <p class="font-['Volkhov'] font-bold text-[22px] text-[#101828]">{{ t('sugar.nav.products') }}</p>
                    <div class="mt-4 h-px bg-black/8" />
                  </div>
                  <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                      v-for="item in productItems"
                      :key="item.page"
                      class="flex items-start gap-4 p-4 rounded-xl border border-black/5 hover:border-[#1652f0]/30 hover:bg-[#f5f8ff] transition-colors text-left group"
                      @click="goToProduct(item.page)"
                    >
                      <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#f0f3fa]">
                        <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p class="font-semibold text-[15px] text-[#101828] group-hover:text-[#1652f0] transition-colors leading-tight">{{ item.title }}</p>
                        <p class="text-[13px] text-[#475467] mt-1.5 leading-snug">{{ item.desc }}</p>
                      </div>
                    </button>
                  </div>
                </div>
              </Transition>
            </div>

            <button
              class="text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-200"
              :class="navLinkClass('contact')"
              @click="emit('navigate', 'contact')"
            >
              {{ t('sugar.nav.contact') }}
            </button>
          </div>

          <!-- Right side: language + hamburger -->
          <div class="flex items-center gap-3">
            <div class="hidden md:block">
              <LanguageDropdown :theme="languageTheme" />
            </div>

            <button
              class="lg:hidden p-2"
              :class="iconColorClass"
              :aria-label="t('sugar.nav.openNav')"
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
import { useI18n } from 'vue-i18n'
import { Menu as MenuIcon } from 'lucide-vue-next'
import LanguageDropdown from '@/components/LanguageDropdown.vue'
import MobileDrawerGtt from '@/components/MobileDrawerGtt.vue'
import imgLogo from '@/assets/sugar/asset-logo.png'
import imgRebM from '@/assets/sugar/rebm.png'
import imgIsomalt from '@/assets/sugar/isomalt.png'
import imgFos from '@/assets/sugar/fos.png'

import type { PageName } from '@/App.vue'

const props = defineProps<{
  currentPage: PageName
}>()

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const { t } = useI18n({ useScope: 'global' })
const scrolled = ref(false)
const drawerOpen = ref(false)
const productsOpen = ref(false)
const productsRef = ref<HTMLElement | null>(null)

const isProductPage = computed(() =>
  ['isomalt', 'rebm', 'fos'].includes(props.currentPage)
)

// Pages where the page top has a dark/blue hero — header should stay transparent over it
const transparentBgPages: PageName[] = ['home', 'isomalt', 'rebm', 'fos']

const headerBg = computed(() => {
  if (scrolled.value) return 'bg-black shadow-[0_2px_20px_rgba(0,0,0,0.28)]'
  if (transparentBgPages.includes(props.currentPage)) return 'bg-transparent'
  return 'bg-black'
})

const iconColorClass = computed(() => 'text-white')
const languageTheme = computed<'light' | 'dark'>(() => 'light')

function navLinkClass(page: PageName | '') {
  const isActive = page && props.currentPage === page
  return isActive ? 'text-white font-semibold' : 'text-white/90 hover:text-white'
}

const productItems = computed(() => [
  {
    page: 'rebm' as PageName,
    title: t('sugar.products.rebm.title'),
    desc: t('sugar.products.rebm.desc'),
    image: imgRebM,
  },
  {
    page: 'isomalt' as PageName,
    title: t('sugar.products.isomalt.title'),
    desc: t('sugar.products.isomalt.desc'),
    image: imgIsomalt,
  },
  {
    page: 'fos' as PageName,
    title: t('sugar.products.fos.title'),
    desc: t('sugar.products.fos.desc'),
    image: imgFos,
  },
])

function toggleProducts() {
  productsOpen.value = !productsOpen.value
}

function goToProduct(page: PageName) {
  productsOpen.value = false
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
  if (productsRef.value && !productsRef.value.contains(e.target as Node)) {
    productsOpen.value = false
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
