<template>
    <div class="login">
        <div class="header">
            <div class="header-left">{{ famousRemark }}</div>
            <div class="header-right">
                <div class="emplace"><el-icon :size="15"><Connection class="icon" /></el-icon></div>
                <div class="close"><el-icon :size="15"><Close /></el-icon></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { Close, Connection } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus'
// 导入接口函数
import { reqLoginFamousRemark } from '@renderer/api/login'

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
