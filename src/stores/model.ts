import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ModelTypes } from './types'

export const useModelStore = defineStore('model-store', () => {
  const _model = ref<ModelTypes>({
    regionName: '',
    modelName: '',
  })

  const updateRegion = <V extends ModelTypes>(regionName: V['regionName']) => {
    if (_model.value.regionName === regionName) {
      return
    }
    _model.value = {
      regionName,
      modelName: '',
    } as V
  }

  const updateModel = <V extends ModelTypes>(
    modelName: V['modelName'],
    options: Omit<V, 'regionName ' | 'modelName'>,
  ) => {
    if (!_model.value.regionName) {
      return
    } else if (_model.value.modelName === modelName) {
      return
    }
    _model.value = {
      ...options,
      regionName: _model.value.regionName as V['regionName'],
      modelName,
    } as V
  }

  return {
    model: _model,

    updateRegion,
    updateModel,
  }
})
