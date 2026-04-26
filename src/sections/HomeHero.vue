<template>
  <section class="relative isolate w-full overflow-hidden bg-[#0a1226]">
    <Transition name="hero-fade" mode="out-in">
      <img
        v-if="active.background"
        :key="active.background"
        :src="active.background"
        :alt="active.alt"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </Transition>
    <div
      class="absolute inset-0 transition-colors duration-500"
      :class="active.background ? 'bg-black/45' : 'bg-gradient-to-b from-[#1d4ed8] to-[#1e3a8a]'"
      aria-hidden="true"
    />

    <div class="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24">
      <Transition name="hero-content" mode="out-in">
        <div :key="active.key" class="grid min-h-[430px] grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div class="lg:col-span-7 text-white">
            <p v-if="active.kicker" class="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/70">
              {{ active.kicker }}
            </p>
            <h1 class="font-['Volkhov'] font-bold text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.05] tracking-[-0.02em] max-w-[760px]">
              {{ active.title }}
            </h1>
            <p class="mt-4 md:mt-5 text-[15px] md:text-[17px] text-white/85 leading-[1.6] max-w-[520px]">
              {{ active.subtitle }}
            </p>

            <div class="mt-8 md:mt-10">
              <button
                class="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-[14px] md:text-[15px] font-semibold text-[#0a1226] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
                @click="emit('navigate', active.target)"
              >
                {{ active.cta }}
              </button>
            </div>
          </div>

          <div v-if="active.image" class="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              :src="active.image"
              :alt="active.alt"
              class="w-full max-w-[420px] md:max-w-[480px] lg:max-w-[520px] h-auto select-none pointer-events-none"
            />
          </div>
        </div>
      </Transition>

      <div class="mt-10 flex items-center justify-center gap-2.5">
        <button
          v-for="(slide, i) in slides"
          :key="slide.key"
          type="button"
          class="h-2.5 rounded-full transition-all duration-300"
          :class="i === activeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/35 hover:bg-white/60'"
          :aria-label="`${t('sugar.hero.goToSlide')} ${i + 1}`"
          @click="setSlide(i)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import imgHero from '@/assets/sugar/asset-hero-1.png'
import bgIsomalt from '@/assets/sugar/bg-hero-2.png'
import bgFos from '@/assets/sugar/bg-hero-3.png'
import bgRebm from '@/assets/sugar/bg-hero-4.png'
import type { PageName } from '@/App.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const { t } = useI18n({ useScope: 'global' })
const activeIndex = ref(0)
let timer: number | undefined

const slides = computed(() => [
  {
    key: 'home',
    title: t('sugar.hero.slides.home.title'),
    subtitle: t('sugar.hero.slides.home.subtitle'),
    cta: t('sugar.hero.slides.home.cta'),
    alt: t('sugar.hero.slides.home.alt'),
    image: imgHero,
    target: 'contact' as PageName,
  },
  {
    key: 'isomalt',
    kicker: t('sugar.hero.productKicker'),
    title: t('sugar.hero.slides.isomalt.title'),
    subtitle: t('sugar.hero.slides.isomalt.subtitle'),
    cta: t('sugar.hero.productCta'),
    alt: t('sugar.hero.slides.isomalt.alt'),
    background: bgIsomalt,
    target: 'isomalt' as PageName,
  },
  {
    key: 'fos',
    kicker: t('sugar.hero.productKicker'),
    title: t('sugar.hero.slides.fos.title'),
    subtitle: t('sugar.hero.slides.fos.subtitle'),
    cta: t('sugar.hero.productCta'),
    alt: t('sugar.hero.slides.fos.alt'),
    background: bgFos,
    target: 'fos' as PageName,
  },
  {
    key: 'rebm',
    kicker: t('sugar.hero.productKicker'),
    title: t('sugar.hero.slides.rebm.title'),
    subtitle: t('sugar.hero.slides.rebm.subtitle'),
    cta: t('sugar.hero.productCta'),
    alt: t('sugar.hero.slides.rebm.alt'),
    background: bgRebm,
    target: 'rebm' as PageName,
  },
])

const active = computed(() => slides.value[activeIndex.value])

function setSlide(index: number) {
  activeIndex.value = index
  restartTimer()
}

function restartTimer() {
  if (timer) window.clearInterval(timer)
  timer = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % slides.value.length
  }, 6000)
}

onMounted(restartTimer)
onBeforeUnmount(() => {
  if (timer) window.clearInterval(timer)
})
</script>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active,
.hero-content-enter-active,
.hero-content-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
.hero-content-enter-from,
.hero-content-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
