<template>
  <section class="bg-white px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="flex flex-col items-center text-center">
        <h2 class="font-['Volkhov'] font-bold text-[#0a1226] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-[-0.01em]">
          {{ t('sugar.greenProcess.title') }}
        </h2>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <div
          v-for="card in cards"
          :key="card.key"
          class="flex flex-col items-center text-center"
        >
          <div class="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-[#f0f3fa]">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
          </div>
          <h3 class="mt-5 font-semibold text-[#0a1226] text-[16px] md:text-[17px]">{{ card.title }}</h3>
          <p class="mt-2 text-[13px] md:text-[14px] leading-[1.6] text-[#475467] max-w-[300px]">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import imgP1 from '@/assets/sugar/process1.png'
import imgP2 from '@/assets/sugar/process2.png'
import imgP3 from '@/assets/sugar/process3.png'

const { t } = useI18n({ useScope: 'global' })

const cards = computed(() => [
  {
    key: 'energy',
    title: t('sugar.greenProcess.cards.energy.title'),
    desc: t('sugar.greenProcess.cards.energy.desc'),
    image: imgP1,
  },
  {
    key: 'simplified',
    title: t('sugar.greenProcess.cards.simplified.title'),
    desc: t('sugar.greenProcess.cards.simplified.desc'),
    image: imgP2,
  },
  {
    key: 'eco',
    title: t('sugar.greenProcess.cards.eco.title'),
    desc: t('sugar.greenProcess.cards.eco.desc'),
    image: imgP3,
  },
])
</script>
