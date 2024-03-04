export interface I18nSchema {
  common: {
    button: {
      confirm: string
      cancel: string
    }
  }
  globalToolbar: {
    changeLocale: string
  }
  regionSelector: {
    selectRegion: string
    label: {
      japan: string
    }
  }
}

export type I18nLocale = 'en-US' | 'zh-CN'
