<script setup>
import userInfoStore from "@/stores/userInfo.js";
import moment from "moment";
import {useRouter} from "vue-router";
import {ref} from "vue";
let loginId = ''
let password = ''
let hasError = ref(false)
let errorMessage = ref('')
const userInfo = userInfoStore()
const router = useRouter()
function doLogin() {
  // console.log("doLogin", loginId, password);
  if (password !== 'test') {
    // 这里为了测试 ，随便定一个密码
    hasError.value = true
    errorMessage.value = '登录失败, 密码应当是test'
    return
  }
  userInfo.login(loginId, moment().format('YYYY-MM-DD'));
  hasError.value = false
  errorMessage.value = ''
  router.push('/home/dashboard')
}
</script>

<template>
<div class="login">
  <div id="logoDiv"></div>
  <div id="formDiv">
    <form ref="loginForm" class="login-form">
      <table>
        <tr><td><label for="loginId">登录名</label></td></tr>
        <tr><td><input type="text" v-model="loginId" name="loginId" /></td></tr>
        <tr><td><label for="password">密码</label></td></tr>
        <tr><td><input type="password" v-model="password" name="password" /></td></tr>
        <tr><td><button type="button" @click="doLogin">登录</button></td></tr>
      </table>
    </form>
    <div v-if="hasError">
      {{errorMessage}}
    </div>
  </div>
</div>
</template>

<style scoped>

</style>