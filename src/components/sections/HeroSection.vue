<template>
  <section class="hero">
    <PageContainer>
      <div class="hero__wrapper">
        <div class="hero__block hero__block--left">
          <TitleComponent :titleType="'h1'">
            {{ $t('main.hero_title') }}
          </TitleComponent>
          <ButtonComponent :icon="ArrowIcon" class="hero__btn">{{
            $t('main.contact_us')
          }}</ButtonComponent>
        </div>
        <div class="hero__block hero__block--right">
          <img src="@/assets/img/hero_img.png" alt="Hero Image" />
        </div>
      </div>
    </PageContainer>
    <div class="hero__img">
      <img src="@/assets/img/hero_bottom_img.jpg" alt="" />
    </div>
  </section>
</template>

<script setup>
import PageContainer from '@/components/PageContainer.vue'
import TitleComponent from '@/components/ui/TitleComponent.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  &__wrapper {
    display: flex;
    // padding-bottom: 500px;
    position: relative;
  }
  &__block {
    &--left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 650px;
      width: 100%;
      z-index: 2;
    }
    &--right {
      position: absolute;
      right: 0;
      top: -70px;
    }
  }
  &__btn {
    margin-top: 50px;
  }
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    // bottom: -200px;
    width: 100%;
  }
}
</style>
