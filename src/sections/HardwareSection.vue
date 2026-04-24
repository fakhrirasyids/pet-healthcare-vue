<template>
  <section class="py-14 sm:py-16 lg:py-20 bg-[#0d1520]" id="technology">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

      <!-- Badge + title -->
      <div class="text-center mb-10 sm:mb-14">
        <Reveal>
          <div class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2 mb-7">
            <span class="font-sans font-semibold text-white text-xs sm:text-sm uppercase tracking-[0.18em]">
              {{ t('hardware.kicker') }}
            </span>
          </div>
        </Reveal>
        <Reveal :delay="80">
          <h2 class="font-['Volkhov'] font-bold text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-[1.1]">
            {{ t('hardware.title') }}
          </h2>
        </Reveal>
      </div>

      <!-- Image left + text right -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-14 sm:mb-16">
        <Reveal>
          <div class="rounded-2xl overflow-hidden">
            <img :src="imgCmpt" alt="CMPT precision targeting" class="w-full object-cover" />
          </div>
        </Reveal>

        <Reveal :delay="100">
          <div>
            <h3 class="font-['Volkhov'] font-bold text-white text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.2] mb-5">
              Precisely targeting<br />cancer cell nucleus
            </h3>
            <p class="font-sans text-white/60 text-base sm:text-lg leading-relaxed">
              Allowing it to penetrate tumor cells selectively and accumulate in the nucleus with unmatched precision.
            </p>
          </div>
        </Reveal>
      </div>

      <!-- Table subtitle -->
      <Reveal>
        <p class="font-sans font-semibold text-white text-lg sm:text-xl mb-6">
          {{ t('hardware.title') }}
        </p>
      </Reveal>

      <!-- Comparison table -->
      <Reveal :delay="80">
        <div class="rounded-2xl overflow-hidden border border-white/10">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm sm:text-base text-white min-w-[640px]">
              <thead>
                <tr class="border-b border-white/10 bg-white/5">
                  <th class="px-5 py-4 font-semibold text-white/70 w-[22%]">{{ t('hardware.table.headers.feature') }}</th>
                  <th class="px-5 py-4 font-semibold text-white w-[26%]">{{ t('hardware.table.headers.cmpt') }}</th>
                  <th class="px-5 py-4 font-semibold text-white/70 w-[26%]">{{ t('hardware.table.headers.epr') }}</th>
                  <th class="px-5 py-4 font-semibold text-white/70 w-[26%]">{{ t('hardware.table.headers.ligand') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, index) in rows"
                  :key="index"
                  class="border-t border-white/8 align-top"
                  :class="index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'"
                >
                  <td class="px-5 py-4 font-semibold text-white/80 text-sm">{{ row.feature }}</td>
                  <td class="px-5 py-4 text-sm" :class="isCmptHighlight(row.cmpt) ? 'text-[#4dd9c8] font-semibold' : 'text-white/90'">{{ row.cmpt }}</td>
                  <td class="px-5 py-4 text-white/55 text-sm">{{ row.epr }}</td>
                  <td class="px-5 py-4 text-white/55 text-sm">{{ row.ligand }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Reveal from '@/components/Reveal.vue'
import imgCmpt from '@/assets/gtt/cmpt.png'

const { t, tm } = useI18n({ useScope: 'global' })

const rows = computed(() => tm('hardware.table.rows') as Array<Record<string, string>>)

function isCmptHighlight(val: string) {
  return val.includes('50%') || val.toLowerCase().includes('non-toxic') || val.toLowerCase().includes('no significant')
    || val.toLowerCase().includes('tidak toksik') || val.toLowerCase().includes('tidak ada akumulasi')
    || val.includes('无毒') || val.includes('无显著')
}
</script>
