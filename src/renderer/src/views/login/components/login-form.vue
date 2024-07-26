<template>
  <div class="form">
    <el-form class="login-form">
      <el-form-item label="账户">
        <el-input
          class="input"
          :prefix-icon="User"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          class="input"
          :prefix-icon="Lock"
          v-model="loginForm.password"
          type="password"
          show-password
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>
    <button class="btn" type="button" @click="handleEnter">
      <strong>登录</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div id="glow">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </button>
    <div class="login-footer"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
// 收集表单数据
let loginForm = reactive({
  username: '',
  password: ''
})

const handleEnter = () => {
    // 登录
    console.log(`11`);
}
</script>

<style scoped lang="scss">
.form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .login-form {
    width: 100%;
    :deep(.el-form-item__label) {
      font-weight: bold;
      font-size: 18px;
      font-family: cursive;
      color: #210be4;
      justify-content: flex-start;
    }
    .input {
      width: 250px;
      font-size: 15px;
      height: 35px;
      --el-input-bg-color: rgba(136, 165, 243, 0.5); // 输入框背景色
      --el-input-border-color: #210be4; // 输入框边框色
      --el-input-hover-border-color: #008c8c; // 输入框悬浮边框色
      --el-input-icon-color: #210be4; // 输入框图标颜色
      --el-input-placeholder-color: #210be4; // 输入框占位符颜色
      :deep(.el-input__prefix) {
        color: #e40b3a !important;
      }
      :deep(.el-input__inner) {
        color: #210be4;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    overflow: hidden;
    height: 2.5rem;
    background-size: 300% 300%;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#212121, #212121),
      linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    cursor: pointer;
    strong {
      z-index: 2;
      font-family: 'Avalors Personal Use';
      font-size: 12px;
      letter-spacing: 5px;
      color: #ffffff;
      text-shadow: 0 0 4px white;
    }
    #container-stars {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      transition: 0.5s;
      backdrop-filter: blur(1rem);
      border-radius: 5rem;
      #stars {
        position: relative;
        background: transparent;
        width: 200rem;
        height: 200rem;
        &::after {
          content: '';
          position: absolute;
          top: -10rem;
          left: -100rem;
          width: 100%;
          height: 100%;
          animation: animStarRotate 90s linear infinite;
        }

        &::after {
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -50%;
          width: 170%;
          height: 500%;
          animation: animStar 60s linear infinite;
        }

        &::before {
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
          opacity: 0.5;
        }
      }
    }
    #glow {
      position: absolute;
      display: flex;
      width: 12rem;
      .circle {
        width: 100%;
        height: 30px;
        filter: blur(2rem);
        animation: pulse_3011 4s infinite;
        z-index: -1;
        &:nth-of-type(1) {
          background: rgba(254, 83, 186, 0.636);
        }
        &:nth-of-type(2) {
          background: rgba(142, 81, 234, 0.704);
        }
      }
    }
    &:hover #container-stars {
      z-index: 1;
      background-color: #212121;
    }
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      border: double 4px #fe53bb;
      background-origin: border-box;
      background-clip: content-box, border-box;
      animation: none;
    }
    &:active .circle {
      background: #fe53bb;
    }
    @keyframes animStar {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(-135rem);
      }
    }

    @keyframes animStarRotate {
      from {
        transform: rotate(360deg);
      }

      to {
        transform: rotate(0);
      }
    }

    @keyframes gradient_301 {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes pulse_3011 {
      0% {
        transform: scale(0.75);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }

      100% {
        transform: scale(0.75);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }
  }
}
</style>
