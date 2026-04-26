<template>
  <footer class="bg-[#0a1226] text-white">
    <div class="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        <!-- Logo + tagline -->
        <div class="lg:col-span-4">
          <button @click="emit('navigate', 'home')" class="inline-flex items-center">
            <img :src="imgLogo" alt="8iSugar" class="h-7 w-auto" />
          </button>
          <p class="mt-5 text-[13px] leading-[1.65] text-white/65 max-w-[280px]">
            A Global Shift Toward Healthier Sugar Alternatives. We introduce a biocatalytic isomaltulose production technology that delivers:
          </p>
        </div>

        <!-- Products -->
        <div class="lg:col-span-2">
          <h4 class="font-semibold text-[14px] mb-4">Products</h4>
          <ul class="flex flex-col gap-3 text-[13px] text-white/70">
            <li><button class="hover:text-white transition-colors" @click="emit('navigate', 'isomalt')">Isomalt</button></li>
            <li><button class="hover:text-white transition-colors" @click="emit('navigate', 'rebm')">RebM</button></li>
            <li><button class="hover:text-white transition-colors" @click="emit('navigate', 'fos')">Fructooligosaccharides</button></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="lg:col-span-2">
          <h4 class="font-semibold text-[14px] mb-4">Company</h4>
          <ul class="flex flex-col gap-3 text-[13px] text-white/70">
            <li><button class="hover:text-white transition-colors" @click="emit('navigate', 'about')">About Us</button></li>
            <li><button class="hover:text-white transition-colors text-left">Technology Platform</button></li>
            <li><button class="hover:text-white transition-colors text-left">Applications</button></li>
            <li><button class="hover:text-white transition-colors text-left">Investors</button></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="lg:col-span-4">
          <h4 class="font-semibold text-[14px] mb-4">Contact</h4>
          <ul class="flex flex-col gap-3 text-[13px] text-white/70">
            <li>3 TAI SENG AVENUE, #04-36, TAI SENG EXCHANGE, Singapore 536465</li>
            <li><a href="mailto:contact@GTTNano.com" class="hover:text-white transition-colors">contact@GTTNano.com</a></li>
            <li>+1 (800) 555-0199</li>
          </ul>

          <button
            class="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-[#0a1226] hover:bg-white/90 transition-colors"
            @click="emit('navigate', 'contact')"
          >
            Contact Sales
          </button>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-white/55">
        <p>© 2026 8isugar company. All rights reserved.</p>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-white transition-colors">Legal</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import imgLogo from '@/assets/sugar/asset-logo.png'
import type { PageName } from '@/App.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()
</script>
