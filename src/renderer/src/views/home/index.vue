<template>
    <div class="home">
        <div class="header">头部</div>
        <div class="container">
            <div>登录界面</div>
            <el-button type="primary" @click="goBack">跳转登录页</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const { ipcRenderer } = require('electron')

const router = useRouter()

const goBack = () => {
    router.push('/')
}

onMounted(() => {
    ipcRenderer.invoke('home-window-size')
})
</script>

<style scoped lang="scss">
.home {
    width: 100%;
    height: 100%;
    .header {
        width: 100%;
        height: 20px;
        -webkit-app-region: drag;
        background-color: red;
    }
    .container {
        width: 100%;
        height: 100px;
        -webkit-app-region: no-drag;
    }
}
</style>
  