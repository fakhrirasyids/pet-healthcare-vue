<template>
  <section class="bg-[#eaf2ff] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <p class="text-[11px] font-semibold tracking-[0.18em] text-[#475467] uppercase">Product Pipeline</p>
      <h2 class="mt-3 font-['Volkhov'] font-bold text-[#0a1226] text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.01em]">
        Three Complementary Product Platforms
      </h2>

      <!-- Connector line (desktop) -->
      <div class="hidden md:block relative mt-10 mb-8 h-1.5">
        <div class="absolute inset-x-4 top-1/2 -translate-y-1/2 h-px bg-[#1652f0]/30" />
        <div class="relative flex justify-between">
          <span v-for="i in 4" :key="i" class="h-3 w-3 rounded-full bg-[#1652f0]" />
        </div>
      </div>

      <div class="mt-6 md:mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        <button
          v-for="item in items"
          :key="item.title"
          class="rounded-2xl bg-white border border-[#1652f0]/15 p-5 text-left hover:shadow-[0_12px_32px_rgba(22,82,240,0.10)] transition-shadow"
          @click="item.page && emit('navigate', item.page)"
          :disabled="!item.page"
        >
          <div class="aspect-square w-full max-w-[160px] rounded-full overflow-hidden mx-auto bg-[#f0f3fa]">
            <img v-if="item.image" :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
          </div>
          <h3 class="mt-4 font-semibold text-[#0a1226] text-[16px]">{{ item.title }}</h3>
          <p class="mt-1.5 text-[13px] leading-[1.55] text-[#475467]">{{ item.desc }}</p>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import imgRebM from '@/assets/sugar/rebm.png'
import imgIsomalt from '@/assets/sugar/isomalt.png'
import imgFos from '@/assets/sugar/fos.png'
import type { PageName } from '@/App.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const items: { page: PageName | null; title: string; desc: string; image: string | null }[] = [
  { page: 'rebm', title: 'Reb M', desc: 'A natural, high-intensity sweetener with a clean sugar-like taste.', image: imgRebM },
  { page: 'isomalt', title: 'Isomalt', desc: 'A functional carbohydrate delivering bulk, stability, and low glycemic response.', image: imgIsomalt },
  { page: 'fos', title: 'Fructooligosaccharides', desc: 'A prebiotic fiber supporting gut health and sugar reduction strategies.', image: imgFos },
  { page: null, title: 'Next in line', desc: 'It has obtained classification as new sweetener', image: null },
]
</script>
