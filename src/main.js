import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import ElementPlus from "element-plus";
import myAxios from "@/network/myAxios";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

for (const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}

app.config.globalProperties.myAxios = myAxios
app.config.globalProperties.userId = ''

app.use(router)
app.use(ElementPlus)
app.mount('#app')

