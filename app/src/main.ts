import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Test from './Test.vue'
import { bijon } from '../../src/index'

createApp(App)
  .use(bijon())
  .mount('#app')
