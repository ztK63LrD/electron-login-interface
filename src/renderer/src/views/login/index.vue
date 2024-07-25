<template>
    <div class="login">
        <div class="header">
            <div class="header-left">
                <div class="header-icon"><el-icon color="red"><VideoCamera /></el-icon></div>
                <div class="header-text">
                    <span @animationiteration="getFamousRemark">{{ famousRemark }}</span>
                </div>
            </div>
            <div class="header-right">
                <div class="emplace"><el-icon :size="15"><Connection class="icon" /></el-icon></div>
                <div class="close"><el-icon :size="15"><Close /></el-icon></div>
            </div>
        </div>
        <div class="content">
            <div class="content-title">MY QQ</div>
            <div class="content-image">
                <img src="../../assets/images/login.png" alt="">
            </div>
            <div class="content-name">QQ名称</div>
            
        </div>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { Close, Connection, VideoCamera } from '@element-plus/icons-vue';

let famousRemark = ref('')

// 获取名言数据
const getFamousRemark = () => {
    axios.get<any, any>('https://api.uomg.com/api/rand.qinghua').then(res => {
        famousRemark.value = res.data.content
    })
}
onMounted(() => {
    getFamousRemark()
})
</script>

<style scoped lang="scss">
.login {
    width: 100%;
    height: 100vh;
    -webkit-app-region: drag;
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
                -webkit-app-region: no-drag;
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
}
</style>
