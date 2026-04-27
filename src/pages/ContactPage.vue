<template>
  <div class="bg-white">
    <section class="relative isolate overflow-hidden bg-[linear-gradient(115deg,#1638d8_0%,#006fd8_100%)] px-6 md:px-10 lg:px-12 pt-36 md:pt-40 pb-20 md:pb-28 text-center">
      <div class="mx-auto max-w-[900px]">
        <h1 class="font-['Volkhov'] text-[46px] font-bold leading-[1.1] text-white sm:text-[64px] md:text-[78px]">
          Get In Touch
        </h1>
        <p class="mx-auto mt-8 max-w-[790px] text-[20px] leading-[1.6] text-white/80 md:text-[30px]">
          Ready to explore how our innovative sugar alternatives can transform your products? Let's start a conversation.
        </p>
      </div>
    </section>

    <section class="bg-[#effcff] px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div class="mx-auto grid max-w-[1200px] grid-cols-1 gap-7 md:grid-cols-3 lg:gap-9">
        <article
          v-for="card in contactCards"
          :key="card.title"
          class="flex min-h-[255px] flex-col items-center justify-center rounded-2xl border border-[#dce8ee] bg-white px-7 py-10 text-center"
        >
          <div class="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#1f6fd9_0%,#6c3cac_100%)] text-white">
            <component :is="card.icon" :size="30" stroke-width="2.1" />
          </div>
          <h2 class="mt-7 font-['Volkhov'] text-[28px] font-bold text-[#182131]">
            {{ card.title }}
          </h2>
          <p class="mt-5 whitespace-pre-line text-[16px] leading-[1.55] text-[#7b8798]">
            {{ card.details }}
          </p>
        </article>
      </div>
    </section>

    <section class="px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
      <div class="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
        <div class="lg:col-span-6">
          <span class="inline-flex rounded-full bg-[#eaf2ff] px-8 py-2 text-[16px] font-bold uppercase tracking-[0.02em] text-[#1f66d6]">
            Request a Demo
          </span>
          <h2 class="mt-8 max-w-[620px] font-['Volkhov'] text-[38px] font-bold leading-[1.2] text-[#182131] md:text-[56px]">
            Let's Discuss Your Sugar Reduction Goals
          </h2>
          <p class="mt-8 max-w-[650px] text-[19px] leading-[1.7] text-[#6f7a8d]">
            Whether you're looking to reformulate existing products or develop new functional nutrition solutions, our team is ready to help you succeed.
          </p>

          <div class="mt-10 space-y-7">
            <div v-for="step in steps" :key="step.title" class="flex items-start gap-5">
              <div class="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1f6fd9_0%,#6c3cac_100%)] text-[22px] font-semibold text-white">
                {{ step.number }}
              </div>
              <div>
                <h3 class="text-[20px] font-bold text-[#263143]">{{ step.title }}</h3>
                <p class="mt-2 text-[16px] leading-[1.6] text-[#7b8798]">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <form
            class="rounded-[24px] border border-[#e2e7ec] bg-[#fbfcfd] px-6 py-8 shadow-[0_1px_0_rgba(16,24,40,0.02)] md:px-10 md:py-11"
            @submit.prevent
          >
            <label v-for="field in fields" :key="field.id" class="mb-7 block last:mb-0">
              <span class="text-[15px] font-bold text-[#283244]">{{ field.label }}</span>
              <input
                :id="field.id"
                :type="field.type"
                :placeholder="field.placeholder"
                :required="field.required"
                class="mt-3 h-[58px] w-full rounded-xl border border-[#dce3ea] bg-white px-5 text-[16px] text-[#283244] outline-none transition-colors placeholder:text-[#9da5af] focus:border-[#1f66d6]"
              />
            </label>

            <label class="mt-7 block">
              <span class="text-[15px] font-bold text-[#283244]">How can we help? *</span>
              <textarea
                required
                placeholder="Tell us about your project and goals..."
                class="mt-3 min-h-[150px] w-full resize-y rounded-xl border border-[#dce3ea] bg-white px-5 py-4 text-[16px] text-[#283244] outline-none transition-colors placeholder:text-[#9da5af] focus:border-[#1f66d6]"
              />
            </label>

            <button
              type="submit"
              class="mt-8 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(100deg,#1f6fd9_0%,#6c3cac_100%)] px-8 text-[19px] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send Message
              <SendIcon :size="22" stroke-width="2.1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Mail, MapPin, Phone, Send as SendIcon } from 'lucide-vue-next'

const contactCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '3 TAI SENG AVENUE, #04-36\nTAI SENG EXCHANGE\nSingapore 536465',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'contact@8isugar.com\nsales@8isugar.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (800) 555-0199\n+65 6123 4567',
  },
]

const steps = [
  { number: '1', title: 'Tell us about your needs', desc: 'Share your current challenges and goals' },
  { number: '2', title: 'Schedule a consultation', desc: 'Meet with our technical team' },
  { number: '3', title: 'Get a custom solution', desc: 'Receive tailored recommendations' },
]

const fields = [
  { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Smith', required: true },
  { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@company.com', required: true },
  { id: 'company', label: 'Company', type: 'text', placeholder: 'Your Company Name', required: false },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000', required: false },
]
</script>
