<template>
  <ProductHero
    title="REB M"
    subtitle="Transforming abundant Reb A into premium Reb M through biotechnology"
    :bg="bgHero"
    @contact="emit('navigate', 'contact')"
  />

  <!-- Overview -->
  <section class="bg-[#eaf2ff] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div class="lg:col-span-7">
          <p class="text-[12px] font-semibold tracking-[0.04em] text-[#1652f0]">What is Reb M?</p>
          <h2 class="mt-3 font-['Volkhov'] font-bold text-[#0a1226] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1.2] tracking-[-0.01em]">
            Enzymatic Conversion<br /> Unlocks Scalable Production
          </h2>
          <p class="mt-5 text-[14px] md:text-[15px] text-[#475467] leading-[1.7] max-w-[540px]">
            Transforming abundant Reb A into premium Reb M through biotechnoloy
          </p>
        </div>
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden bg-[#9fdfdc]">
            <img :src="imgRebM" alt="Reb M" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
        <div v-for="adv in features" :key="adv.title" class="flex flex-col">
          <div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#312e81] text-white">
            <component :is="adv.icon" :size="16" stroke-width="2.4" />
          </div>
          <h3 class="mt-4 font-semibold text-[#0a1226] text-[15px] md:text-[16px]">{{ adv.title }}</h3>
          <p class="mt-2 text-[13px] leading-[1.65] text-[#475467] max-w-[260px]">{{ adv.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Core advantage -->
  <section class="bg-[#0a1226] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="flex flex-col items-center text-center">
        <span class="inline-flex items-center rounded-full bg-[#10193a] px-5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/85 uppercase border border-white/10">
          Core Advantage
        </span>
        <h2 class="mt-5 font-['Volkhov'] font-bold text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-[-0.01em] max-w-[820px]">
          Why Reb M is Important &amp; Cost Effective
        </h2>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-5 rounded-2xl overflow-hidden">
          <img :src="imgAdvantage" alt="Production system" class="w-full h-auto" />
        </div>
        <div class="lg:col-span-7 text-white space-y-7">
          <div v-for="point in points" :key="point.title">
            <h3 class="font-semibold text-[16px] md:text-[18px]">{{ point.title }}</h3>
            <p class="mt-2 text-[13px] md:text-[14px] text-white/75 leading-[1.7] max-w-[520px]">{{ point.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Cost table -->
      <div class="mt-12 md:mt-16">
        <p class="text-white/85 text-[14px] md:text-[16px] mb-4">Traditional stevia components such as Reb A have a bitter aftertaste.</p>
        <div class="overflow-x-auto rounded-2xl border border-white/10">
          <table class="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr class="bg-[#10193a]">
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">Item</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">Share</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">Saving</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">Total Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in costRows" :key="row.item" :class="i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'">
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] font-semibold text-white border-b border-white/10 last:border-b-0">{{ row.item }}</td>
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] text-white/75 border-b border-white/10 last:border-b-0">{{ row.share }}</td>
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] text-white/75 border-b border-white/10 last:border-b-0">{{ row.saving }}</td>
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] text-white/75 border-b border-white/10 last:border-b-0">{{ row.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <MarketChannelsSection :cards="marketCards" />
</template>

<script setup lang="ts">
import { Eye, Zap, Leaf, Settings } from 'lucide-vue-next'
import ProductHero from '@/sections/ProductHero.vue'
import MarketChannelsSection from '@/sections/MarketChannelsSection.vue'

import bgHero from '@/assets/sugar/bg-hero-4.png'
import imgRebM from '@/assets/sugar/rebm.png'
import imgAdvantage from '@/assets/sugar/coreadvantage.png'
import imgM1 from '@/assets/sugar/market1.png'
import imgM2 from '@/assets/sugar/market2.png'
import imgM3 from '@/assets/sugar/market3.png'

import type { PageName } from '@/App.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const features = [
  { icon: Eye, title: 'Reb A Conversion Strategy', desc: 'Abundant and low-cost Reb A is enzymatically converted into high-value Reb M through targeted glycosylation.' },
  { icon: Zap, title: 'Controlled Production System', desc: 'Biocatalytic processes enable precise control over reaction conditions, ensuring consistent product quality.' },
  { icon: Leaf, title: 'Scalable Biotech Approach', desc: 'Production is decoupled from agricultural limitations, enabling industrial-scale manufacturing.' },
  { icon: Settings, title: 'Cost-Efficient Output', desc: 'High conversion efficiency and optimized inputs significantly reduce cost per unit of Reb M.' },
]

const points = [
  {
    title: 'Low-Cost Raw Material',
    desc: 'Reb A is significantly cheaper and more abundant than Reb M. This makes it an ideal substrate for large-scale conversion.',
  },
  {
    title: 'Efficient Conversion Yield',
    desc: 'High conversion rates (>80–97%) maximize production output. This allows more Reb M to be produced from the same input volume.',
  },
  {
    title: 'Lower Processing Cost',
    desc: 'Simplified purification reduces downstream operational expenses. Fewer impurities lead to less complex separation and lower energy usage.',
  },
]

const costRows = [
  { item: 'Evaporation', share: '15%', saving: '70%', total: '10.5%' },
  { item: 'Waste', share: '10%', saving: '80%', total: '8%' },
  { item: 'Equipment', share: '10%', saving: '40%', total: '4%' },
  { item: 'Yield gain', share: '10%', saving: '40%', total: '3%' },
  { item: 'Labor', share: '10%', saving: '20%', total: '1.6%' },
]

const marketCards = [
  { title: 'Beverage Integration', desc: 'Widely used in carbonated and ready-to-drink beverages.', image: imgM1 },
  { title: 'Food Product Use', desc: 'Applied in dairy, snacks, and functional nutrition product', image: imgM2 },
  { title: 'Pharmaceutical Formulation', desc: 'Used in sugar-free syrups and medicinal products.', image: imgM3 },
]
</script>
