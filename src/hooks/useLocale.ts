import { keyBy } from 'lodash'

interface LocaleOption extends Record<string, unknown> {
  locale: string
  label: string
}

const localeList: LocaleOption[] = [
  { locale: 'en', label: 'English' },
  { locale: 'zh-hans', label: '简体中文' },
]

const localeMap = keyBy(localeList, 'locale')

export const useLocale = () => {
  const getLocale = (locale: string): LocaleOption =>
    localeMap[locale] ?? { locale: '', label: '' }

  return {
    list: localeList,
    map: localeMap,

    getLocale,
  }
}
