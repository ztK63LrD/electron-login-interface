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
  -webkit-app-region: drag;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
