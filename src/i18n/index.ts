import { createI18n } from 'vue-i18n'
import type { I18nSchema, I18nLocale } from './types'
import { en, zhHans } from './locale'

const i18n = createI18n<[I18nSchema], I18nLocale>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    'zh-hans': zhHans,
  },
  missing: () => '',
})

export default i18n
