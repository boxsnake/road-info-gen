<script setup lang="ts">
import { defineModel } from 'vue'
import { SelectList } from '..'

const modelValue = defineModel<boolean>('modelValue', {
  required: true,
  default: false,
})

const langs = [
  { locale: 'en', label: 'English' },
  { locale: 'zh-hans', label: '简体中文' },
]
</script>

<template>
  <el-dialog
    v-model="modelValue"
    class="min-w-[10vw] max-w-[300px] w-[20vw]"
    align-center
  >
    <SelectList v-model="$i18n.locale" :list="langs" value-key="locale">
      <template #default="{ item }">
        {{ item.label }}
      </template>
    </SelectList>
  </el-dialog>
</template>
