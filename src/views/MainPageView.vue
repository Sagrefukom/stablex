<template>
  <div class="page">
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import MainComponent from '@/components/MainComponent.vue'
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1 0 auto;
  background-color: #070709;
  width: 100%;
}
</style>
