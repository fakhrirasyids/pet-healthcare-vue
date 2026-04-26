<template>
  <section class="bg-[#0a1226] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="flex flex-col items-center text-center">
        <span class="inline-flex items-center rounded-full bg-[#10193a] px-5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/85 uppercase border border-white/10">
          Core Advantage
        </span>
        <h2 class="mt-5 font-['Volkhov'] font-bold text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-[-0.01em]">
          Cost Saving Breakdown
        </h2>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-6 rounded-2xl overflow-hidden">
          <img :src="imgAdvantage" alt="Cost saving illustration" class="w-full h-auto" />
        </div>

        <div class="lg:col-span-6 text-white space-y-6">
          <div>
            <h3 class="font-semibold text-[16px] md:text-[18px]">Traditional Process</h3>
            <ul class="mt-3 space-y-1.5 text-[13px] md:text-[14px] text-white/75 list-disc list-outside pl-5">
              <li>Mild condition: 28–30°C, atmospheric pressure</li>
              <li>Reaction time: 12 hours</li>
              <li>No high temperature / high pressure</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-[16px] md:text-[18px]">New Process</h3>
            <ul class="mt-3 space-y-1.5 text-[13px] md:text-[14px] text-white/75 list-disc list-outside pl-5">
              <li>Byproduct reduced: 4.5% → 1%</li>
              <li>Multiple reuse cycles enabled</li>
              <li>Total cost saving: ~30%</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="mt-12 md:mt-16">
        <p class="text-white/85 text-[14px] md:text-[16px] mb-4">Process Innovation — 30% Cost Reduction</p>
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
              <tr v-for="(row, i) in rows" :key="row.item" :class="i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'">
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
</template>

<script setup lang="ts">
import imgAdvantage from '@/assets/sugar/coreadvantage.png'

const rows = [
  { item: 'Evaporation', share: '15%', saving: '70%', total: '10.5%' },
  { item: 'Waste', share: '10%', saving: '80%', total: '8%' },
  { item: 'Equipment', share: '10%', saving: '40%', total: '4%' },
  { item: 'Yield gain', share: '10%', saving: '40%', total: '3%' },
  { item: 'Labor', share: '10%', saving: '20%', total: '1.6%' },
]
</script>
