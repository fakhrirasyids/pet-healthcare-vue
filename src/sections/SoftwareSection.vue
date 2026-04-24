<template>
  <section class="py-14 sm:py-16 lg:py-20 bg-[#eef5fb]" id="pipeline">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

      <!-- Kicker + title -->
      <div class="text-center mb-10 sm:mb-14">
        <Reveal>
          <p class="font-sans font-semibold text-[#6b7280] text-xs sm:text-sm uppercase tracking-[0.18em] mb-3">
            {{ t('software.kicker') }}
          </p>
        </Reveal>
        <Reveal :delay="80">
          <h2 class="font-['Volkhov'] font-bold text-[#101828] text-[32px] sm:text-[42px] md:text-[52px] leading-tight">
            {{ t('software.title') }}
          </h2>
        </Reveal>
      </div>

      <!-- Timeline row (desktop only) -->
      <Reveal :delay="120">
        <div class="relative hidden md:flex items-center mb-8">
          <div
            class="absolute left-[calc(12.5%-8px)] right-[calc(12.5%-8px)] top-1/2 -translate-y-1/2 h-[3px]"
            style="background: linear-gradient(to right, #6c5ce7, #a29bfe, #c7d2fe, #e0e7ff)"
          />
          <div class="grid grid-cols-4 w-full relative z-10">
            <div v-for="(_, i) in cards" :key="i" class="flex justify-center">
              <div
                class="h-5 w-5 rounded-full shadow-[0_0_0_5px_rgba(108,92,231,0.18)]"
                style="background: linear-gradient(135deg, #6c5ce7, #a29bfe)"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <Reveal v-for="(card, index) in cards" :key="card.key" :delay="index * 70">
          <div
            class="h-full rounded-2xl bg-white border border-transparent p-5 sm:p-6 shadow-[0_2px_16px_rgba(15,23,42,0.06)] flex flex-col transition-all"
            :class="card.clickable ? 'cursor-pointer hover:shadow-[0_8px_30px_rgba(108,92,231,0.14)] hover:border-[#c4b5fd]' : ''"
            @click="card.clickable ? emit('navigate', card.page!) : undefined"
          >
            <h3 class="font-sans font-bold text-[#101828] text-base sm:text-lg leading-snug mb-3 whitespace-pre-line">
              {{ t(`software.cards.${card.key}.title`) }}
            </h3>
            <p class="font-sans text-sm leading-relaxed text-[#4a5565] flex-1">
              {{ card.plain }}
              <strong>{{ card.bold }}</strong>
            </p>
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
import type { PageName } from '@/App.vue'

const { t, locale } = useI18n({ useScope: 'global' })

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const cards = computed(() => [
  {
    key: 'dx',
    clickable: true,
    page: 'gttn-dx' as PageName,
    plain: t('software.cards.dx.plain'),
    bold:  t('software.cards.dx.bold'),
  },
  {
    key: 'navi',
    clickable: true,
    page: 'gttn-navi' as PageName,
    plain: t('software.cards.navi.plain'),
    bold:  t('software.cards.navi.bold'),
  },
  {
    key: 'tx',
    clickable: true,
    page: 'gttn-tx' as PageName,
    plain: t('software.cards.tx.plain'),
    bold:  t('software.cards.tx.bold'),
  },
  {
    key: 'next',
    clickable: false,
    page: null,
    plain: t('software.cards.next.plain'),
    bold:  t('software.cards.next.bold'),
  },
])
</script>
