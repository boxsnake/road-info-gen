<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { SignPanel, SignPreview } from './components'

useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
</script>

<template>
  <el-container class="absolute inset-0 p-2 gap-2" direction="horizontal">
    <el-aside class="!flex-1 !p-0">
      <el-scrollbar>
        <SignPanel></SignPanel>
      </el-scrollbar>
    </el-aside>
    <el-main class="!flex-3 !p-0">
      <SignPreview></SignPreview>
    </el-main>
  </el-container>
</template>
