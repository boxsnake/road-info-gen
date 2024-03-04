<script setup lang="ts">
import { ref, defineModel } from 'vue'
import { useRegion } from '@/hooks'
import { useModelStore } from '@/stores'
import { SelectList, FlagIcon } from '@/components'

const { updateRegion } = useModelStore()
const { list: regionOptions } = useRegion()

const modelValue = defineModel({
  type: Boolean,
  default: false,
})

const emits = defineEmits<{
  'update:modelValue': [v: boolean]
}>()

const selectedRegion = ref('')

const handleClose = () => {
  selectedRegion.value = ''
}

const handleCancel = () => {
  emits('update:modelValue', false)
}

const handleConfirm = () => {
  updateRegion(selectedRegion.value)
  emits('update:modelValue', false)
}
</script>

<template>
  <el-dialog
    v-model="modelValue"
    align-center
    :show-close="false"
    :close-on-click-modal="false"
    class="min-w-[20vw] max-w-[400px] w-[30vw]"
    @close="handleClose"
  >
    <SelectList v-model="selectedRegion" :list="regionOptions" value-key="name">
      <template #icon="{ item }">
        <FlagIcon class="flag" :name="item.name"></FlagIcon>
      </template>
      <template #default="{ item }">
        <div class="label">{{ $t(item.labelTag) }}</div>
      </template>
    </SelectList>

    <template #footer>
      <div class="flex flex-row-reverse gap-2">
        <el-button
          type="primary"
          :disabled="!selectedRegion"
          @click="handleConfirm"
        >
          {{ $t('common.button.confirm') }}
        </el-button>
        <el-button @click="handleCancel">
          {{ $t('common.button.cancel') }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.flag {
  flex: none;
  width: 2rem;
}
.label {
  flex: auto;
  padding-left: 0.5rem;
}
</style>
