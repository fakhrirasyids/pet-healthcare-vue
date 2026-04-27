<template>
  <div class="bg-white">
    <section class="relative isolate overflow-hidden bg-[linear-gradient(115deg,#1638d8_0%,#006fd8_100%)] px-6 md:px-10 lg:px-12 pt-36 md:pt-40 pb-20 md:pb-28">
      <div class="mx-auto max-w-[1120px]">
        <div class="max-w-[690px]">
          <h1 class="font-['Volkhov'] text-[40px] font-bold leading-[1.12] text-white sm:text-[54px] md:text-[64px]">
            About Our Company
          </h1>
          <p class="mt-6 max-w-[660px] text-[17px] leading-[1.65] text-white/80 md:text-[22px]">
            Leading the transformation in sugar alternatives through innovative biocatalytic technology
          </p>
        </div>
      </div>
    </section>

    <section class="px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
      <div class="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-6">
          <span class="inline-flex rounded-full bg-[#eaf2ff] px-8 py-2 text-[13px] font-bold uppercase tracking-[0.02em] text-[#1f66d6]">
            Our Mission
          </span>
          <h2 class="mt-7 max-w-[500px] font-['Volkhov'] text-[34px] font-bold leading-[1.18] text-[#182131] md:text-[44px]">
            Redefining Sugar Production for a Healthier Future
          </h2>
          <div class="mt-7 max-w-[540px] space-y-5 text-[15px] leading-[1.75] text-[#798596]">
            <p>
              We are committed to revolutionizing the sugar industry through breakthrough biocatalytic technology. Our mission is to provide sustainable, cost-effective, and healthier sugar alternatives that meet the growing global demand for functional nutrition.
            </p>
            <p>
              By combining cutting-edge science with environmental responsibility, we're accelerating sugar reduction across industries while maintaining the taste and functionality that consumers expect.
            </p>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="overflow-hidden rounded-[24px] bg-[#eef3f7]">
            <img
              :src="imgAboutSugar"
              alt="Sugar being sifted into a bowl"
              class="aspect-[1.18/1] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#effcff] px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
      <div class="mx-auto max-w-[1120px]">
        <div class="text-center">
          <p class="text-[14px] font-semibold uppercase tracking-[0.02em] text-[#798596]">Our Values</p>
          <h2 class="mt-4 font-['Volkhov'] text-[32px] font-bold leading-[1.18] text-[#182131] md:text-[44px]">
            What Drives Us Forward
          </h2>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-9">
          <article
            v-for="value in values"
            :key="value.title"
            class="rounded-2xl border border-[#dce8ee] bg-white px-9 py-9 shadow-[0_1px_0_rgba(16,24,40,0.02)]"
          >
            <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1f6fd9_0%,#6c3cac_100%)] text-[24px] font-semibold text-white">
              {{ value.number }}
            </div>
            <h3 class="mt-7 font-['Volkhov'] text-[25px] font-bold text-[#182131]">
              {{ value.title }}
            </h3>
            <p class="mt-4 max-w-[430px] text-[14px] leading-[1.75] text-[#7b8798]">
              {{ value.desc }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
      <div class="mx-auto max-w-[1120px] text-center">
        <p class="text-[14px] font-semibold uppercase tracking-[0.02em] text-[#798596]">Leadership</p>
        <h2 class="mt-4 font-['Volkhov'] text-[31px] font-bold leading-[1.18] text-[#182131] md:text-[43px]">
          Expert Team Driving Innovation
        </h2>
        <p class="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.75] text-[#7b8798]">
          Our multidisciplinary team combines decades of experience in biotechnology, chemical engineering, and sustainable manufacturing.
        </p>

        <div class="mt-16 rounded-[24px] bg-[linear-gradient(115deg,#1638d8_0%,#006fd8_100%)] px-6 py-12 text-center md:px-10 md:py-16">
          <h3 class="font-['Volkhov'] text-[27px] font-bold text-white md:text-[36px]">
            Join Our Journey
          </h3>
          <p class="mx-auto mt-5 max-w-[760px] text-[15px] leading-[1.7] text-white/80 md:text-[17px]">
            We're always looking for talented individuals passionate about transforming the food industry
          </p>
          <button
            type="button"
            class="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-9 text-[15px] font-bold text-[#182131] transition-transform duration-300 hover:-translate-y-0.5"
            @click="emit('navigate', 'contact')"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import imgAboutSugar from '@/assets/sugar/aboutsugar.jpg'
import type { PageName } from '@/App.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const values = [
  {
    number: '1',
    title: 'Innovation',
    desc: 'Pioneering biocatalytic processes that transform how functional sugars are produced globally.',
  },
  {
    number: '2',
    title: 'Sustainability',
    desc: 'Green chemistry approach that reduces energy consumption and environmental impact.',
  },
  {
    number: '3',
    title: 'Quality',
    desc: 'High-purity output with simplified production processes for consistent excellence.',
  },
  {
    number: '4',
    title: 'Partnership',
    desc: 'Collaborating with industry leaders to accelerate the adoption of healthier alternatives.',
  },
]
</script>
