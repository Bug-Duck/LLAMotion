import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { bijon } from 'bijon'

createApp(App)
  .use(bijon())
  .mount('#app')
