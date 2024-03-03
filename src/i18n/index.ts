import { createI18n } from 'vue-i18n'
import type { I18nSchema, I18nLocale } from './types'
import { enUs, zhCn } from './locale'

const i18n = createI18n<[I18nSchema], I18nLocale>({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUs,
    'zh-CN': zhCn,
  },
  missing: () => '',
})

export default i18n
