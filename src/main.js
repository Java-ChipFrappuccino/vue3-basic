import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.provide('global', '전역객체입니다')
app.mount('#app')
