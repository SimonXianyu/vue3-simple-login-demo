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

</script>

<template>
<div class="mainApp">
<RouterView />
</div>
</template>

<style scoped>

</style>
