<template>
  <div class="footer">
    <div class="marioShow1">
      <mario></mario>
    </div>
    <div class="round">
      <roundToy></roundToy>
    </div>
    <div class="marioShow2">
      <mario></mario>
    </div>
  </div>
</template>

<script setup lang="ts">
import mario from './mario.vue';
import roundToy from './round-toy.vue';
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .marioShow1 {
    flex: 3;
    height: 100%;
  }
  .round {
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.5); /* 调整缩放比例，这里是0.8 */
  }
  .marioShow2 {
    flex: 3;
    height: 100%;
  }
}
</style>
