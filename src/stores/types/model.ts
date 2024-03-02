// ==================== 模型选项 ====================
interface BaseOption {}

interface DummyOption extends BaseOption {}

interface JapanRoadNumberOption extends BaseOption {
  leftArrow: boolean
  rightArrow: boolean
  bgColor: 'yellow' | 'green' | 'pink'
  tag: 'hexagon' | 'badge'
  number?: number
}

// ==================== 模型配置 ====================
interface BaseModel {
  regionName: string
  modelName: string
  options: BaseOption
}

export interface DummyModel extends BaseModel {
  regionName: ''
  modelName: ''
  options: DummyOption
}

export interface JapanRoadNumberModel extends BaseModel {
  regionName: 'Japan'
  modelName: 'RoadNumber'
  options: JapanRoadNumberOption
}

// ==================== 模型结构 ====================
export type Model = DummyModel | JapanRoadNumberModel
