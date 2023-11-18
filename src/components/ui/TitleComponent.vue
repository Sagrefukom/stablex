<template>
  <component :is="titleType" class="title" :class="titleClasses">
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  titleType: {
    type: String,
    required: true
  }
})
const titleType = props.titleType

const titleClasses = computed(() => {
  return `title--${titleType}`
})
</script>

<style lang="scss" scoped>
.title {
  color: #ffffff;
  &--h1 {
    font-size: 64px;
    line-height: 70px;
    @media (max-width: 992px) {
      font-size: 50px;
      line-height: 55px;
    }
    @media (max-width: 768px) {
      font-size: 42px;
      line-height: 48px;
    }
    @media (max-width: 480px) {
      font-size: 36px;
      line-height: 40px;
    }
  }
  &--h2 {
    font-size: 95px;
    line-height: 96px;
    @media (max-width: 992px) {
      font-size: 72px;
      line-height: 80px;
    }
    @media (max-width: 768px) {
      font-size: 55px;
      line-height: 60px;
    }
    @media (max-width: 480px) {
      font-size: 44px;
      line-height: 50px;
    }
  }
  &--h3 {
    font-family: 'Roboto-Bold';
    font-size: 63px;
    line-height: 71px;
    letter-spacing: 1.28px;
    @media (max-width: 992px) {
      font-size: 52px;
      line-height: 60px;
    }
    @media (max-width: 768px) {
      font-size: 42px;
      line-height: 50px;
    }
    @media (max-width: 480px) {
      font-size: 32px;
      line-height: 40px;
    }
  }
}
</style>
