import { Plugin } from 'vue'
import { createI18n, MessageFunctions } from 'vue-i18n'

export const localePath = './language/'
export const localeFile = import.meta.glob<MessageFunctions>('./language/*.json', { eager: true, import: 'default' })

const messages = Object.fromEntries(
  Object.entries(localeFile).map(([key, value]) => {
    return [key.slice(localePath.length, -5), value]
  })
)

export const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: 'en',
  globalInjection: false,
  messages
})

const install: Plugin = app => {
  app.config.globalProperties.$t = (value: string) => {
    if (value) return i18n.global.t(value)
    return ''
  }
  app.use(i18n)
}

export default install
