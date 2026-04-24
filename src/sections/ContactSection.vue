<template>
  <footer class="bg-[#0d1a26] pt-12 pb-0" id="contact">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
        <!-- Brand -->
        <div class="md:col-span-1">
          <img :src="imgLogoLight" :alt="t('common.logoAlt')" class="h-8 w-auto mb-3" />
          <p class="font-sans text-white/55 text-sm leading-relaxed max-w-[220px]">
            {{ t('contact.subtitle') }}
          </p>
        </div>

        <!-- Products -->
        <div>
          <p class="font-sans font-semibold text-white text-sm mb-4">{{ t('contact.footer.products') }}</p>
          <ul class="space-y-2.5 text-white/55 text-sm">
            <li><span class="hover:text-white/80 cursor-pointer transition-colors">{{ t('contact.footer.links.dx') }}</span></li>
            <li><span class="hover:text-white/80 cursor-pointer transition-colors">{{ t('contact.footer.links.navi') }}</span></li>
            <li><span class="hover:text-white/80 cursor-pointer transition-colors">{{ t('contact.footer.links.tx') }}</span></li>
            <li><span class="hover:text-white/80 cursor-pointer transition-colors">{{ t('contact.footer.links.next') }}</span></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <p class="font-sans font-semibold text-white text-sm mb-4">{{ t('contact.footer.company') }}</p>
          <ul class="space-y-2.5 text-white/55 text-sm">
            <li><span class="hover:text-white/80 cursor-pointer transition-colors">{{ t('contact.footer.links.about') }}</span></li>
            <li><span class="hover:text-white/80 cursor-pointer transition-colors">{{ t('contact.footer.links.technology') }}</span></li>
            <li><span class="hover:text-white/80 cursor-pointer transition-colors">{{ t('contact.footer.links.applications') }}</span></li>
            <li><span class="hover:text-white/80 cursor-pointer transition-colors">{{ t('contact.footer.links.investors') }}</span></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <p class="font-sans font-semibold text-white text-sm mb-4">{{ t('nav.contact') }}</p>
          <ul class="space-y-2.5 text-white/55 text-sm">
            <li class="leading-relaxed">{{ t('contact.address') }}</li>
            <li><a :href="`mailto:${t('contact.email')}`" class="hover:text-white/80 transition-colors">{{ t('contact.email') }}</a></li>
            <li><a :href="`tel:${t('contact.phone')}`" class="hover:text-white/80 transition-colors">{{ t('contact.phone') }}</a></li>
            <li class="pt-1">
              <button class="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-2 text-white text-xs font-medium hover:border-white/50 hover:text-white transition-colors">
                {{ t('common.contactSales') }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white/35 text-xs">
        <p>{{ t('contact.footer.rights') }}</p>
        <div class="flex gap-5">
          <span class="hover:text-white/60 cursor-pointer transition-colors">{{ t('contact.footer.privacy') }}</span>
          <span class="hover:text-white/60 cursor-pointer transition-colors">{{ t('contact.footer.terms') }}</span>
          <span class="hover:text-white/60 cursor-pointer transition-colors">{{ t('contact.footer.legal') }}</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import imgLogoLight from '@/assets/gtt/09100268d4e53aba4728250212eca777cd8fb25b.png'

const { t } = useI18n({ useScope: 'global' })
</script>
