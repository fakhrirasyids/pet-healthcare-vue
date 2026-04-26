<template>
  <ProductHero
    title="Fructooligosaccharides (FOS)"
    subtitle="Transforming commodity sucrose into functional carbohydrates"
    :bg="bgHero"
    @contact="emit('navigate', 'contact')"
  />

  <!-- Overview -->
  <section class="bg-[#eaf2ff] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div class="lg:col-span-7">
          <p class="text-[12px] font-semibold tracking-[0.04em] text-[#1652f0]">What is Fructooligosaccharides (FOS)?</p>
          <h2 class="mt-3 font-['Volkhov'] font-bold text-[#0a1226] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1.2] tracking-[-0.01em]">
            A Precision<br /> Prebiotic Solution
          </h2>
          <p class="mt-5 text-[14px] md:text-[15px] text-[#475467] leading-[1.7] max-w-[540px]">
            Engineered to selectively nourish beneficial gut bacteria. A natural, short-chain prebiotic fiber with multifunctional benefits
          </p>
        </div>
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden bg-[#0a1226]">
            <img :src="imgFos" alt="FOS" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div v-for="adv in features" :key="adv.title" class="flex flex-col">
          <div class="flex h-9 w-9 items-center justify-center rounded-md bg-[#f59e0b] text-white">
            <component :is="adv.icon" :size="16" stroke-width="2.4" />
          </div>
          <h3 class="mt-4 font-semibold text-[#0a1226] text-[15px] md:text-[16px]">{{ adv.title }}</h3>
          <p class="mt-2 text-[13px] leading-[1.65] text-[#475467] max-w-[300px]">{{ adv.desc }}</p>
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
          Strong Unit Economics with Scalable Upside
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

      <!-- Comparison Table -->
      <div class="mt-12 md:mt-16">
        <p class="text-white/85 text-[14px] md:text-[16px] mb-4">FOS vs Key Prebiotic Competitors</p>
        <div class="overflow-x-auto rounded-2xl border border-white/10">
          <table class="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr class="bg-[#10193a]">
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">Features</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">GOS</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">FOS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in compareRows" :key="row.feature" :class="i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'">
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] font-semibold text-white border-b border-white/10 last:border-b-0">{{ row.feature }}</td>
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] text-white/75 border-b border-white/10 last:border-b-0">{{ row.gos }}</td>
                <td class="px-5 md:px-6 py-3.5 text-[13px] md:text-[14px] text-white/75 border-b border-white/10 last:border-b-0">{{ row.fos }}</td>
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
import { Eye, FlaskConical, Zap } from 'lucide-vue-next'
import ProductHero from '@/sections/ProductHero.vue'
import MarketChannelsSection from '@/sections/MarketChannelsSection.vue'

import bgHero from '@/assets/sugar/bg-hero-3.png'
import imgFos from '@/assets/sugar/fos.png'
import imgAdvantage from '@/assets/sugar/coreadvantage.png'
import imgM1 from '@/assets/sugar/market1.png'
import imgM2 from '@/assets/sugar/market2.png'
import imgM3 from '@/assets/sugar/market3.png'

import type { PageName } from '@/App.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const features = [
  {
    icon: Eye,
    title: 'Targeted Microbiome Activation',
    desc: 'FOS selectively stimulates beneficial bacteria such as Bifidobacteria, improving gut ecosystem balance. This leads to measurable digestive and immune benefits.',
  },
  {
    icon: FlaskConical,
    title: 'Fast-Acting Functional Fiber',
    desc: 'Due to its short-chain structure, FOS is rapidly fermented in the colon. This allows quicker physiological response compared to longer-chain fibers.',
  },
  {
    icon: Zap,
    title: 'Seamless Product Integration',
    desc: 'Its high solubility and mild sweetness make it easy to incorporate into beverages, dairy, and supplements without compromising taste.',
  },
]

const points = [
  {
    title: 'Efficient Production Model',
    desc: 'Enzymatic conversion from sucrose enables scalable and consistent manufacturing. This reduces supply chain volatility.',
  },
  {
    title: 'High Value Density',
    desc: 'Small inclusion levels deliver significant functional benefits. This allows premium pricing without heavily impacting product cost.',
  },
  {
    title: 'Margin Expansion Lever',
    desc: 'FOS enhances product positioning (gut health, low sugar), enabling higher retail pricing. Brands can improve margins while maintaining competitiveness.',
  },
]

const compareRows = [
  { feature: 'Chain Length', gos: 'Short-chain', fos: 'Short-chain' },
  { feature: 'Fermentation Speed', gos: 'Fast', fos: 'Medium' },
  { feature: 'Digestive Tolerance', gos: 'Low', fos: 'Moderate' },
  { feature: 'Cost Efficiency', gos: 'Low (expensive)', fos: 'High' },
]

const marketCards = [
  { title: 'Functional Beverages', desc: 'Includes ready-to-drink gut health beverages, fiber drinks, and low-sugar formulations.', image: imgM1 },
  { title: 'Dairy & Dairy Alternatives', desc: 'Yogurt, probiotic drinks, and plant-based dairy increasingly incorporate prebiotics like FOS.', image: imgM2 },
  { title: 'Dietary Supplements', desc: 'Capsules, powders, and sachets targeting gut health and immunity', image: imgM3 },
]
</script>
