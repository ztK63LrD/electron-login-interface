<template>
  <div class="login">
    <div class="header">
      <div class="header-left">
        <div class="header-icon">
          <el-icon color="red"><VideoCamera /></el-icon>
        </div>
        <div class="header-text">
          <span @animationiteration="getFamousRemark">{{ famousRemark }}</span>
        </div>
      </div>
      <div class="header-right">
        <div class="emplace" @click="handleEmplace">
          <el-icon :size="15"><Connection class="icon" /></el-icon>
        </div>
        <div class="close" @click="handleClose">
          <el-icon :size="15"><Close /></el-icon>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-title">MY QQ</div>
      <div class="content-image">
        <img :src="avatar" alt="头像" />
      </div>
      <div class="content-login">
        <LoginForm></LoginForm>
      </div>
      <div class="login-footer">
        <Footer></Footer>
      </div>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="当时版本数据："
      width="500"
      align-center
    >
      <div>electron: {{ versions.electron }}</div>
      <div>node: {{ versions.node }}</div>
      <div>chrome: {{ versions.chrome }}</div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { Close, Connection, VideoCamera } from '@element-plus/icons-vue'
import LoginForm from './components/login-form.vue'
import Footer from './components/login-footer.vue'
const { ipcRenderer } = require('electron')

let famousRemark = ref('') // 名言数据
let avatar = ref('') // 头像数据 
let versions = ref() // 版本数据
let dialogVisible = ref(false) // 弹窗

// 获取名言数据
const getFamousRemark = () => {
  axios.get<any, any>('https://api.uomg.com/api/rand.qinghua').then((res) => {
    famousRemark.value = res.data.content
  })
}
// 获取头像
const getAvatar = () => {
  axios.get<any, any>('https://dog.ceo/api/breeds/image/random').then((res) => {
    avatar.value = res.data.message
  })
}
// 获取版本事件
const handleEmplace = async () => {
  const result = await ipcRenderer.invoke('getVersion')
  versions.value = result
  dialogVisible.value = true
}
// 处理关闭事件
const handleClose = () => {
  ipcRenderer.send('close-main-window')
}
onMounted(() => {
  ipcRenderer.invoke('login-window-size')
  getFamousRemark()
  getAvatar()
})
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  -webkit-app-region: drag;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@renderer/assets/images/bg.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0.8; /* 设置透明度为 70% */
    z-index: -1; /* 确保伪元素在元素内容下方 */
  }
  .header {
    width: 100%;
    height: 28px;
    display: flex;
    .header-left {
      width: calc(100% - 60px);
      height: 28px;
      padding: 12px 0px 12px 10px;
      background-color: rgba(red, 0.4);
      border-radius: 0 10px 10px 0; /* 顺序为：左上角、右上角、右下角、左下角 */
      display: flex;
      align-items: center;
      font-size: 14px;
      .header-icon {
        display: flex;
        align-items: center;
        width: 20px;
      }
      .header-text {
        flex: 1;
        overflow: hidden;
        span {
          display: block;
          animation: rollText 20s linear infinite;
          white-space: nowrap;
          padding-left: 100%;
          padding-right: 100%;
          color: #fff;
        }
      }
      @keyframes rollText {
        0% {
          transform: translate(0);
        }

        100% {
          transform: translate(-130%);
        }
      }
    }
    .header-right {
      width: 60px;
      height: 28px;
      display: flex;
      -webkit-app-region: no-drag;
      .emplace {
        width: 30px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .close {
        width: 30px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          width: 30px;
          height: 28px;
          background-color: rgb(196, 43, 28);
          cursor: pointer;
          svg {
            color: #fff;
            font-weight: bold;
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 28px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-app-region: no-drag;
    cursor: pointer;
    gap: 15px;
    .content-title {
      font-size: 25px;
      font-weight: bold;
      color: transparent;
      background: linear-gradient(to right, #7ca0ec, #7865c9);
      background-clip: text;
      -webkit-background-clip: text;
    }
    .content-image {
      width: 85px;
      height: 85px;
      cursor: pointer;
      overflow: hidden;
      transition: transform 1.5s ease;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: transform 1.5s ease; /* 确保图片放大也有过渡效果 */
      }
      &:hover {
        transform: scale(1.3); /* 悬浮时放大1.2倍 */
      }
    }
    .content-login {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .login-footer {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
