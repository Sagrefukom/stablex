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
    position: relative;
    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__block {
    &--left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 650px;
      width: 100%;
      z-index: 2;
      @media (max-width: 1200px) {
        align-items: center;
        text-align: center;
      }
    }
    &--right {
      position: absolute;
      right: 0;
      top: -70px;
      @media (max-width: 1200px) {
        position: initial;
      }
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
    width: 100%;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
