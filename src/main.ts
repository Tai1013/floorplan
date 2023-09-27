import "normalize.css"
import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Pinia from './plugin/pinia'
import ElementIcon from './plugin/element-icon'
import ElementPlus from './plugin/element-plus'
import I18n from './i18n/install'

const app = createApp(App)

app.use(Pinia)
app.use(Router)
app.use(ElementIcon)
app.use(ElementPlus)
app.use(I18n)
app.mount('#app')
