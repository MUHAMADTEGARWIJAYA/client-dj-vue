import './assets/main.css'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import IconShared from './icons/IconShared'
import App from './App.vue'

import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query' // Import VueQueryPlugin

const app = createApp(App)
app.use(VueQueryPlugin)
app.use(PrimeVue)
app.use(createPinia())
app.use(router)

Object.entries(IconShared).forEach(([name, component]) => {
  app.component(name, component)
})
app.mount('#app')
