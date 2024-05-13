import {defineStore} from "pinia";
import {computed, ref} from "vue";

const userInfoStore = defineStore('userInfo', () =>{
    const userInfo = ref( {
        login: false,
        nickname: null,
        lastLogin: null
    })

    const isLogin = computed(() => userInfo.value.login)
    const nickname = computed(() => userInfo.value.nickname)
    const lastLogin = computed(() => userInfo.value.lastLogin)

    function login(nickname, lastLogin) {
        userInfo.value.nickname = nickname
        userInfo.value.lastLogin = lastLogin
        userInfo.value.login = true
    }
    function logout() {
        userInfo.value.nickname = null
        userInfo.value.lastLogin = null
        userInfo.value.login = false
    }

    return {isLogin, nickname, lastLogin, login, logout}
})

export default userInfoStore;