<template>
  <el-result
    icon="error"
    title="404"
    sub-title="您请求的页面不存在"
  >
    <template #extra>
      <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
    </template>
  </el-result>
</template>

<script setup>

</script>

<style scoped>

</style>