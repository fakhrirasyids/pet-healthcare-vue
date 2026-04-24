<template>
  <section
    class="relative isolate h-[100svh] min-h-[100svh] w-screen overflow-hidden bg-[#020b1f]"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
    @focusin="stopAutoplay"
    @focusout="startAutoplay"
  >
    <div
      class="relative h-full w-full"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <!-- Background slides -->
      <div
        v-for="(slide, index) in slides"
        :key="slide.key"
        class="absolute inset-0 transition-opacity duration-700 ease-out"
        :class="index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
        :aria-hidden="index !== activeIndex"
      >
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="h-full w-full object-cover"
          :style="{ objectPosition: slide.objectPosition }"
        />
        <div
          class="absolute inset-0"
          :style="{
            background:
              'linear-gradient(90deg, rgba(2,10,33,0.92) 0%, rgba(2,10,33,0.85) 30%, rgba(3,12,38,0.55) 60%, rgba(0,0,0,0.15) 100%)'
          }"
        />
        <div class="absolute inset-0 bg-[#030d25]/15" />
      </div>

      <!-- Content -->
      <div class="relative z-20 flex h-full items-center">
        <div class="max-w-[1280px] mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <Transition name="hero-copy" mode="out-in">
            <div
              :key="activeSlide.key"
              class="max-w-[680px] pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-28 lg:pb-32 text-white"
            >
              <h1
                class="font-['Volkhov'] font-bold leading-[1.05] tracking-[-0.02em] text-[38px] sm:text-[52px] md:text-[62px] lg:text-[70px] xl:text-[76px]"
              >
                {{ activeSlide.title }}
              </h1>

              <p
                v-if="activeSlide.subtitle"
                class="mt-4 sm:mt-5 max-w-[560px] font-sans text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.55] text-white/85"
              >
                {{ activeSlide.subtitle }}
              </p>

              <div class="mt-8 sm:mt-10">
                <button
                  class="inline-flex min-w-[180px] items-center justify-center rounded-[6px] bg-white px-6 py-3 text-center font-sans text-base font-semibold text-[#111827] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5 max-sm:w-full max-sm:min-w-0"
                  @click="handleCta(activeSlide)"
                >
                  {{ activeSlide.cta }}
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Pagination dots -->
      <div class="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2">
        <div class="pointer-events-auto inline-flex items-center gap-2.5 rounded-full bg-black/30 px-4 py-2.5 backdrop-blur-sm">
          <button
            v-for="(slide, index) in slides"
            :key="`${slide.key}-dot`"
            type="button"
            class="h-2.5 w-2.5 rounded-full transition-all duration-300"
            :class="index === activeIndex ? 'bg-white' : 'bg-white/35 hover:bg-white/55'"
            :aria-label="`Go to slide ${index + 1}`"
            @click="goToSlide(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { PageName } from '@/App.vue'

import heroSlide01 from '@/assets/gtt/12b1ceaf647f00d1aa5ee32ec916614e30e3aa5f.png'
import heroSlide02 from '@/assets/gtt/c0ab7a1d4dda2bd0ad42477b59706868447935b6.png'
import heroSlide03 from '@/assets/gtt/96f118309c104bbe9320c0a3eec34d6a987a4d08.png'
import heroSlide04 from '@/assets/gtt/5d65a2acd9cbca36d942b6f6bd3cd48054e18b26.jpg'

type SlideItem = {
  key: string
  title: string
  subtitle: string
  cta: string
  page: PageName | null
  alt: string
  image: string
  objectPosition: string
}

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const activeIndex = ref(0)
const autoplayMs = 5000
let autoplayTimer: number | null = null
const touchStartX = ref(0)

const slides: SlideItem[] = [
  {
    key: 'future',
    title: 'The Future of Early Cancer Detection',
    subtitle: "World's first AI-native, nano-precision platform designed to revolutionize how we detect and treat cancer.",
    cta: 'Contact for Demo',
    page: 'contact',
    alt: 'The Future of Early Cancer Detection',
    image: heroSlide01,
    objectPosition: 'center center',
  },
  {
    key: 'dxSci',
    title: 'GTTN-Dx / GTTN-SCI',
    subtitle: 'Early detection and research-grade diagnostics platform, now commercially available.',
    cta: 'View Detail',
    page: 'gttn-dx',
    alt: 'GTTN-Dx / GTTN-SCI',
    image: heroSlide02,
    objectPosition: '72% center',
  },
  {
    key: 'navi',
    title: 'GTTN-Navi',
    subtitle: 'Precision intraoperative navigation system for real-time tumor visualization.',
    cta: 'View Detail',
    page: 'gttn-navi',
    alt: 'GTTN-Navi',
    image: heroSlide03,
    objectPosition: '70% center',
  },
  {
    key: 'tx',
    title: 'GTTN-TX',
    subtitle: 'Targeted therapy delivery system for precision oncology treatment.',
    cta: 'View Detail',
    page: 'gttn-tx',
    alt: 'GTTN-TX',
    image: heroSlide04,
    objectPosition: '72% center',
  },
]

const activeSlide = computed(() => slides[activeIndex.value])

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

function prevSlide() {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

function goToSlide(index: number) {
  activeIndex.value = index
  restartAutoplay()
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = window.setInterval(nextSlide, autoplayMs)
}

function stopAutoplay() {
  if (autoplayTimer !== null) {
    window.clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function restartAutoplay() {
  stopAutoplay()
  startAutoplay()
}

function handleCta(slide: SlideItem) {
  if (slide.page) emit('navigate', slide.page)
}

function onTouchStart(event: TouchEvent) {
  touchStartX.value = event.changedTouches[0]?.clientX ?? 0
  stopAutoplay()
}

function onTouchEnd(event: TouchEvent) {
  const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.value
  if (Math.abs(deltaX) > 50) {
    deltaX < 0 ? nextSlide() : prevSlide()
  }
  startAutoplay()
}

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)
</script>

<style scoped>
.hero-copy-enter-active,
.hero-copy-leave-active {
  transition: all 0.4s ease;
}
.hero-copy-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.hero-copy-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
