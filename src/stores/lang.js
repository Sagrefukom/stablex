import { defineStore } from 'pinia'
import i18n from '@/i18n'

export const useLangStore = defineStore('lang', {
  state: () => {
    return { lang: 'uk' }
  },
  actions: {
    changeLang(e) {
      this.lang = e.target.value
      i18n.global.locale.value = e.target.value
    }
  }
})
