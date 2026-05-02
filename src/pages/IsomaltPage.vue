<template>
  <ProductHero
    :title="t('sugar.isomalt.hero.title')"
    :subtitle="t('sugar.isomalt.hero.subtitle')"
    :bg="bgHero"
    @contact="emit('navigate', 'contact')"
  />

  <!-- Overview -->
  <section class="bg-[#eaf2ff] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div class="lg:col-span-7">
          <p class="text-[12px] font-semibold tracking-[0.04em] text-[#1652f0]">{{ t('sugar.isomalt.overview.kicker') }}</p>
          <h2 class="mt-3 font-['Volkhov'] font-bold text-[#0a1226] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1.2] tracking-[-0.01em]">
            {{ t('sugar.isomalt.overview.title') }}
          </h2>
          <p class="mt-5 text-[14px] md:text-[15px] text-[#475467] leading-[1.7] max-w-[560px]">
            {{ t('sugar.isomalt.overview.desc') }}
          </p>
        </div>
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden bg-[#f0f3fa] border border-white">
            <img :src="imgIsomalt" :alt="t('sugar.isomalt.overview.imgAlt')" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
        <div v-for="adv in advantages" :key="adv.key" class="flex flex-col">
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
          {{ t('sugar.isomalt.coreAdvantage.kicker') }}
        </span>
        <h2 class="mt-5 font-['Volkhov'] font-bold text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-[-0.01em] max-w-[820px]">
          {{ t('sugar.isomalt.coreAdvantage.title') }}
        </h2>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-5 rounded-2xl overflow-hidden">
          <img :src="imgAdvantage" :alt="t('sugar.isomalt.coreAdvantage.imgAlt')" class="w-full h-auto" />
        </div>
        <div class="lg:col-span-7 text-white space-y-7">
          <div v-for="point in points" :key="point.key">
            <h3 class="font-semibold text-[16px] md:text-[18px]">{{ point.title }}</h3>
            <p class="mt-2 text-[13px] md:text-[14px] text-white/75 leading-[1.7] max-w-[520px]">{{ point.desc }}</p>
          </div>
        </div>
      </div>

      <!-- KPI Table -->
      <div class="mt-12 md:mt-16">
        <p class="text-white/85 text-[14px] md:text-[16px] mb-4">{{ t('sugar.isomalt.coreAdvantage.tableCaption') }}</p>
        <div class="overflow-x-auto rounded-2xl border border-white/10">
          <table class="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr class="bg-[#10193a]">
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">{{ t('sugar.isomalt.coreAdvantage.table.headers.kpi') }}</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">{{ t('sugar.isomalt.coreAdvantage.table.headers.industry') }}</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">{{ t('sugar.isomalt.coreAdvantage.table.headers.process') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in tm('sugar.isomalt.coreAdvantage.table.rows') as any[]" :key="i" :class="i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'">
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

  <MarketChannelsSection :cards="marketCards" :kicker="t('sugar.market.kicker')" :title="t('sugar.market.title')" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
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

const { t, tm } = useI18n({ useScope: 'global' })

const advantages = computed(() => [
  { key: 'health', icon: Eye, title: t('sugar.isomalt.advantages.health.title'), bullets: tm('sugar.isomalt.advantages.health.bullets') as string[] },
  { key: 'industrial', icon: Zap, title: t('sugar.isomalt.advantages.industrial.title'), bullets: tm('sugar.isomalt.advantages.industrial.bullets') as string[] },
  { key: 'oral', icon: Leaf, title: t('sugar.isomalt.advantages.oral.title'), bullets: tm('sugar.isomalt.advantages.oral.bullets') as string[] },
  { key: 'label', icon: Settings, title: t('sugar.isomalt.advantages.label.title'), bullets: tm('sugar.isomalt.advantages.label.bullets') as string[] },
])

const points = computed(() => [
  { key: 'margin', title: t('sugar.isomalt.coreAdvantage.points.margin.title'), desc: t('sugar.isomalt.coreAdvantage.points.margin.desc') },
  { key: 'production', title: t('sugar.isomalt.coreAdvantage.points.production.title'), desc: t('sugar.isomalt.coreAdvantage.points.production.desc') },
  { key: 'scale', title: t('sugar.isomalt.coreAdvantage.points.scale.title'), desc: t('sugar.isomalt.coreAdvantage.points.scale.desc') },
])

const marketCards = computed(() => (tm('sugar.isomalt.market.cards') as any[]).map((c, i) => ({
  ...c,
  image: [imgM1, imgM2, imgM3][i],
})))
</script>
