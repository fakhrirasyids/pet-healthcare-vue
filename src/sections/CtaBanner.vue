<template>
  <section class="relative isolate w-full overflow-hidden">
    <img
      :src="imgBg"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-black/65" aria-hidden="true" />

    <div class="relative z-10 px-6 md:px-10 lg:px-12 py-20 md:py-24 lg:py-28 text-center">
      <div class="max-w-[820px] mx-auto">
        <h2 class="font-['Volkhov'] font-bold text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] tracking-[-0.02em]">
          Redefining the Future of Sugar
        </h2>
        <p class="mt-4 md:mt-5 text-white/85 text-[14px] sm:text-[16px] md:text-[17px] leading-[1.6] max-w-[640px] mx-auto">
          Operational inefficiencies and process constraints limit cost efficiency and large-scale output.
        </p>

        <div class="mt-8 md:mt-10">
          <button
            class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#101828] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
            type="button"
          >
            Request a Live Demo
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import imgBg from '@/assets/sugar/bg-cta.png'
</script>
