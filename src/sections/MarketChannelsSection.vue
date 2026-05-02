<template>
  <section class="bg-[#eaf2ff] px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
    <div class="max-w-[1100px] mx-auto">
      <div class="flex flex-col items-center text-center">
        <span class="inline-flex items-center rounded-full bg-white px-5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#1652f0] uppercase">
          {{ kicker }}
        </span>
        <h2 class="mt-5 font-['Volkhov'] font-bold text-[#0a1226] text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-[-0.01em]">
          {{ title }}
        </h2>
      </div>

      <div class="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="card in cards"
          :key="card.title"
          class="flex flex-col"
        >
          <div class="aspect-[4/3] rounded-2xl overflow-hidden">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
          </div>
          <h3 class="mt-5 font-semibold text-[#0a1226] text-[16px] md:text-[17px]">{{ card.title }}</h3>
          <p class="mt-2 text-[13px] md:text-[14px] leading-[1.6] text-[#475467]">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  cards: { title: string; desc: string; image: string }[]
  kicker: string
  title: string
}>()
</script>
