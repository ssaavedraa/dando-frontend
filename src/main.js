import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
