<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 2;
  overflow: hidden;
}
</style>
