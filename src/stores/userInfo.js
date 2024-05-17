import {defineStore} from "pinia";
import {computed, reactive} from "vue";

const userInfoStore = defineStore('userInfo', () =>{
    const userState = reactive( {
        login: false,
        nickname: null,
        lastLogin: null
    })

    const isLogin = computed(() => userState.login)
    const nickname = computed(() => userState.nickname)
    const lastLogin = computed(() => userState.lastLogin)

    function login(nickname, lastLogin) {
        userState.nickname = nickname
        userState.lastLogin = lastLogin
        userState.login = true
    }
    function logout() {
        userState.nickname = null
        userState.lastLogin = null
        userState.login = false
    }

    return {isLogin, nickname, lastLogin, login, logout}
})

export default userInfoStore;