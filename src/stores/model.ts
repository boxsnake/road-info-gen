import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Model } from './types'

export const useModelStore = defineStore('model-store', () => {
  const _model = ref<Model>({
    regionName: '',
    modelName: '',
    options: {},
  })

  return {
    model: _model,
  }
})
