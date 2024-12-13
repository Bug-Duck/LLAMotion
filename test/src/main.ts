import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Test from './Test.vue'
import { llamotion } from '../../src/index'

createApp(Test)
  .use(llamotion())
  .mount('#app')
