<template>
  <HomeHero @navigate="forward" />
  <ProblemSection />
  <TechSection />
  <PipelineSection @navigate="forward" />
  <CostSavingSection />
  <GreenProcessSection />
</template>

<script setup lang="ts">
import HomeHero from '@/sections/HomeHero.vue'
import ProblemSection from '@/sections/ProblemSection.vue'
import TechSection from '@/sections/TechSection.vue'
import PipelineSection from '@/sections/PipelineSection.vue'
import CostSavingSection from '@/sections/CostSavingSection.vue'
import GreenProcessSection from '@/sections/GreenProcessSection.vue'
import type { PageName } from '@/App.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

function forward(page: PageName) {
  emit('navigate', page)
}
</script>
