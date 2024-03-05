<script setup lang="ts">
import { useModelStore } from '@/stores'
import { RegionRow, ModelRow } from '.'

const { model } = useModelStore()
</script>

<template>
  <RegionRow></RegionRow>
  <ModelRow v-if="model.regionName"></ModelRow>
</template>
