import { createI18n } from 'vue-i18n'
import en from './en'
import uk from './uk'

const i18n = new createI18n({
  legacy: false,
  locale: 'uk',
  fallbackLocale: 'uk',
  globalInjection: true,
  useScope: 'global',
  messages: {
    uk,
    en
  }
})
export default i18n
