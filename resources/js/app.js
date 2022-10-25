import './bootstrap';  
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { createApp } from 'vue'
import { routes } from './router'


import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes,
})
  
const app = createApp(App)

app.use(router)
app.use(createPinia())
  
app.mount('#app')