<script setup>
import { dynamicRoutes } from '@/router/index.js'
import MenuItem from '@/components/menu-item.vue'

const defaultOpenRoutes = dynamicRoutes.map(i => i.path)
const activeRoute = ref(defaultOpenRoutes[0]);

const router = useRouter()
watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
  activeRoute.value = newValue;
},{ immediate: true })
</script>

<template>
  <el-menu
    :router="true"
    :default-active="activeRoute"
    :default-openeds="defaultOpenRoutes"
  >
    <menu-item
      :menu-data="dynamicRoutes"
    />
  </el-menu>
</template>

<style scoped>

</style>
