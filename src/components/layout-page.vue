<script setup>

import LeftMenu from '@/components/left-menu.vue'
</script>

<template>
  <div class="layout-page">
    <el-container>
      <el-aside width="200px">
        <left-menu/>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.layout-page{

}
</style>
