<script setup lang="ts">
import { ref, computed } from 'vue'
import { useModelStore } from '@/stores'
import { useRegion } from '@/hooks'
import { FlagIcon, RegionSelector } from '@/components'

const { model } = useModelStore()
const { getRegion } = useRegion()

const regionSelectorVisible = ref(false)

const regionInfo = computed(() => getRegion(model.regionName))
</script>

<template>
  <div class="flex gap-2 items-center">
    <span class="flex-none">
      {{ $t('regionSelector.rowLabel') }}
      <el-icon class="flag">
        <FlagIcon :name="model.regionName"></FlagIcon>
      </el-icon>
      {{ $t(regionInfo.labelTag) }}
    </span>
    <span class="flex-auto"></span>
    <el-button
      class="flex-none"
      type="primary"
      @click="() => (regionSelectorVisible = true)"
    >
      {{ $t('common.button.select') }}
    </el-button>
  </div>

  <RegionSelector v-model="regionSelectorVisible"></RegionSelector>
</template>

<style lang="scss" scoped>
.flag {
  display: inline-block;
  width: 2rem;
  margin: 0 0.2rem;
  vertical-align: baseline;
}
</style>
