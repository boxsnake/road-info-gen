<script setup lang="ts">
import { computed } from 'vue'
import FlagJapan from '@/assets/flags/japan.svg'

const flagMap: Record<string, string> = {
  Japan: FlagJapan,
}

const props = defineProps<{
  name: string
}>()

const flagUrl = computed(() => flagMap[props.name] ?? '')
</script>

<template>
  <img
    v-if="flagUrl"
    class="shadow-md shadow-gray-300 rounded-md"
    :src="flagUrl"
  />
</template>
