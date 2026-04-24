<template>
  <div ref="el" :class="wrapperClass" :style="wrapperStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type Props = {
  /** Delay in ms */
  delay?: number
  /** Once visible, keep revealed */
  once?: boolean
  /** Extra classes applied to the wrapper */
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  once: true,
})

const el = ref<HTMLElement | null>(null)
const revealed = ref(false)
let io: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          revealed.value = true
          if (props.once) io?.disconnect()
        } else if (!props.once) {
          revealed.value = false
        }
      }
    },
    { threshold: 0.15 }
  )
  io.observe(el.value)
})

onBeforeUnmount(() => {
  io?.disconnect()
})

const wrapperStyle = computed(() => ({
  transitionDelay: `${props.delay}ms`,
}))

const wrapperClass = computed(() => {
  const base = 'transition-all duration-700 ease-out will-change-transform will-change-opacity'
  const state = revealed.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
  return [base, state, props.class].filter(Boolean).join(' ')
})
</script>
