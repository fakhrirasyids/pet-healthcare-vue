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
        <div class="pt-32 pb-20 min-h-screen bg-[#0b1426] flex items-center justify-center text-center px-6">
          <div>
            <h1 class="font-['Volkhov'] font-bold text-3xl md:text-5xl text-white mb-4">About Company</h1>
            <p class="text-white/60 text-base md:text-lg">Coming soon.</p>
          </div>
        </div>
      </template>

      <template v-else-if="currentPage === 'contact'">
        <div class="pt-32 pb-20 min-h-screen bg-[#0b1426] flex items-center justify-center text-center px-6">
          <div>
            <h1 class="font-['Volkhov'] font-bold text-3xl md:text-5xl text-white mb-4">Contact Us</h1>
            <p class="text-white/60 text-base md:text-lg">Reach us via the footer details below.</p>
          </div>
        </div>
      </template>
    </main>

    <CtaBanner />
    <FooterSection @navigate="navigateTo" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Header from '@/components/Header.vue'
import HomePage from '@/pages/HomePage.vue'
import IsomaltPage from '@/pages/IsomaltPage.vue'
import RebMPage from '@/pages/RebMPage.vue'
import FosPage from '@/pages/FosPage.vue'
import CtaBanner from '@/sections/CtaBanner.vue'
import FooterSection from '@/sections/FooterSection.vue'

export type PageName = 'home' | 'about' | 'isomalt' | 'rebm' | 'fos' | 'contact'

const currentPage = ref<PageName>('home')

function navigateTo(page: PageName) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(currentPage, () => {
  window.scrollTo({ top: 0 })
})
</script>
