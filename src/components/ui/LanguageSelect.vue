<template>
  <div class="select">
    <select class="select__box" v-model="lang" @change="langStore.changeLang">
      <option class="select__option" value="uk">Uk</option>
      <option class="select__option" value="en">En</option>
    </select>
  </div>
</template>

<script setup>
import { useLangStore } from '@/stores/lang'

const langStore = useLangStore()
const lang = langStore.lang
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
