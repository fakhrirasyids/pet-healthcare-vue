<template>
  <section class="bg-[#eaf2ff] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div class="lg:col-span-7">
          <h2 class="font-['Volkhov'] font-bold text-[#0a1226] text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em]">
            {{ t('sugar.tech.title') }}
          </h2>
          <p class="mt-5 text-[14px] md:text-[15px] text-[#475467] leading-[1.7] max-w-[540px]">
            {{ t('sugar.tech.subtitle') }}
          </p>

          <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            <div v-for="feat in features" :key="feat.key" class="flex items-start gap-3">
              <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1652f0] text-white">
                <component :is="feat.icon" :size="16" stroke-width="2.4" />
              </div>
              <p class="text-[13px] md:text-[14px] font-medium text-[#0a1226] leading-snug">{{ feat.title }}</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div class="relative w-full max-w-[440px]">
            <!-- Floating brand badge -->
            <div class="absolute -left-2 md:-left-6 top-4 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.10)]">
              <span class="inline-flex items-center text-[#1652f0] text-[14px] font-bold tracking-tight">
                <span class="mr-2 grid grid-cols-3 gap-[2px]">
                  <span class="h-[3px] w-[3px] rounded-full bg-[#5cd4f5]" />
                  <span class="h-[3px] w-[3px] rounded-full bg-[#5cd4f5] opacity-70" />
                  <span class="h-[3px] w-[3px] rounded-full bg-[#5cd4f5] opacity-40" />
                  <span class="h-[3px] w-[3px] rounded-full bg-[#5cd4f5] opacity-70" />
                  <span class="h-[3px] w-[3px] rounded-full bg-[#5cd4f5]" />
                  <span class="h-[3px] w-[3px] rounded-full bg-[#5cd4f5] opacity-70" />
                </span>
                <span class="font-['Volkhov']">8iSugar</span>
              </span>
            </div>
            <img :src="imgDevice" alt="Production technology device" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Eye, Zap, Leaf } from 'lucide-vue-next'
import imgDevice from '@/assets/sugar/devices.png'

const { t } = useI18n({ useScope: 'global' })

const features = computed(() => [
  { key: 'innovation', icon: Eye, title: t('sugar.tech.features.innovation') },
  { key: 'purity', icon: Zap, title: t('sugar.tech.features.purity') },
  { key: 'green', icon: Leaf, title: t('sugar.tech.features.green') },
])
</script>
