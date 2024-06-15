import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router';

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// less
import less from 'less'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router);
app.use(ElementPlus)
app.use(less)

app.mount('#app')
