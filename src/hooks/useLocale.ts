import { keyBy } from 'lodash'

const localeList = [
  { locale: 'en', label: 'English' },
  { locale: 'zh-hans', label: '简体中文' },
]

const localeMap = keyBy(localeList, 'locale')

export const useLocale = () => {
  const getLocale = (locale: string): Record<string, unknown> =>
    localeList[locale] ?? {}

  return {
    list: localeList,
    map: localeMap,

    getLocale,
  }
}
