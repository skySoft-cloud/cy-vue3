<script setup>
const description = '未找到页面'
</script>
<template>
  <div>
    <h1>{{ description }}</h1>
    <el-button type="primary" @click="$router.push('/home')">来到了没有知识的荒原</el-button>
  </div>
</template>

