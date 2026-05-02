<template>
  <section class="relative isolate w-full overflow-hidden">
    <img
      :src="bg"
      :alt="`${title} hero background`"
      class="absolute inset-0 h-full w-full object-cover"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-black/45" aria-hidden="true" />

    <div class="relative z-10 px-6 md:px-10 lg:px-12 pt-32 md:pt-36 lg:pt-40 pb-20 md:pb-24 lg:pb-28">
      <div class="max-w-[1100px] mx-auto text-white">
        <h1 class="font-['Volkhov'] font-bold leading-[1.05] tracking-[-0.02em] text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px] max-w-[760px]">
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="mt-4 md:mt-5 text-[15px] md:text-[17px] text-white/85 leading-[1.6] max-w-[420px]"
        >
          {{ subtitle }}
        </p>
        <div class="mt-8 md:mt-10">
          <button
            class="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-[14px] md:text-[15px] font-semibold text-[#0a1226] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
            @click="emit('contact')"
          >
            {{ t('sugar.productHero.cta') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  title: string
  subtitle?: string
  bg: string
}>()

const emit = defineEmits<{
  (e: 'contact'): void
}>()

const { t } = useI18n({ useScope: 'global' })
</script>
