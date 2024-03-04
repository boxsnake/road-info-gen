import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Model } from './types'

export const useModelStore = defineStore('model-store', () => {
  const _model = ref<Model>({
    regionName: '',
    modelName: '',
    options: {},
  })

  const updateRegion = (regionName: string) => {
    if (_model.value.regionName === regionName) {
      return
    }
    _model.value.regionName = regionName as Model['regionName']
    _model.value.modelName = ''
    _model.value.options = {}
  }

  return {
    model: _model,

    updateRegion,
  }
})
