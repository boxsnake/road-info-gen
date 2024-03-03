import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import I18n from './i18n'
import 'tailwindcss/tailwind.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/styles/app.scss'

createApp(App)
  .use(I18n)
  .use(createPinia())
  .use(ElementPlus)
  .mount('#app')
  .$nextTick(() => {
    // Remove Preload scripts loading
    postMessage({ payload: 'removeLoading' }, '*')

    // Use contextBridge
    window.ipcRenderer.on('main', (_event, message) => {
      console.log(message)
    })
  })
