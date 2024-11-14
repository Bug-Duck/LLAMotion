import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { llamotion } from '../../src/index'
createApp(App)
  .use(llamotion())
  .mount('#app')
