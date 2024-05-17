<script setup>
import userInfoStore from "@/stores/userInfo.js";

const userInfo = userInfoStore()
</script>

<template>
<div>
  <h1>Welcome {{userInfo.nickname}}</h1>
  <h1>登录时间：{{userInfo.lastLogin}}</h1>
</div>
</template>

<style scoped>

</style>