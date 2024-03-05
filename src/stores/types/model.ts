// ==================== 模型选项 ====================
interface BaseOption {
  regionName: string
  modelName: string
}

export interface DummyOption extends BaseOption {
  regionName: ''
  modelName: ''
}

export interface JapanRoadNumberOption extends BaseOption {
  regionName: 'Japan'
  modelName: 'RoadNumber'
  leftArrow: boolean
  rightArrow: boolean
  bgColor: 'yellow' | 'green' | 'pink'
  tag: 'hexagon' | 'badge'
  number?: number
}

// ==================== 模型结构 ====================
export type ModelMap = {
  '': DummyOption
  japanRoadNumber: JapanRoadNumberOption
}

export type ModelMapKeys = keyof ModelMap

export type ModelTypes = ModelMap[ModelMapKeys]
