<template>
<el-button @click="handleLogout">退出登录</el-button>
</template>

<script setup>
import { msgBox, toast } from "@/composables/util";
import { logout } from "@/api/manager";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store=useStore()
const router=useRouter()
function handleLogout(){
msgBox("是否要退出登录?")
  .then(()=>{
  logout().finally(()=>{
    store.dispatch("logout")
    //跳转回登录页
    router.push("/login")
    //提示退出登录成功
    toast("退出登录成功!")
  })
})
}

</script>

<style scoped>

</style>