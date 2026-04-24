<template>
  <section class="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-[#ddeef8] via-[#e8f4fd] to-[#eef7fb]">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

      <!-- Top: text left, image right -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 sm:mb-16">

        <!-- Left: title + paragraph -->
        <div>
          <Reveal>
            <h2 class="font-['Volkhov'] font-bold text-[#101828] text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.1] mb-6">
              {{ t('showcase.title') }}
            </h2>
          </Reveal>
          <Reveal :delay="80">
            <p class="font-sans text-[#344054] text-base sm:text-lg leading-relaxed max-w-lg">
              {{ t('showcase.subtitle') }}
            </p>
          </Reveal>
        </div>

        <!-- Right: image + floating logo card -->
        <Reveal :delay="100">
          <div class="relative">
            <!-- Main image -->
            <div class="rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <img
                :src="imgMain"
                alt="GTTNano membrane targeting"
                class="w-full object-cover h-[250px]"
              />
            </div>

            <!-- Floating GTTNano card -->
            <div class="absolute -top-4 left-6 sm:left-10 bg-white rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.15)] px-4 py-3 flex items-center gap-3 min-w-[180px]">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b6fe0] to-[#5b3f99] flex items-center justify-center">
                <!-- Arrow / chevron icon -->
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="text-white">
                  <path d="M7 4L13 10L7 16" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <p class="font-sans font-bold text-[#101828] text-sm leading-tight">GTTNano</p>
                <p class="font-sans text-[#6b7280] text-[10px] uppercase tracking-[0.1em] mt-0.5">Future-Forward Innovation</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <!-- Bottom: 3 feature items -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        <Reveal v-for="(feature, index) in features" :key="feature.key" :delay="index * 80">
          <div class="flex items-center gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#3b4fa8] flex items-center justify-center shadow-[0_6px_20px_rgba(59,79,168,0.35)]">
              <component :is="feature.icon" :size="22" class="text-white" />
            </div>
            <p class="font-sans font-bold text-[#101828] text-base sm:text-lg leading-snug">
              {{ t(`showcase.cards.${feature.key}.title`) }}
            </p>
          </div>
        </Reveal>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Eye, Zap, Pencil } from 'lucide-vue-next'
import Reveal from '@/components/Reveal.vue'
import imgMain from '@/assets/gtt/32b12c09ef18531cfce00a3fe1de4fc7663db9fe.png'

const { t } = useI18n({ useScope: 'global' })

const features = [
  { key: 'detection',  icon: Eye },
  { key: 'navigation', icon: Zap },
  { key: 'delivery',   icon: Pencil },
] as const
</script>
