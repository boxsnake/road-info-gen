export interface I18nSchema {
  common: {
    button: {
      confirm: string
      cancel: string
      select: string
    }
  }
  globalToolbar: {
    changeLocale: string
  }
  regionSelector: {
    rowLabel: string
    regionLabel: {
      japan: string
    }
  }
}

export type I18nLocale = 'en' | 'zh-hans'
