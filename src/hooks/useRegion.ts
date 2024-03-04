import { keyBy } from 'lodash'

interface RegionOption extends Record<string, unknown> {
  name: string
  labelTag: string
}

const regionList: RegionOption[] = [
  { name: 'Japan', labelTag: 'regionSelector.regionLabel.japan' },
]

const regionMap = keyBy(regionList, 'name')

export const useRegion = () => {
  const getRegion = (regionName: string): RegionOption =>
    regionMap[regionName] ?? { name: '', labelTag: '' }

  return {
    list: regionList,
    map: regionMap,

    getRegion,
  }
}
