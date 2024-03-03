<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { LangSwitcher, SignPanel, SignPreview } from './components'

useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
</script>

<template>
  <el-container class="absolute inset-0 p-2 gap-2" direction="horizontal">
    <el-aside class="!flex-1 !p-0 flex flex-col gap-2">
      <el-scrollbar class="flex-auto">
        <SignPanel></SignPanel>
      </el-scrollbar>
      <div class="flex-none flex justify-end">
        <LangSwitcher></LangSwitcher>
      </div>
    </el-aside>
    <el-main class="!flex-3 !p-0">
      <SignPreview></SignPreview>
    </el-main>
  </el-container>
</template>
