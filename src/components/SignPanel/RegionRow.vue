<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useModelStore } from '@/stores'
import { useRegion } from '@/hooks'
import { FlagIcon, RegionSelector } from '@/components'

const { model } = storeToRefs(useModelStore())
const { getRegion } = useRegion()

const regionSelectorVisible = ref(false)

const regionInfo = computed(() => getRegion(model.value.regionName))
</script>

<template>
  <div class="flex gap-2 items-start">
    <span class="flex-auto">
      {{ $t('regionSelector.rowLabel') }}
      <el-icon class="flag">
        <FlagIcon :name="model.regionName"></FlagIcon>
      </el-icon>
      <span class="break-all">{{ $t(regionInfo.labelTag) }}</span>
    </span>
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
  margin: 0 0.4rem;
  vertical-align: baseline;
}
</style>
