import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router' // 引入路由配置

// createApp(App).mount('#app')
const app = createApp(App)
app.use(ElementPlus)
app.use(router) // 使用 Vue Router
app.mount('#app')
