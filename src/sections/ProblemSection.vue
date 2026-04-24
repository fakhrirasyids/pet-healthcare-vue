<template>
  <section class="py-14 sm:py-16 lg:py-20 bg-[#0d1520]" id="about">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

      <!-- Badge + heading -->
      <div class="text-center mb-10 sm:mb-14">
        <Reveal>
          <div class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2 mb-7">
            <span class="font-sans font-semibold text-white text-xs sm:text-sm uppercase tracking-[0.18em]">
              {{ t('problem.kicker') }}
            </span>
          </div>
        </Reveal>

        <Reveal :delay="80">
          <h2 class="font-['Volkhov'] font-bold text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-[1.1] max-w-4xl mx-auto">
            {{ t('problem.title') }}
          </h2>
        </Reveal>

        <Reveal :delay="140">
          <p class="font-sans text-white/55 text-base sm:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            {{ t('problem.subtitle') }}
          </p>
        </Reveal>
      </div>

      <!-- Two images + captions -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <Reveal v-for="(card, index) in cards" :key="card.key" :delay="index * 90">
          <div>
            <div class="rounded-2xl overflow-hidden">
              <img
                :src="card.image"
                :alt="t(`problem.cards.${card.key}.title`)"
                class="w-full object-cover aspect-[16/10]"
              />
            </div>
            <div class="mt-5 px-1">
              <h3 class="font-sans font-bold text-white text-lg sm:text-xl mb-2">
                {{ t(`problem.cards.${card.key}.title`) }}
              </h3>
              <p class="font-sans text-white/55 text-sm sm:text-base leading-relaxed">
                {{ t(`problem.cards.${card.key}.desc`) }}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Reveal from '@/components/Reveal.vue'
import imgGap from '@/assets/gtt/9deba77fb43a795369da87e3f11bdd6dc6e514a8.png'
import imgLimitations from '@/assets/gtt/bf171e699b021c0fe7e276abdd920304b8ed7783.png'

const { t } = useI18n({ useScope: 'global' })

const cards = [
  { key: 'gap',         image: imgGap },
  { key: 'limitations', image: imgLimitations },
] as const
</script>
