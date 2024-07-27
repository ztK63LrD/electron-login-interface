<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none; /* 禁止选择文本 */
  -webkit-user-select: none; /* Safari 和 Chrome 的兼容性 */
  -moz-user-select: none; /* Firefox 的兼容性 */
  -ms-user-select: none; /* IE 和 Edge 的兼容性 */
}
.container {
  width: 100%;
  height: 100%;
}
</style>
