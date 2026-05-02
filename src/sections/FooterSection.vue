<template>
  <footer class="bg-[#001f22] text-white">
    <div class="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        <!-- Logo + tagline -->
        <div class="lg:col-span-4">
          <button @click="emit('navigate', 'home')" class="inline-flex items-center">
            <img :src="imgLogo" alt="8iSugar" class="h-10 w-auto" />
          </button>
          <p class="mt-5 text-[13px] leading-[1.65] text-white/65 max-w-[280px]">
            {{ t('sugar.footer.tagline') }}
          </p>
        </div>

        <!-- Products -->
        <div class="lg:col-span-2">
          <h4 class="font-semibold text-[14px] mb-4">{{ t('sugar.footer.productsHeading') }}</h4>
          <ul class="flex flex-col gap-3 text-[13px] text-white/70">
            <li><button class="hover:text-white transition-colors" @click="emit('navigate', 'isomalt')">{{ t('sugar.footer.links.isomalt') }}</button></li>
            <li><button class="hover:text-white transition-colors" @click="emit('navigate', 'rebm')">{{ t('sugar.footer.links.rebm') }}</button></li>
            <li><button class="hover:text-white transition-colors" @click="emit('navigate', 'fos')">{{ t('sugar.footer.links.fos') }}</button></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="lg:col-span-2">
          <h4 class="font-semibold text-[14px] mb-4">{{ t('sugar.footer.companyHeading') }}</h4>
          <ul class="flex flex-col gap-3 text-[13px] text-white/70">
            <li><button class="hover:text-white transition-colors" @click="emit('navigate', 'about')">{{ t('sugar.footer.links.about') }}</button></li>
            <li><button class="hover:text-white transition-colors text-left">{{ t('sugar.footer.links.technology') }}</button></li>
            <li><button class="hover:text-white transition-colors text-left">{{ t('sugar.footer.links.applications') }}</button></li>
            <li><button class="hover:text-white transition-colors text-left">{{ t('sugar.footer.links.investors') }}</button></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="lg:col-span-4">
          <h4 class="font-semibold text-[14px] mb-4">{{ t('sugar.footer.contactHeading') }}</h4>
          <ul class="flex flex-col gap-3 text-[13px] text-white/70">
            <li>{{ t('sugar.footer.address') }}</li>
            <li><a href="mailto:contact@8isugar.com" class="hover:text-white transition-colors">{{ t('sugar.footer.email') }}</a></li>
            <li>{{ t('sugar.footer.phone') }}</li>
          </ul>

          <button
            class="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-[#0a1226] hover:bg-white/90 transition-colors"
            @click="emit('navigate', 'contact')"
          >
            {{ t('sugar.footer.contactSales') }}
          </button>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-white/55">
        <p>{{ t('sugar.footer.rights') }}</p>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="#" class="hover:text-white transition-colors">{{ t('sugar.footer.privacy') }}</a>
          <a href="#" class="hover:text-white transition-colors">{{ t('sugar.footer.terms') }}</a>
          <a href="#" class="hover:text-white transition-colors">{{ t('sugar.footer.legal') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import imgLogo from '@/assets/sugar/asset-logo.png'
import type { PageName } from '@/App.vue'

const { t } = useI18n({ useScope: 'global' })

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()
</script>
