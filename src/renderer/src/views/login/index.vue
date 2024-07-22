<template>
    <div class="login">
        <div class="header">
            <div class="close"><el-icon :size="15"><Close /></el-icon></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Close } from '@element-plus/icons-vue';

</script>

<style scoped lang="scss">
.login {
    width: 100%;
    height: 100%;
    .header {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .close {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                width: 100%;
                height: 100%;
                background-color: red;
                cursor: pointer;
            }
        }
    }
}
</style>
