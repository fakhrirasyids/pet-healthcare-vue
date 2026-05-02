<template>
  <section class="bg-[#0a1226] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="flex flex-col items-center text-center">
        <span class="inline-flex items-center rounded-full bg-[#10193a] px-5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/85 uppercase border border-white/10">
          {{ t('sugar.costSaving.kicker') }}
        </span>
        <h2 class="mt-5 font-['Volkhov'] font-bold text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-[-0.01em]">
          {{ t('sugar.costSaving.title') }}
        </h2>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-6 rounded-2xl overflow-hidden">
          <img :src="imgAdvantage" alt="Cost saving illustration" class="w-full h-auto" />
        </div>

        <div class="lg:col-span-6 text-white space-y-6">
          <div>
            <h3 class="font-semibold text-[16px] md:text-[18px]">{{ t('sugar.costSaving.traditional.heading') }}</h3>
            <ul class="mt-3 space-y-1.5 text-[13px] md:text-[14px] text-white/75 list-disc list-outside pl-5">
              <li v-for="(bullet, i) in tm('sugar.costSaving.traditional.bullets') as string[]" :key="i">{{ bullet }}</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-[16px] md:text-[18px]">{{ t('sugar.costSaving.new.heading') }}</h3>
            <ul class="mt-3 space-y-1.5 text-[13px] md:text-[14px] text-white/75 list-disc list-outside pl-5">
              <li v-for="(bullet, i) in tm('sugar.costSaving.new.bullets') as string[]" :key="i">{{ bullet }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="mt-12 md:mt-16">
        <p class="text-white/85 text-[14px] md:text-[16px] mb-4">{{ t('sugar.costSaving.tableCaption') }}</p>
        <div class="overflow-x-auto rounded-2xl border border-white/10">
          <table class="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr class="bg-[#10193a]">
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">{{ t('sugar.costSaving.table.headers.item') }}</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">{{ t('sugar.costSaving.table.headers.share') }}</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">{{ t('sugar.costSaving.table.headers.saving') }}</th>
                <th class="px-5 md:px-6 py-3.5 text-[12px] md:text-[13px] font-semibold text-white border-b border-white/10">{{ t('sugar.costSaving.table.headers.total') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in tm('sugar.costSaving.table.rows') as any[]" :key="i" :class="i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'">
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
import { useI18n } from 'vue-i18n'
import imgAdvantage from '@/assets/sugar/coreadvantage.png'

const { t, tm } = useI18n({ useScope: 'global' })
</script>
