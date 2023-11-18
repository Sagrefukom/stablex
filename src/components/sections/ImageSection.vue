<template>
  <div class="image">
    <img src="@/assets/img/image_section_img.jpg" alt="" />
  </div>
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
    opacity: 0.8;
    bottom: 80px;
  }
}
</style>
