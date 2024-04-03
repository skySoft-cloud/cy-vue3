<script setup>
import { useMouse } from '@/views/mixins/mouse.js'

const { x, y } = useMouse()

const vDaXie = {
  mounted (el) {
    el.innerText = el.innerText.toUpperCase()
  }
}
</script>
<template>
  <el-row>
    <el-col :span="16">
      <p>组合式函数示例：鼠标的坐标值：x:{{ x }}, y:{{ y }}</p>
    </el-col>
    <el-col :span="16">
      <p v-da-xie>自定义指令：aYun被大写了</p>
      <p v-xiao-xie>自定义指令：AYUN被小写了</p>
    </el-col>
    <el-col :span="16">
      <h5>插件</h5>
      <p>翻译语言：{{$translate('greetings.hello')}}</p>
    </el-col>
  </el-row>
</template>

