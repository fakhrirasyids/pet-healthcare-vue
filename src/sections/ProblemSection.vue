<template>
  <section class="bg-[#0a1226] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="flex flex-col items-center text-center">
        <span class="inline-flex items-center rounded-full bg-[#10193a] px-5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/85 uppercase border border-white/10">
          {{ t('sugar.problem.kicker') }}
        </span>
        <h2 class="mt-5 font-['Volkhov'] font-bold text-white text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-[-0.01em] max-w-[640px]">
          {{ t('sugar.problem.title') }}
        </h2>
        <p class="mt-4 md:mt-5 text-white/65 text-[14px] md:text-[16px] leading-[1.6] max-w-[520px]">
          {{ t('sugar.problem.subtitle') }}
        </p>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
        <div
          v-for="card in cards"
          :key="card.key"
          class="flex flex-col"
        >
          <div class="aspect-[4/3] rounded-2xl overflow-hidden">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
          </div>
          <h3 class="mt-5 font-semibold text-white text-[16px] md:text-[17px]">{{ card.title }}</h3>
          <p class="mt-2 text-[13px] md:text-[14px] leading-[1.6] text-white/65">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import imgRegulatory from '@/assets/sugar/regulatorypressure.png'
import imgConsumer from '@/assets/sugar/consumershift.png'
import imgGrowth from '@/assets/sugar/premiumgrowth.png'

const { t } = useI18n({ useScope: 'global' })

const cards = computed(() => [
  {
    key: 'regulatory',
    title: t('sugar.problem.cards.regulatory.title'),
    desc: t('sugar.problem.cards.regulatory.desc'),
    image: imgRegulatory,
  },
  {
    key: 'consumer',
    title: t('sugar.problem.cards.consumer.title'),
    desc: t('sugar.problem.cards.consumer.desc'),
    image: imgConsumer,
  },
  {
    key: 'premium',
    title: t('sugar.problem.cards.premium.title'),
    desc: t('sugar.problem.cards.premium.desc'),
    image: imgGrowth,
  },
])
</script>
