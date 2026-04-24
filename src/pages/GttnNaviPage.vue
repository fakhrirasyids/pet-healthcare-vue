<template>
  <!-- Hero -->
  <section class="relative h-[56vw] min-h-[380px] max-h-[600px] overflow-hidden bg-[#0d1b2a]">
    <img :src="heroImg" alt="GTTN-Navi hero" class="absolute inset-0 w-full h-full object-cover object-center opacity-70" />
    <div class="absolute inset-0" style="background: linear-gradient(to right, rgba(5,12,30,0.88) 0%, rgba(5,12,30,0.55) 55%, transparent 100%)" />
    <div class="relative z-10 h-full flex items-center">
      <div class="max-w-[1280px] mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div class="max-w-[560px] pt-20">
          <h1 class="font-['Volkhov'] font-bold text-white text-[36px] sm:text-[48px] lg:text-[56px] leading-tight">
            GTTN-Navi
          </h1>
          <p class="mt-3 text-white/80 font-sans text-base sm:text-lg leading-relaxed">
            Precision intraoperative navigation system for real-time tumor visualization.
          </p>
          <button class="mt-6 inline-flex items-center justify-center rounded-[6px] bg-white px-6 py-3 font-semibold text-[#101828] text-sm sm:text-base hover:-translate-y-0.5 transition-transform">
            Contact for Demo
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 1: Maps every lesion -->
  <section class="py-14 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div class="order-2 lg:order-1 rounded-2xl overflow-hidden border border-black/8 bg-white p-3 shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
          <img :src="imgPathology" alt="Colorectal carcinoma pathology" class="w-full rounded-xl object-cover" />
        </div>
        <div class="order-1 lg:order-2">
          <p class="font-sans font-semibold text-[#009689] text-sm uppercase tracking-[0.1em] mb-3">GTTN-NAVI: EMPOWERING PATHOLOGISTS AND SURGEONS</p>
          <h2 class="font-['Volkhov'] font-bold text-[#101828] text-2xl sm:text-3xl lg:text-4xl mb-5">
            Maps every lesion<br />Guides every move
          </h2>
          <p class="font-sans text-[#344054] text-sm sm:text-base leading-relaxed">
            From hidden tumors to surgical targets, GTTNano creates personalized tumor maps for precision decision-making. GTTN staining precisely highlights the nuclei of tumor cells, allowing doctors to clearly see tumor boundaries and metastases—guiding surgeons and oncologists to target cancer with unmatched precision.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Digital Pathology -->
  <section class="py-14 sm:py-16 lg:py-20 bg-[#f8f9fa]">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p class="font-sans font-semibold text-[#009689] text-sm uppercase tracking-[0.1em] mb-3">GTTN-NAVI: EMPOWERING PATHOLOGISTS AND SURGEONS</p>
          <h2 class="font-['Volkhov'] font-bold text-[#101828] text-2xl sm:text-3xl lg:text-4xl mb-5">
            Digital Pathology
          </h2>
          <p class="font-sans text-[#344054] text-sm sm:text-base leading-relaxed">
            GTTN-GM is a novel GTTN derivative engineered with both strong fluorescence and visible coloration, making it ideal for intraoperative visual guidance. Surgeons can now visibly locate and precisely remove metastatic lymph nodes during procedures—without relying solely on imaging devices.
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden border border-black/8 bg-white p-3 shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
          <img :src="imgDigitalPath" alt="Digital pathology H&E staining" class="w-full rounded-xl object-cover" />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Video / Smart Endoscopy -->
  <section class="py-14 sm:py-16 lg:py-20 bg-[#0a0a0a]">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <!-- Video placeholders -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="label in ['Tumor', 'After Removal']"
            :key="label"
            class="relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 aspect-video flex items-center justify-center group cursor-pointer"
          >
            <div class="absolute inset-0 bg-black/40" />
            <div class="relative z-10 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span class="absolute bottom-3 left-3 text-white text-xs font-medium">{{ label }}</span>
          </div>
        </div>
        <div>
          <p class="font-sans font-semibold text-[#009689] text-sm uppercase tracking-[0.1em] mb-3">GTTN-NAVI: EMPOWERING SMART ENDOSCOPY</p>
          <h2 class="font-['Volkhov'] font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-5">
            Image to Insight,<br />Instantly.
          </h2>
          <p class="font-sans text-white/65 text-sm sm:text-base leading-relaxed">
            GTTN in-situ acts as a luminous marker during endoscopy, highlighting potential tumor sites as they appear. Coupled with AI-driven analysis, it enables doctors to rapidly identify suspicious lesions and guide real-time interventions—ensuring precise and timely treatment at the source.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: CFDA Certification -->
  <section class="py-14 sm:py-16 lg:py-20 bg-[#0d1b2a]">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center">
      <div class="inline-block rounded-full border border-white/25 px-5 py-1.5 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
        CERTIFICATION
      </div>
      <h2 class="font-['Volkhov'] font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-4">
        CFDA Registration Approval Secured
      </h2>
      <p class="font-sans text-white/65 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-12">
        Our products have already received cFDA registration approval, demonstrating compliance with stringent regulatory standards for safety, quality, and clinical applicability.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-left">
        <div class="flex justify-center">
          <div class="rounded-2xl overflow-hidden border border-white/15 bg-white/5 p-3 max-w-[280px] w-full">
            <img :src="imgCert" alt="CFDA Certificate" class="w-full rounded-xl object-cover" />
          </div>
        </div>
        <p class="font-sans text-white/65 text-sm sm:text-base leading-relaxed">
          With cFDA registration approval secured, these products have entered commercial deployment, supporting both clinical screening workflows and translational research. Their dual-use capability bridges the gap between laboratory discovery and real-world clinical application, accelerating innovation in oncology diagnostics.
        </p>
      </div>
    </div>
  </section>

  <!-- Section 5: Value Proposition -->
  <section class="py-14 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p class="font-sans font-semibold text-[#009689] text-sm uppercase tracking-[0.1em] mb-3">VALUE PROPOSITION</p>
          <h2 class="font-['Volkhov'] font-bold text-[#101828] text-2xl sm:text-3xl lg:text-4xl mb-5">
            Define the margins. Detect the spread. Deliver precision.
          </h2>
          <p class="font-sans text-[#344054] text-sm sm:text-base leading-relaxed mb-8">
            GTTN-Navi is a next-generation surgical navigation device that provides real-time visualization of tumor boundaries during procedures, enables surgeons to identify malignant tissue with greater precision.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              v-for="point in valuePoints"
              :key="point.text"
              class="flex flex-col items-center text-center p-4 rounded-2xl bg-[#f0f8ff] gap-3"
            >
              <div class="h-10 w-10 rounded-full bg-[#009689]/15 flex items-center justify-center">
                <component :is="point.icon" :size="20" class="text-[#009689]" />
              </div>
              <p class="font-sans text-xs sm:text-sm font-medium text-[#101828] leading-snug">{{ point.text }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="rounded-full overflow-hidden border border-black/8 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
            <img :src="imgCells" alt="Cell visualization" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Eye, Target, Stethoscope } from 'lucide-vue-next'
import heroImg from '@/assets/gtt/96f118309c104bbe9320c0a3eec34d6a987a4d08.png'
import imgPathology from '@/assets/gtt/da1ccd136ab7b7674231ef1c9f92067f4f6085ca.png'
import imgDigitalPath from '@/assets/gtt/d6aafd86011b0dc2a9f2297e270a32d056fa2215.png'
import imgCert from '@/assets/gtt/592af24b3ae7436288551302e2953e30443d299e.png'
import imgCells from '@/assets/gtt/b4b52b5a9c4d381b2224cbb6179bdb94a1879290.png'

const valuePoints = [
  { icon: Eye, text: 'Real-time tumor margin visualization' },
  { icon: Target, text: 'High spatial accuracy for surgical guidance' },
  { icon: Stethoscope, text: 'Class III medical device under Breakthrough Device review' },
]
</script>
