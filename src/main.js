import { createApp } from 'vue'
import { myPlugin } from '@/views/mixins/myPlugin.js'
import './assets/main.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from '@/router/index.js'
import App from './App.vue'

const app = createApp(App)

app.use(myPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})
app.use(ElementPlus)
app.use(router)
app.mount('#app')
