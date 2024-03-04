import { keyBy } from 'lodash'

const regionList = [{ name: 'Japan', labelTag: 'regionSelector.label.japan' }]

const regionMap = keyBy(regionList, 'name')

export const useRegion = () => {
  const getRegion = (regionName: string): Record<string, unknown> =>
    regionMap[regionName] ?? {}

  return {
    list: regionList,
    map: regionMap,

    getRegion,
  }
}
