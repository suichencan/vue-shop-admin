<template>
  <div class="header">
    <span class="logo">
    <el-icon class="mr-1 text-3xl"><ChromeFilled /></el-icon>
      Vue后台管理系统
    </span>
    <el-icon class="icon-btn"><DArrowLeft /></el-icon>
    <el-icon class="icon-btn"><Refresh /></el-icon>
    <!--  下拉菜单-->
    <el-dropdown class="ml-auto mr-4">
    <span class="el-dropdown-link flex items-center text-white text-xl">
      <el-avatar :size="35" :src="$store.state.user.avatar" />
      <span class=" ml-2">{{$store.state.user.username}}</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>

</script>

<style scoped>
.header{
  @apply flex items-center bg-blue-500 text-white fixed top-0 left-0 right-0;
  height: 64px;
}
.logo{
  @apply flex items-center justify-center text-xl ;
  width: 250px;
}
.icon-btn{
  width: 42px;
  height: 64px;
  cursor: pointer;
}
.icon-btn:hover{
  @apply bg-blue-400
}
</style>