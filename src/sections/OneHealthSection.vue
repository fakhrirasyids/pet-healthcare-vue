<template>
  <section class="py-14 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

      <!-- Pill badge + title centered -->
      <div class="text-center mb-12 sm:mb-16">
        <Reveal>
          <div class="inline-flex items-center justify-center rounded-full border border-[#101828]/20 px-5 py-2 mb-7">
            <span class="font-sans font-semibold text-[#101828] text-xs sm:text-sm uppercase tracking-[0.18em]">
              {{ t('oneHealth.kicker') }}
            </span>
          </div>
        </Reveal>
        <Reveal :delay="80">
          <h2 class="font-['Volkhov'] font-bold text-[#101828] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-[1.1]">
            {{ t('oneHealth.title') }}
          </h2>
        </Reveal>
      </div>

      <!-- Left image + right feature list -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <!-- Left: circular AI diagram -->
        <Reveal>
          <div class="flex justify-center">
            <img
              :src="imgAi"
              alt="AI-native nano-biosynthesis"
              class="w-full max-w-[420px] object-contain"
            />
          </div>
        </Reveal>

        <!-- Right: 3 feature items -->
        <div class="space-y-8 sm:space-y-10">
          <Reveal v-for="(item, index) in items" :key="item.key" :delay="index * 90">
            <div class="flex gap-4 sm:gap-5 items-start">
              <div class="flex-shrink-0 h-11 w-11 rounded-2xl bg-[#3b4fa8] flex items-center justify-center shadow-[0_6px_20px_rgba(59,79,168,0.3)]">
                <component :is="item.icon" :size="20" class="text-white" />
              </div>
              <div>
                <h3 class="font-sans font-bold text-[#101828] text-base sm:text-lg">
                  {{ t(`oneHealth.cards.${item.key}.title`) }}
                </h3>
                <p class="mt-1.5 font-sans text-sm sm:text-base leading-relaxed text-[#6b7280]">
                  {{ t(`oneHealth.cards.${item.key}.desc`) }}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Eye, Zap, Pencil } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import Reveal from '@/components/Reveal.vue'
import imgAi from '@/assets/gtt/729d59720aad77cc2f6c809c105acaea0ca5c747.png'

const { t } = useI18n({ useScope: 'global' })

const items = [
  { key: 'omics',      icon: Eye },
  { key: 'generative', icon: Zap },
  { key: 'dimension',  icon: Pencil },
] as const
</script>
