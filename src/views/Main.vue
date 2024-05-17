<script setup>
import userInfoStore from "@/stores/userInfo.js";
import router from "@/router/index.js";

const userInfo = userInfoStore()
function logout() {
  userInfo.logout()
  router.push('/login')
}
</script>

<template>
<header class="mainApp-header">
  <div>
    <span v-if="userInfo.isLogin">
      Welcome {{userInfo.nickname}}

      <button type="button" @click="logout">logout</button>
    </span>
    <span v-else>
      未登录
    </span>
  </div>
</header>
<div>
  <RouterView />
</div>
</template>

<style scoped>
.mainApp-header {
  position: absolute;
  top: 20px;
}
</style>