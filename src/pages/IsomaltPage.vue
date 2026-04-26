<template>
  <ProductHero
    title="8isomalt"
    subtitle="Transforming commodity sucrose into functional carbohydrates"
    :bg="bgHero"
    @contact="emit('navigate', 'contact')"
  />

  <!-- Overview -->
  <section class="bg-[#eaf2ff] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div class="lg:col-span-7">
          <p class="text-[12px] font-semibold tracking-[0.04em] text-[#1652f0]">What is 8isomalt?</p>
          <h2 class="mt-3 font-['Volkhov'] font-bold text-[#0a1226] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1.2] tracking-[-0.01em]">
            Outperforms<br /> Traditional Sweeteners
          </h2>
          <p class="mt-5 text-[14px] md:text-[15px] text-[#475467] leading-[1.7] max-w-[560px]">
            Isomalt uniquely combines metabolic safety, industrial stability, and clean-label consumer acceptance. A natural, short-chain prebiotic fiber with multifunctional benefits
          </p>
        </div>
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden bg-[#f0f3fa] border border-white">
            <img :src="imgIsomalt" alt="Isomalt" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
        <div v-for="adv in advantages" :key="adv.title" class="flex flex-col">
          <div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#1652f0] text-white">
            <component :is="adv.icon" :size="16" stroke-width="2.4" />
          </div>
          <h3 class="mt-4 font-semibold text-[#0a1226] text-[15px] md:text-[16px]">{{ adv.title }}</h3>
          <ul class="mt-2 space-y-1 text-[12px] md:text-[13px] leading-[1.6] text-[#475467]">
            <li v-for="b in adv.bullets" :key="b">· {{ b }}</li>
          </ul>
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
          High-Efficiency Immobilized Enzyme Platform
        </h2>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-5 rounded-2xl overflow-hidden">
          <img :src="imgAdvantage" alt="Enzyme platform" class="w-full h-auto" />
        </div>
        <div class="lg:col-span-7 text-white space-y-7">
          <div v-for="point in points" :key="point.title">
            <h3 class="font-semibold text-[16px] md:text-[18px]">{{ point.title }}</h3>
            <p class="mt-2 text-[13px] md:text-[14px] text-white/75 leading-[1.7] max-w-[520px]">{{ point.desc }}</p>
          </div>
        </div>
      </div>

      <!-- KPI Table -->
      <div class="mt-12 md:mt-16">
        <p class="text-white/85 text-[14px] md:text-[16px] mb-4">Performance advantage over conventional processes.</p>
        <div class="overflow-x-auto rounded-2xl border border-white/10">
          <table class="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr class="bg-[#10193a]">
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">KPI</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">Industry Standard</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">8isomalt Process</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in kpiRows" :key="row.kpi" :class="i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'">
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] font-semibold text-white border-b border-white/10 last:border-b-0">{{ row.kpi }}</td>
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] text-white/75 border-b border-white/10 last:border-b-0">{{ row.industry }}</td>
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] text-white/75 border-b border-white/10 last:border-b-0">{{ row.process }}</td>
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

import bgHero from '@/assets/sugar/bg-hero-2.png'
import imgIsomalt from '@/assets/sugar/isomalt.png'
import imgAdvantage from '@/assets/sugar/coreadvantage.png'
import imgM1 from '@/assets/sugar/market1.png'
import imgM2 from '@/assets/sugar/market2.png'
import imgM3 from '@/assets/sugar/market3.png'

import type { PageName } from '@/App.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const advantages = [
  { icon: Eye, title: 'Health Advantage', bullets: ['Minimal insulin response', 'Stable blood glucose', 'Diabetic-friendly energy release'] },
  { icon: Zap, title: 'Industrial Advantage', bullets: ['Low hygroscopicity', 'Excellent heat stability', 'Stable crystallization'] },
  { icon: Leaf, title: 'Oral Health Advantage', bullets: ['Not fermented by oral bacteria', 'Prevents acid formation', 'Tooth-friendly'] },
  { icon: Settings, title: 'Clean Label Advantage', bullets: ['Derived from sucrose', 'Natural ingredient positioning', 'Strong consumer acceptance'] },
]

const points = [
  {
    title: 'High Gross Margin',
    desc: 'Commodity sugar is upgraded into high-value functional ingredients—for example, $1/kg sugar converted into isomalt sold at $8/kg with $3/kg processing cost generates $4/kg profit (~50% gross margin).',
  },
  {
    title: 'Efficient Production',
    desc: 'Optimized enzyme systems and crystallization processes enable high product yield and process efficiency.',
  },
  {
    title: 'Scalable Manufacturing',
    desc: 'Industrial processes such as concentration, crystallization, centrifugation, and drying support large-scale production capacity.',
  },
]

const kpiRows = [
  { kpi: 'Conversion Rate', industry: '~65%', process: '94–98%' },
  { kpi: 'Enzyme Reuse', industry: 'Single use', process: 'Multi-cycle' },
  { kpi: 'Operational Stability', industry: 'Low', process: 'Sustained multi-hour' },
  { kpi: 'Enzyme Cost Contribution', industry: 'High', process: 'Significantly Reduced' },
]

const marketCards = [
  { title: 'Beverage Integration', desc: 'Widely used in carbonated and ready-to-drink beverages.', image: imgM1 },
  { title: 'Food Product Use', desc: 'Applied in dairy, snacks, and functional nutrition product', image: imgM2 },
  { title: 'Pharmaceutical Formulation', desc: 'Used in sugar-free syrups and medicinal products.', image: imgM3 },
]
</script>
