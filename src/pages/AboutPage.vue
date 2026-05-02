<template>
  <div class="bg-white">
    <section class="relative isolate overflow-hidden bg-[linear-gradient(115deg,#1638d8_0%,#006fd8_100%)] px-6 md:px-10 lg:px-12 pt-36 md:pt-40 pb-20 md:pb-28">
      <div class="mx-auto max-w-[1120px]">
        <div class="max-w-[690px]">
          <h1 class="font-['Volkhov'] text-[40px] font-bold leading-[1.12] text-white sm:text-[54px] md:text-[64px]">
            {{ t('sugar.about.hero.title') }}
          </h1>
          <p class="mt-6 max-w-[660px] text-[17px] leading-[1.65] text-white/80 md:text-[22px]">
            {{ t('sugar.about.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <section class="px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
      <div class="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-6">
          <span class="inline-flex rounded-full bg-[#eaf2ff] px-8 py-2 text-[13px] font-bold uppercase tracking-[0.02em] text-[#1f66d6]">
            {{ t('sugar.about.mission.badge') }}
          </span>
          <h2 class="mt-7 max-w-[500px] font-['Volkhov'] text-[34px] font-bold leading-[1.18] text-[#182131] md:text-[44px]">
            {{ t('sugar.about.mission.title') }}
          </h2>
          <div class="mt-7 max-w-[540px] space-y-5 text-[15px] leading-[1.75] text-[#798596]">
            <p>{{ t('sugar.about.mission.p1') }}</p>
            <p>{{ t('sugar.about.mission.p2') }}</p>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="overflow-hidden rounded-[24px] bg-[#eef3f7]">
            <img
              :src="imgAboutSugar"
              :alt="t('sugar.about.mission.imgAlt')"
              class="aspect-[1.18/1] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#effcff] px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
      <div class="mx-auto max-w-[1120px]">
        <div class="text-center">
          <p class="text-[14px] font-semibold uppercase tracking-[0.02em] text-[#798596]">{{ t('sugar.about.values.kicker') }}</p>
          <h2 class="mt-4 font-['Volkhov'] text-[32px] font-bold leading-[1.18] text-[#182131] md:text-[44px]">
            {{ t('sugar.about.values.title') }}
          </h2>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-9">
          <article
            v-for="value in values"
            :key="value.number"
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
        <p class="text-[14px] font-semibold uppercase tracking-[0.02em] text-[#798596]">{{ t('sugar.about.leadership.kicker') }}</p>
        <h2 class="mt-4 font-['Volkhov'] text-[31px] font-bold leading-[1.18] text-[#182131] md:text-[43px]">
          {{ t('sugar.about.leadership.title') }}
        </h2>
        <p class="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.75] text-[#7b8798]">
          {{ t('sugar.about.leadership.subtitle') }}
        </p>

        <div class="mt-16 rounded-[24px] bg-[linear-gradient(115deg,#1638d8_0%,#006fd8_100%)] px-6 py-12 text-center md:px-10 md:py-16">
          <h3 class="font-['Volkhov'] text-[27px] font-bold text-white md:text-[36px]">
            {{ t('sugar.about.leadership.cta.title') }}
          </h3>
          <p class="mx-auto mt-5 max-w-[760px] text-[15px] leading-[1.7] text-white/80 md:text-[17px]">
            {{ t('sugar.about.leadership.cta.subtitle') }}
          </p>
          <button
            type="button"
            class="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-9 text-[15px] font-bold text-[#182131] transition-transform duration-300 hover:-translate-y-0.5"
            @click="emit('navigate', 'contact')"
          >
            {{ t('sugar.about.leadership.cta.button') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import imgAboutSugar from '@/assets/sugar/aboutsugar.jpg'
import type { PageName } from '@/App.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const { t, tm } = useI18n({ useScope: 'global' })

const values = computed(() => tm('sugar.about.values.items') as { number: string; title: string; desc: string }[])
</script>
