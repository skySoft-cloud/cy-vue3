<script setup>
import { ElMessage } from 'element-plus'
import { watchEffect } from 'vue'
import RefComponent from '@/views/base/ref-component.vue'

const baseLessonData = reactive({
  msg: '插值数据',
  rawHtml: `<span style="color: red">This should be red.</span>`,
  objectAttrs: {
    id: '1',
    name: 'aYun'
  },
  books: [
    'VUE2.js',
    'React.js',
    'Angular.js',
  ],
  count: 0,
  autoAddValue: 1,
  refA: '',
  refB: '',
  fontSize: 12
})

const hasNewBook = computed(() => {
  return baseLessonData.books.length > 0 ? 'Yes,实在是太多了！' : 'No,他太懒了！'
})

const now = computed(()=> Date.now())
const getNow = () => {
  return Date.now()
}

function refreshTime() {
  ElMessage({
    message: `方法：${getNow()},计算属性：${now.value}`,
  })
}

watchEffect(()=>{
  baseLessonData.autoAddValue = parseInt(baseLessonData.count) + 1
})

const refCom = ref(null)
onMounted(() => {
  baseLessonData.refA = refCom.value.a
  baseLessonData.refB = refCom.value.b
})
</script>
<template>
  <div>
    <el-row>
      <el-col>
        <h5>文本插值</h5>
        <span>message：{{ baseLessonData.msg }}</span>
      </el-col>
      <el-col>
        <h5>原始 HTML</h5>
        <p>Using text interpolation: {{ baseLessonData.rawHtml }}</p>
        <p>Using v-html directive: <span v-html="baseLessonData.rawHtml"></span></p>
      </el-col>
      <el-col>
        <h5>绑定多个属性</h5>
        <p v-bind="baseLessonData.objectAttrs">审查我的属性</p>
      </el-col>
      <el-col>
        <h5>aYun有新书推荐么？</h5>
        <p>{{ hasNewBook }}</p>
        <p>{{now}}</p>
      </el-col>
      <el-col>
        <h5>计算属性VS方法</h5>
        <el-button @click="refreshTime">刷新时间</el-button>
      </el-col>
      <el-col>
        <h5>侦听器</h5>
        <p>
          监听值：<el-input v-model="baseLessonData.count"></el-input>
          侦听器值：{{baseLessonData.autoAddValue}}
        </p>
      </el-col>
      <el-col>
        <h5>组件上的ref：{{baseLessonData.refA}} - {{baseLessonData.refB}}</h5>
        <ref-component ref="refCom" desc="aYun是优秀的"/>
      </el-col>
      <el-col>
        <h5>事件监听</h5>
        <ref-component ref="refCom"
                       desc="aYun要控制字体大小了"
                       :size="baseLessonData.fontSize"
                       @largerSize="baseLessonData.fontSize++">
          <p>我是插槽内容：
            <el-button
              size="small"
                       @click="baseLessonData.fontSize--">减小</el-button>
          </p>
        </ref-component>
      </el-col>
    </el-row>
  </div>
</template>

