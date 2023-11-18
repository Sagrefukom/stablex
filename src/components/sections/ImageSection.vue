<template>
  <section class="image">
    <img src="@/assets/img/image_section_img.jpg" alt="" />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    max-width: 1216px;
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    opacity: 0.5;
    bottom: 80px;
    @media (max-width: 1200px) {
      max-width: 70%;
    }
    @media (max-width: 992px) {
      bottom: 50px;
    }
    @media (max-width: 768px) {
      bottom: 30px;
    }
    @media (max-width: 768px) {
      bottom: 15px;
    }
  }
}
</style>
