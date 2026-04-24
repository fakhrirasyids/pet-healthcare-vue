<template>
  <div class="min-h-screen" :class="currentPage === 'about' || currentPage === 'contact' ? 'bg-black' : 'bg-white'">
    <Header
      :current-page="currentPage"
      @navigate="navigateTo"
    />

    <main>
      <template v-if="currentPage === 'home'">
        <HeroSection @navigate="navigateTo" />
        <ProblemSection />
        <ImageShowcaseSection />
        <HardwareSection />
        <BenefitsSection />
        <OneHealthSection />
        <SoftwareSection @navigate="navigateTo" />
        <CtaSection />
        <ContactSection />
      </template>

      <template v-else-if="currentPage === 'gttn-dx'">
        <GttnDxPage />
        <ContactSection />
      </template>

      <template v-else-if="currentPage === 'gttn-navi'">
        <GttnNaviPage />
        <ContactSection />
      </template>

      <template v-else-if="currentPage === 'gttn-tx'">
        <GttnTxPage />
        <ContactSection />
      </template>

      <template v-else-if="currentPage === 'about'">
        <div class="pt-32 pb-20 min-h-screen bg-black flex items-center justify-center text-center">
          <div>
            <h1 class="font-['Volkhov'] font-bold text-4xl text-white mb-4">About Company</h1>
            <p class="text-white/50 text-lg">Coming soon.</p>
          </div>
        </div>
      </template>

      <template v-else-if="currentPage === 'contact'">
        <div class="bg-black pt-32">
          <ContactSection />
        </div>
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Header from '@/components/Header.vue'
import HeroSection from '@/sections/HeroSection.vue'
import ProblemSection from '@/sections/ProblemSection.vue'
import ImageShowcaseSection from '@/sections/ImageShowcaseSection.vue'
import HardwareSection from '@/sections/HardwareSection.vue'
import BenefitsSection from '@/sections/BenefitsSection.vue'
import OneHealthSection from '@/sections/OneHealthSection.vue'
import SoftwareSection from '@/sections/SoftwareSection.vue'
import CtaSection from '@/sections/CtaSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import GttnDxPage from '@/pages/GttnDxPage.vue'
import GttnNaviPage from '@/pages/GttnNaviPage.vue'
import GttnTxPage from '@/pages/GttnTxPage.vue'

export type PageName = 'home' | 'about' | 'gttn-dx' | 'gttn-navi' | 'gttn-tx' | 'contact'

const currentPage = ref<PageName>('home')

function navigateTo(page: PageName) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(currentPage, () => {
  window.scrollTo({ top: 0 })
})
</script>
