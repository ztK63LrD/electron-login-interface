// 登录模块仓库
import { defineStore } from "pinia";
import { ref } from "vue"
 
export const useMemberStore = defineStore("login", () => {
    const profile = ref();
    const setProfile = (val: number) => {
        profile.value = val;
    }
    const clearProfile = () => {
        profile.value = undefined
    }
    return { profile, setProfile, clearProfile }
}, { persist: true }) // 开启持久化