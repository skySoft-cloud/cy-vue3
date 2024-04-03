<script setup>
import { dynamicRoutes } from '@/router/index.js'
// import { useRouter } from 'vue-router'
const router = useRouter()
const goRoute = (path) =>{
  router.push(path)
}
</script>
<template>
    <div class="flex">
      <span class="gap-2" v-for="route in dynamicRoutes">
        <el-link
          @click="goRoute(route.path)"
          type="primary">{{route.menuName}}</el-link>
      </span>
    </div>
</template>
<style lang="scss">
.gap-2{
  margin-right: 10px;
}
</style>
