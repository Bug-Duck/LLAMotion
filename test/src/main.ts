import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Rect, Motion } from '@vue-motion/lib'

createApp(App)
  .component('Rect', Rect)
  .component('Motion', Motion)
  .mount('#app')
