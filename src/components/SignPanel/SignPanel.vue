<script setup lang="ts">
import { ref } from 'vue'
import { useModelStore } from '@/stores'
import { FlagIcon, RegionSelector } from '@/components'

const { model } = useModelStore()

const regionSelectorVisible = ref(false)
</script>

<template>
  <div class="flex gap-2 items-center">
    <el-button class="flex-auto" @click="() => (regionSelectorVisible = true)">
      {{ $t('regionSelector.selectRegion') }}
    </el-button>
    <el-icon v-if="model.regionName" class="flex-none flag">
      <FlagIcon :name="model.regionName"></FlagIcon>
    </el-icon>
  </div>

  <RegionSelector v-model="regionSelectorVisible"></RegionSelector>
</template>

<style lang="scss" scoped>
.flag {
  width: 2rem;
}
</style>
