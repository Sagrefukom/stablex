<template>
  <LanguageSelect />
</template>

<script setup>
import { onMounted, watch } from 'vue'
import LanguageSelect from '@/components/ui/LanguageSelect.vue'
import { Crisp } from 'crisp-sdk-web'
import { useLangStore } from '@/stores/lang'

const langStore = useLangStore()
const lang = langStore.lang

onMounted(() => {
  initChat(lang)
})

const initChat = (lang) => {
  Crisp.configure('01bd3d04-b94d-469b-a969-70566bc2d501', {
    locale: lang
  })
}
watch(
  () => langStore.lang,
  (newLang) => {
    if (newLang) {
      Crisp.session.reset()
      initChat(newLang)
    }
  }
)
</script>

<style lang="scss" scoped></style>
