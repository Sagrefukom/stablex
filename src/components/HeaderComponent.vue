<template>
  <PageContainer>
    <header class="header">
      <CrispComponent />
    </header>
  </PageContainer>
</template>

<script setup>
import PageContainer from '@/components/PageContainer.vue'
import CrispComponent from '@/components/CrispComponent.vue'
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  height: 50px;
  width: 100%;
}
</style>
