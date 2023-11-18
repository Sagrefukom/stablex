<template>
  <component :is="titleType" class="title" :style="titleStyles[titleType]">
    <slot></slot>
  </component>
</template>

<script setup>
const props = defineProps({
  titleType: {
    type: String,
    required: true
  }
})
const titleType = props.titleType
const titleStyles = {
  h1: {
    fontSize: '64px',
    lineHeight: '70px'
  },
  h2: {
    fontSize: '95px',
    lineHeight: '96px'
  },
  h3: {
    fontFamily: 'Roboto-Bold',
    fontSize: '63px',
    lineHeight: '71px',
    letterSpacing: '1.28px'
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: #ffffff;
}
</style>
