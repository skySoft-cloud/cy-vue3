<script setup>
const [model,modifiers] = defineModel()
console.log(modifiers)

const props = defineProps(['cus'])

// 访问所有透传属性
const attrs = useAttrs()

// 使用 v-bind绑定属性后，下面的禁止透传就不生效了
// defineOptions({
//   inheritAttrs: false
// })
</script>

<template>
  <p>传递的属性：{{props}}</p>
  <label>修饰符名称：{{Object.keys(modifiers)[0]}}</label>
<el-input v-model="model" v-bind="$attrs"></el-input>
  <p>透传的属性：{{attrs}}</p>
</template>

<style scoped>

</style>
