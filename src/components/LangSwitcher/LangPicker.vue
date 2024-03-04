<script setup lang="ts">
import { defineModel } from 'vue'
import { useLocale } from '@/hooks'
import { SelectList } from '@/components'

const { list: localeList } = useLocale()

const modelValue = defineModel<boolean>('modelValue', {
  required: true,
  default: false,
})
</script>

<template>
  <el-dialog
    v-model="modelValue"
    class="min-w-[10vw] max-w-[300px] w-[20vw]"
    align-center
  >
    <SelectList v-model="$i18n.locale" :list="localeList" value-key="locale">
      <template #default="{ item }">
        {{ item.label }}
      </template>
    </SelectList>
  </el-dialog>
</template>
