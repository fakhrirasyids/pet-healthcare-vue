<template>
  <div class="min-h-screen bg-white">
    <Header :current-page="currentPage" @navigate="navigateTo" />

    <main>
      <template v-if="currentPage === 'home'">
        <HomePage @navigate="navigateTo" />
      </template>

      <template v-else-if="currentPage === 'isomalt'">
        <IsomaltPage @navigate="navigateTo" />
      </template>

      <template v-else-if="currentPage === 'rebm'">
        <RebMPage @navigate="navigateTo" />
      </template>

      <template v-else-if="currentPage === 'fos'">
        <FosPage @navigate="navigateTo" />
      </template>

      <template v-else-if="currentPage === 'about'">
        <AboutPage @navigate="navigateTo" />
      </template>

      <template v-else-if="currentPage === 'contact'">
        <ContactPage />
      </template>
    </main>

    <CtaBanner v-if="showGlobalCta" />
    <FooterSection @navigate="navigateTo" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Header from '@/components/Header.vue'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import IsomaltPage from '@/pages/IsomaltPage.vue'
import RebMPage from '@/pages/RebMPage.vue'
import FosPage from '@/pages/FosPage.vue'
import CtaBanner from '@/sections/CtaBanner.vue'
import FooterSection from '@/sections/FooterSection.vue'

export type PageName = 'home' | 'about' | 'isomalt' | 'rebm' | 'fos' | 'contact'

const pageSlugs: Record<PageName, string> = {
  home: 'home',
  about: 'about',
  isomalt: 'isomalt',
  rebm: 'rebm',
  fos: 'fos',
  contact: 'contact',
}

const slugToPage: Record<string, PageName> = {
  home: 'home',
  about: 'about',
  'about-company': 'about',
  isomalt: 'isomalt',
  rebm: 'rebm',
  'reb-m': 'rebm',
  fos: 'fos',
  contact: 'contact',
  'contact-us': 'contact',
}

const currentPage = ref<PageName>(pageFromLocation())
const showGlobalCta = computed(() => !['about', 'contact'].includes(currentPage.value))

function navigateTo(page: PageName) {
  currentPage.value = page
  syncUrl(page)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(currentPage, () => {
  window.scrollTo({ top: 0 })
})

function pageFromLocation(): PageName {
  if (typeof window === 'undefined') return 'home'

  const hashSlug = window.location.hash.replace(/^#\/?/, '').toLowerCase()
  if (hashSlug && slugToPage[hashSlug]) return slugToPage[hashSlug]

  const pathSlug = window.location.pathname.split('/').filter(Boolean).pop()?.toLowerCase()
  if (pathSlug && slugToPage[pathSlug]) return slugToPage[pathSlug]

  return 'home'
}

function syncUrl(page: PageName) {
  if (typeof window === 'undefined') return

  const nextHash = `#${pageSlugs[page]}`
  if (window.location.hash === nextHash) return

  window.history.pushState({ page }, '', nextHash)
}

function handleHistoryChange() {
  currentPage.value = pageFromLocation()
}

onMounted(() => {
  window.addEventListener('popstate', handleHistoryChange)
  window.addEventListener('hashchange', handleHistoryChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('popstate', handleHistoryChange)
  window.removeEventListener('hashchange', handleHistoryChange)
})
</script>
