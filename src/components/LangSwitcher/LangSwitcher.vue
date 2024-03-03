<script setup lang="ts">
import { ref } from 'vue'
import { SvgIcon } from '@/components'
import { LangPicker } from '.'

const pickerVisible = ref(false)
</script>

<template>
  <el-button type="primary" @click="() => (pickerVisible = true)">
    <template #icon>
      <SvgIcon name="i18n"></SvgIcon>
    </template>
    {{ $t('globalToolbar.changeLocale') }}
  </el-button>

  <LangPicker v-model="pickerVisible"></LangPicker>
</template>
