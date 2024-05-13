<script setup>
import {RouterView, useRouter} from 'vue-router'
import {onMounted} from "vue";
import userInfoStore from "@/stores/userInfo.js";
const userInfo = userInfoStore()
const router = useRouter()
onMounted(()=>{
  if (userInfo.isLogin) {
    router.push('/home/dashboard')
  } else {
    router.push('/login')
  }
})
function logout() {
  userInfo.logout()
  router.push('/login')
}
</script>

<template>
<div class="mainApp">
  <header class="mainApp-header">
    <div >
      <span v-if="userInfo.isLogin">
        Welcome {{userInfo.nickname}}

        <button type="button" @click="logout">logout</button>
      </span>
      <span v-else>
        未登录
      </span>
    </div>
  </header>
<RouterView />
</div>
</template>

<style scoped>
.mainApp .mainApp-header {
  position: absolute;
  top: 20px;
}
</style>
