<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-main>
          <TagList />
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from "@/layouts/componets/Menu.vue"
import Header from "@/layouts/componets/Header.vue"
import TagList from "@/layouts/componets/TagList.vue"

</script>

<style scoped>

</style>