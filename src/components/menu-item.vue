<script setup>
const props = defineProps({
  menuData: {
    type: Array,
    default: () => []
  }
})
console.log(props.menuData)
</script>

<template>
  <template v-for="item in menuData"
       :key="item.path">
    <el-sub-menu v-if="item.children && item.children.length"
                 :index="item.path">
      <template #title>{{ item.menuName }}</template>
      <menu-item
        :menu-data="item.children"
      />
    </el-sub-menu>
    <el-menu-item v-if="!item.children"
                  :index="item.path">{{ item.menuName }}
    </el-menu-item>
  </template>
</template>


<style scoped>

</style>
