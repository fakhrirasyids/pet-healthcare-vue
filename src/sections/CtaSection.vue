<template>
  <!-- Why Now section -->
  <section class="py-14 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <!-- Left: image collage card -->
        <Reveal>
          <div class="rounded-[28px] bg-[#f0f2f5] p-4 sm:p-5">
            <div class="grid grid-cols-2 gap-3">
              <!-- Top-left: tall image -->
              <div class="rounded-2xl overflow-hidden aspect-square">
                <img :src="img1" alt="" class="w-full h-full object-cover" />
              </div>
              <!-- Top-right: tall image -->
              <div class="rounded-2xl overflow-hidden aspect-square">
                <img :src="img2" alt="" class="w-full h-full object-cover object-top" />
              </div>
              <!-- Bottom: half-width centered image -->
              <div class="col-span-1 rounded-2xl overflow-hidden aspect-square">
                <img :src="img3" alt="" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Reveal>

        <!-- Right: kicker + title + bullets -->
        <div>
          <Reveal>
            <p class="font-sans font-semibold text-[#009689] text-xs sm:text-sm uppercase tracking-[0.14em] mb-4">
              {{ t('cta.kicker') }}
            </p>
          </Reveal>
          <Reveal :delay="80">
            <h2 class="font-['Volkhov'] font-bold text-[#101828] text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] mb-7">
              {{ t('cta.title') }}
            </h2>
          </Reveal>
          <Reveal :delay="140">
            <ul class="space-y-5 text-sm sm:text-base text-[#344054] leading-relaxed">
              <li v-for="(bullet, idx) in bullets" :key="idx" class="flex items-start gap-3">
                <span class="mt-[6px] text-[#344054] text-lg leading-none flex-shrink-0">·</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </Reveal>
        </div>

      </div>
    </div>
  </section>

  <!-- Final CTA banner -->
  <section class="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
    <img :src="imgCtaBg" alt="" class="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
    <div class="absolute inset-0 bg-[#020b1f]/78" />
    <div class="absolute inset-0 bg-black/50" />
    <div class="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center">
      <Reveal>
        <h2 class="font-['Volkhov'] font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
          {{ t('hero.title') }}
        </h2>
      </Reveal>
      <Reveal :delay="80">
        <p class="font-sans text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8">
          {{ t('hero.subtitle') }}
        </p>
      </Reveal>
      <Reveal :delay="150">
        <a
          href="#contact"
          class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[#101828] font-semibold text-base hover:-translate-y-0.5 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          @click.prevent="scrollToContact"
        >
          {{ t('common.demoCta') }}
        </a>
      </Reveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Reveal from '@/components/Reveal.vue'

import img1     from '@/assets/gtt/12b1ceaf647f00d1aa5ee32ec916614e30e3aa5f.png'
import img2     from '@/assets/gtt/da1ccd136ab7b7674231ef1c9f92067f4f6085ca.png'
import img3     from '@/assets/gtt/9deba77fb43a795369da87e3f11bdd6dc6e514a8.png'
import imgCtaBg from '@/assets/gtt/d6aafd86011b0dc2a9f2297e270a32d056fa2215.png'

const { t, tm } = useI18n({ useScope: 'global' })
const bullets = computed(() => tm('cta.bullets') as string[])

function scrollToContact() {
  const el = document.getElementById('contact')
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 96
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
}
</script>
