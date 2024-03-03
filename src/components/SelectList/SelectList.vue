<script
  setup
  lang="ts"
  generic="T extends Record<string, unknown>, K extends keyof T, V extends T[K]"
>
import { defineProps, defineEmits, defineModel } from 'vue'

const props = defineProps<{
  list: T[]
  valueKey: K
}>()

const emits = defineEmits<{
  change: [v?: V]
}>()

const modelValue = defineModel<V | null>('modelValue', {
  required: false,
  default: null,
})

const isActived = (targetOpt: T) =>
  modelValue.value === targetOpt[props.valueKey]

const patchValue = (patchOpt: T) => {
  modelValue.value =
    patchOpt[props.valueKey] !== modelValue.value
      ? (patchOpt[props.valueKey] as V)
      : null
  emits('change', patchOpt[props.valueKey] as V)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <div
      v-for="item in list"
      :key="`${item[valueKey as keyof T]}`"
      class="list-row"
      :class="{
        actived: isActived(item),
      }"
      @click="() => patchValue(item)"
    >
      <slot name="icon" :item="item" />
      <slot :item="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-row {
  display: flex;
  cursor: pointer;
  color: var(--el-text-color-regular);
  outline: none;
  padding: 0.3rem 0.5rem;

  &.actived {
    color: var(--el-color-primary);
  }
  &:hover {
    color: var(--el-color-primary);
    background-color: var(--el-color-primary-light-9);
  }
  &:active {
    color: var(--el-button-hover-text-color);
    background-color: var(--el-button-hover-bg-color);
  }
}
</style>
