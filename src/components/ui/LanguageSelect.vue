<template>
  <div class="select">
    <select class="select__box" v-model="lang" @change="langStore.changeLang">
      <option
        class="select__option"
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useLangStore } from '@/stores/lang'

const langStore = useLangStore()
const lang = langStore.lang
const options = [
  { value: 'uk', text: 'Укр' },
  { value: 'en', text: 'En' }
]
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-width: 50px;
  position: relative;
  &__box {
    border: none;
    padding: 5px 15px;
    width: 100%;
    height: 35px;
  }
}
</style>
