<template>
  <section class="choose">
    <PageContainer>
      <div class="choose__wrapper">
        <TitleComponent :titleType="'h2'">
          {{ $t('main.choose_title') }}
        </TitleComponent>
        <ul class="choose__list">
          <li
            class="choose__list-item"
            v-for="(item, index) in tm('main.choose_text')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="choose__img">
        <img src="@/assets/img/choose_img.jpg" alt="Choose Image" />
      </div>
    </PageContainer>
  </section>
</template>

<script setup>
import PageContainer from '@/components/PageContainer.vue'
import TitleComponent from '@/components/ui/TitleComponent.vue'
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()
</script>

<style lang="scss" scoped>
.choose {
  padding-top: 750px;
  @media (max-width: 1200px) {
    padding-top: 450px;
  }
  @media (max-width: 992px) {
    padding-top: 350px;
  }
  @media (max-width: 768px) {
    padding-top: 0;
  }
  &__wrapper {
    max-width: 700px;
    width: 100%;
    padding: 415px 0;
    position: relative;
    z-index: 3;
    @media (max-width: 992px) {
      padding: 350px 0;
    }
    @media (max-width: 768px) {
      padding: 20px 0;
    }
  }
  &__list {
    margin: 40px 0;
  }
  &__list-item {
    color: #ffffff;
    font-family: 'Inter-Light';
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    list-style: none;
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }

    &:not(:first-child) {
      margin-top: 25px;
    }
  }
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    top: 0;
    left: 150px;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
