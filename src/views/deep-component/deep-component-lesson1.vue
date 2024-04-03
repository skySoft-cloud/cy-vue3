<script setup>
import InputComponent from '@/views/deep-component/input-component.vue'
import MySlot from '@/views/deep-component/my-slot.vue'

const modelValue = ref('123')
</script>
<template>
<el-row>
  <el-col :span="16">
    <p>双向绑定 - v-model的值：{{modelValue}}</p>
    <input-component cus="duduer" class="aYun" v-model.aYun="modelValue" show-word-limit clearable maxlength="10" placeholder="aYun有前途"/>
    <div>
<!--      作用域插槽，本质是子组件的渲染主动权交给父组件去做-->
     <my-slot #aYun = {duoDuo}>
       子组件给我的信息：{{duoDuo}}
     </my-slot>
    </div>
  </el-col>
</el-row>
</template>

