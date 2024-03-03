import { progressProps } from 'element-plus'; import { computed } from 'vue';
<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { IconI18n } from '.'

const props = defineProps<{
  name: string
  color?: string
}>()

const svgComponent = computed(() => {
  return {
    i18n: IconI18n,
  }[props.name]
})

const svgColor = computed(() => props.color || 'var(--el-text-color-regular)')
</script>

<template>
  <el-icon :color="svgColor">
    <component :is="svgComponent"></component>
  </el-icon>
</template>
