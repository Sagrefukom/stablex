<template>
  <button class="button">
    <slot />
    <component :is="props.icon" class="button__icon"></component>
  </button>
</template>

<script setup>
const props = defineProps({
  icon: Object
})
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Inter-Medium';
  font-size: 16px;
  line-height: 21px;
  padding: 12px 40px 12px 20px;
  border: none;
  border-radius: 30px;
  min-width: 140px;
  height: 45px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0 6px 20px hsla(0, 0%, 100%, 0.4);
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
  }
}
</style>
