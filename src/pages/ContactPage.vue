<template>
  <div class="bg-white">
    <section class="relative isolate overflow-hidden bg-[linear-gradient(115deg,#1638d8_0%,#006fd8_100%)] px-6 md:px-10 lg:px-12 pt-36 md:pt-40 pb-20 md:pb-28 text-center">
      <div class="mx-auto max-w-[900px]">
        <h1 class="font-['Volkhov'] text-[46px] font-bold leading-[1.1] text-white sm:text-[64px] md:text-[78px]">
          {{ t('sugar.contact.hero.title') }}
        </h1>
        <p class="mx-auto mt-8 max-w-[790px] text-[20px] leading-[1.6] text-white/80 md:text-[30px]">
          {{ t('sugar.contact.hero.subtitle') }}
        </p>
      </div>
    </section>

    <section class="bg-[#effcff] px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div class="mx-auto grid max-w-[1200px] grid-cols-1 gap-7 md:grid-cols-3 lg:gap-9">
        <article
          v-for="card in contactCards"
          :key="card.key"
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
            {{ t('sugar.contact.form.badge') }}
          </span>
          <h2 class="mt-8 max-w-[620px] font-['Volkhov'] text-[38px] font-bold leading-[1.2] text-[#182131] md:text-[56px]">
            {{ t('sugar.contact.form.title') }}
          </h2>
          <p class="mt-8 max-w-[650px] text-[19px] leading-[1.7] text-[#6f7a8d]">
            {{ t('sugar.contact.form.subtitle') }}
          </p>

          <div class="mt-10 space-y-7">
            <div v-for="step in steps" :key="step.number" class="flex items-start gap-5">
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
              <span class="text-[15px] font-bold text-[#283244]">{{ t('sugar.contact.form.fields.message') }}</span>
              <textarea
                required
                :placeholder="t('sugar.contact.form.fields.messagePlaceholder')"
                class="mt-3 min-h-[150px] w-full resize-y rounded-xl border border-[#dce3ea] bg-white px-5 py-4 text-[16px] text-[#283244] outline-none transition-colors placeholder:text-[#9da5af] focus:border-[#1f66d6]"
              />
            </label>

            <button
              type="submit"
              class="mt-8 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(100deg,#1f6fd9_0%,#6c3cac_100%)] px-8 text-[19px] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              {{ t('sugar.contact.form.fields.submit') }}
              <SendIcon :size="22" stroke-width="2.1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Mail, MapPin, Phone, Send as SendIcon } from 'lucide-vue-next'

const { t, tm } = useI18n({ useScope: 'global' })

const contactCards = computed(() => [
  {
    key: 'visit',
    icon: MapPin,
    title: t('sugar.contact.cards.visit.title'),
    details: t('sugar.contact.cards.visit.details'),
  },
  {
    key: 'email',
    icon: Mail,
    title: t('sugar.contact.cards.email.title'),
    details: t('sugar.contact.cards.email.details'),
  },
  {
    key: 'call',
    icon: Phone,
    title: t('sugar.contact.cards.call.title'),
    details: t('sugar.contact.cards.call.details'),
  },
])

const steps = computed(() => tm('sugar.contact.form.steps') as { number: string; title: string; desc: string }[])

const fields = computed(() => [
  { id: 'name', label: t('sugar.contact.form.fields.name'), type: 'text', placeholder: t('sugar.contact.form.fields.namePlaceholder'), required: true },
  { id: 'email', label: t('sugar.contact.form.fields.email'), type: 'email', placeholder: t('sugar.contact.form.fields.emailPlaceholder'), required: true },
  { id: 'company', label: t('sugar.contact.form.fields.company'), type: 'text', placeholder: t('sugar.contact.form.fields.companyPlaceholder'), required: false },
  { id: 'phone', label: t('sugar.contact.form.fields.phone'), type: 'tel', placeholder: t('sugar.contact.form.fields.phonePlaceholder'), required: false },
])
</script>
