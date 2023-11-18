import { defineStore } from 'pinia'
import i18n from '@/i18n'
// import { ref } from 'vue'

export const useLangStore = defineStore('lang', {
  state: () => {
    const lang = 'uk'
    const isChanging = false
    return { lang, isChanging }
  },
  getters: {
    getIsChanging(state) {
      return state.isChanging
    },
    getLang(state) {
      return state.lang
    }
  },
  actions: {
    changeLang(e) {
      this.lang = e.target.value
      i18n.global.locale.value = e.target.value
    }
  }
})
