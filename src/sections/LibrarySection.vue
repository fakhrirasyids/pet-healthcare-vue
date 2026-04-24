<template>
  <section class="py-14 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10 sm:space-y-12 lg:space-y-14">
      <div class="text-center">
        <Reveal>
          <p class="font-sans font-semibold text-[#004a5e] text-sm sm:text-base mb-3">
            {{ t('library.kicker') }}
          </p>
        </Reveal>
        <Reveal :delay="80">
          <h2 class="font-['Volkhov'] font-bold text-[#101828] text-2xl sm:text-3xl md:text-4xl">
            {{ t('library.title') }}
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10 items-center rounded-[32px] bg-gradient-to-br from-[#f8fbff] to-[#eef9fd] p-6 sm:p-8 lg:p-10 border border-black/5 shadow-[0_24px_70px_rgba(15,23,42,0.07)]">
          <div>
            <p class="font-sans font-semibold text-[#004a5e] text-sm uppercase tracking-[0.08em]">
              {{ t('library.products.dx.eyebrow') }}
            </p>
            <h3 class="mt-3 font-['Volkhov'] font-bold text-2xl sm:text-3xl text-[#101828]">
              {{ t('library.products.dx.title') }}
            </h3>
            <p class="mt-4 font-sans text-sm sm:text-base leading-relaxed text-[#344054] max-w-xl">
              {{ t('library.products.dx.desc') }}
            </p>
            <ul class="mt-6 space-y-3 text-sm sm:text-base text-[#101828]">
              <li v-for="(point, idx) in dxPoints" :key="idx" class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#1e5ebf]" />
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-[24px] overflow-hidden border border-black/5 bg-white p-3 shadow-[0_14px_30px_rgba(15,23,42,0.06)] col-span-2">
              <img :src="imgDxScience" alt="GTTN-Dx and research" class="w-full rounded-[18px] object-cover" />
            </div>
            <div class="rounded-[24px] overflow-hidden border border-black/5 bg-white p-3 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
              <img :src="imgDxPathology" alt="Pathology visuals" class="w-full rounded-[18px] object-cover" />
            </div>
            <div class="rounded-[24px] overflow-hidden border border-black/5 bg-white p-3 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
              <img :src="imgCertification" alt="Certification" class="w-full rounded-[18px] object-cover" />
            </div>
          </div>
        </div>
      </Reveal>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <Reveal>
          <div class="h-full rounded-[30px] bg-[#031720] p-6 sm:p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
            <div class="rounded-[24px] overflow-hidden border border-white/10 bg-white/5 p-3 mb-6">
              <img :src="imgNavi" alt="GTTN-Navi" class="w-full rounded-[18px] object-cover" />
            </div>
            <p class="font-sans font-semibold text-[#8fe3ff] text-sm uppercase tracking-[0.08em]">
              {{ t('library.products.navi.eyebrow') }}
            </p>
            <h3 class="mt-3 font-['Volkhov'] font-bold text-2xl sm:text-3xl">
              {{ t('library.products.navi.title') }}
            </h3>
            <p class="mt-4 font-sans text-sm sm:text-base leading-relaxed text-white/75">
              {{ t('library.products.navi.desc') }}
            </p>
            <ul class="mt-6 space-y-3 text-sm sm:text-base text-white/90">
              <li v-for="(point, idx) in naviPoints" :key="idx" class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#8fe3ff]" />
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal :delay="90">
          <div class="h-full rounded-[30px] bg-white border border-black/5 p-6 sm:p-8 shadow-[0_24px_70px_rgba(15,23,42,0.07)]">
            <div class="rounded-[24px] overflow-hidden border border-black/5 bg-[#f8fbff] p-3 mb-6">
              <img :src="imgScience" alt="GTTNano science and certification" class="w-full rounded-[18px] object-cover" />
            </div>
            <p class="font-sans font-semibold text-[#004a5e] text-sm uppercase tracking-[0.08em]">
              {{ t('library.products.science.eyebrow') }}
            </p>
            <h3 class="mt-3 font-['Volkhov'] font-bold text-2xl sm:text-3xl text-[#101828]">
              {{ t('library.products.science.title') }}
            </h3>
            <p class="mt-4 font-sans text-sm sm:text-base leading-relaxed text-[#475467]">
              {{ t('library.products.science.desc') }}
            </p>
            <ul class="mt-6 space-y-3 text-sm sm:text-base text-[#101828]">
              <li v-for="(point, idx) in sciencePoints" :key="idx" class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#1e5ebf]" />
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Reveal from '@/components/Reveal.vue'
import imgDxScience from '@/assets/gtt/84858028971f5af6032d388f32bd93bafb2bf1ce.png'
import imgDxPathology from '@/assets/gtt/9c9ace973e69ea70ca9c9ac8c5ee50d97b45ef8b.png'
import imgCertification from '@/assets/gtt/592af24b3ae7436288551302e2953e30443d299e.png'
import imgNavi from '@/assets/gtt/a64780cc2bdf3b8b4ef557286f71cc37a54bcb5a.png'
import imgScience from '@/assets/gtt/aff1494f34c26810837e4c4a273e4547e9013060.png'

const { tm, t } = useI18n({ useScope: 'global' })

const dxPoints = computed(() => tm('library.products.dx.points') as string[])
const naviPoints = computed(() => tm('library.products.navi.points') as string[])
const sciencePoints = computed(() => tm('library.products.science.points') as string[])
</script>
