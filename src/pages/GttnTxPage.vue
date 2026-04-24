<template>
  <!-- Hero -->
  <section class="relative h-[56vw] min-h-[380px] max-h-[600px] overflow-hidden bg-[#0d1b2a]">
    <img :src="heroImg" alt="GTTN-Tx hero" class="absolute inset-0 w-full h-full object-cover object-center opacity-65" />
    <div class="absolute inset-0" style="background: linear-gradient(to right, rgba(5,12,30,0.88) 0%, rgba(5,12,30,0.55) 55%, transparent 100%)" />
    <div class="relative z-10 h-full flex items-center">
      <div class="max-w-[1280px] mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div class="max-w-[560px] pt-20">
          <h1 class="font-['Volkhov'] font-bold text-white text-[36px] sm:text-[48px] lg:text-[56px] leading-tight">
            GTTN-Tx
          </h1>
          <p class="mt-3 text-white/80 font-sans text-base sm:text-lg leading-relaxed">
            Targeted therapy delivery system for precision oncology treatment.
          </p>
          <button class="mt-6 inline-flex items-center justify-center rounded-[6px] bg-white px-6 py-3 font-semibold text-[#101828] text-sm sm:text-base hover:-translate-y-0.5 transition-transform">
            Contact for Demo
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Coming Soon content -->
  <section class="py-20 sm:py-28 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center">
      <div class="max-w-2xl mx-auto">
        <div class="inline-block rounded-full bg-[#009689]/10 text-[#009689] text-xs font-semibold uppercase tracking-widest px-5 py-1.5 mb-8">
          IN DEVELOPMENT
        </div>
        <h2 class="font-['Volkhov'] font-bold text-[#101828] text-3xl sm:text-4xl lg:text-5xl mb-6">
          Precision Therapy. Coming 2029.
        </h2>
        <p class="font-sans text-[#475467] text-base sm:text-lg leading-relaxed mb-10">
          GTTN-Tx has obtained classification as a drug-device combination and is now under innovative device review. With projected approval by 2029, it represents the next frontier in targeted oncology treatment—delivering therapeutic payloads directly to tumor cell nuclei with unprecedented precision.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-2xl bg-[#f8faff] border border-[#e5e7eb] p-6 text-center"
          >
            <p class="font-['Volkhov'] font-bold text-[#009689] text-3xl mb-2">{{ stat.value }}</p>
            <p class="font-sans text-[#475467] text-sm">{{ stat.label }}</p>
          </div>
        </div>

        <div class="rounded-3xl bg-[#0d1b2a] p-8 sm:p-10 text-white text-left">
          <h3 class="font-['Volkhov'] font-bold text-xl sm:text-2xl mb-4">Key Development Milestones</h3>
          <ul class="space-y-4">
            <li v-for="milestone in milestones" :key="milestone.label" class="flex gap-4 items-start">
              <div class="h-6 w-6 rounded-full flex-shrink-0 mt-0.5"
                :class="milestone.done ? 'bg-[#009689]' : 'border-2 border-white/25'"
              >
                <svg v-if="milestone.done" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-sm text-white">{{ milestone.label }}</p>
                <p class="text-white/55 text-xs mt-0.5">{{ milestone.desc }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImg from '@/assets/gtt/5d65a2acd9cbca36d942b6f6bd3cd48054e18b26.jpg'

const stats = [
  { value: '> 50%', label: 'Nuclear targeting efficiency' },
  { value: '2029', label: 'Projected approval' },
  { value: 'Class III', label: 'Drug-device combination' },
]

const milestones = [
  { done: true, label: 'Drug-device combination classification obtained', desc: 'Successfully classified under innovative device pathway' },
  { done: true, label: 'Pre-clinical studies completed', desc: 'Demonstrated efficacy and safety in animal models' },
  { done: false, label: 'Phase I clinical trials', desc: 'Scheduled to begin following regulatory review' },
  { done: false, label: 'Regulatory submission', desc: 'Target submission ahead of 2027' },
  { done: false, label: 'Commercial approval', desc: 'Projected by 2029' },
]
</script>
