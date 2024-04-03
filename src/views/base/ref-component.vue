<script setup>
const a = 1;
const b = ref(2)

const attrs = defineProps(['desc','size'])
console.log(attrs)
defineEmits(['larger-size'])
defineExpose({
  a,
  b
})
</script>

<template>
<div>
  <el-button v-show="size"
             size="small"
             @click="$emit('larger-size')">变大</el-button>
  <p :style="{fontSize: size + 'px'}">父组件给我的值：{{desc}}</p>
  <slot></slot>
</div>
</template>

<style scoped>

</style>
