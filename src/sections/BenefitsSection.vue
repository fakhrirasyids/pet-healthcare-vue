<template>
  <section class="py-14 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

      <!-- Kicker + title -->
      <div class="text-center mb-10 sm:mb-12">
        <Reveal>
          <p class="font-sans font-semibold text-[#009689] text-xs sm:text-sm uppercase tracking-[0.16em] mb-3">
            {{ t('benefits.kicker') }}
          </p>
        </Reveal>
        <Reveal :delay="80">
          <h2 class="font-['Volkhov'] font-bold text-[#101828] text-[28px] sm:text-[36px] md:text-[44px] leading-tight">
            {{ t('benefits.title') }}
          </h2>
        </Reveal>
      </div>

      <!-- 4 cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
        <Reveal v-for="(card, index) in cards" :key="card.key" :delay="index * 70">
          <div class="h-full">
            <!-- Image -->
            <div class="rounded-2xl overflow-hidden border border-[#e5e7eb] bg-white">
              <img
                :src="card.image"
                :alt="t(`benefits.cards.${card.key}.title`)"
                class="w-full object-cover"
              />
            </div>
            <!-- Text -->
            <h3 class="mt-4 font-sans font-bold text-base sm:text-lg text-[#101828]">
              {{ t(`benefits.cards.${card.key}.title`) }}
            </h3>
            <p class="mt-2 font-sans text-sm leading-relaxed text-[#6b7280]">
              {{ t(`benefits.cards.${card.key}.desc`) }}
            </p>
          </div>
        </Reveal>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Reveal from '@/components/Reveal.vue'
import imgCellSafe    from '@/assets/gtt/35999327fcc0defdd1f9062f5f916d5ec006c261.png'
import imgSystemic    from '@/assets/gtt/5875f7fc046451865a01fef1aae129afc8ea42df.png'
import imgHepatic     from '@/assets/gtt/eea520f8750b97cf13756e37128d12f89cb0692f.png'
import imgEnvironment from '@/assets/gtt/b4b52b5a9c4d381b2224cbb6179bdb94a1879290.png'

const { t } = useI18n({ useScope: 'global' })

const cards = [
  { key: 'cellSafe',    image: imgCellSafe },
  { key: 'systemic',    image: imgSystemic },
  { key: 'hepatic',     image: imgHepatic },
  { key: 'environment', image: imgEnvironment },
] as const
</script>
