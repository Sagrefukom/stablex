<template>
  <section class="service">
    <PageContainer>
      <TitleComponent :titleType="'h3'" class="service__title">
        {{ $t('main.service_title') }}
      </TitleComponent>
      <div class="service__img">
        <img src="@/assets/img/service_img.jpg" alt="Service Image" />
      </div>
    </PageContainer>
  </section>
</template>

<script setup>
import PageContainer from '@/components/PageContainer.vue'
import TitleComponent from '@/components/ui/TitleComponent.vue'
</script>

<style lang="scss" scoped>
.service {
  margin: 150px 0;
  &__title {
    text-align: center;
    max-width: 750px;
    margin: auto;
    position: relative;
    z-index: 2;
  }
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    top: -50px;
  }
}
</style>
