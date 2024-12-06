import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.vue\?vue/], // 确保处理动态导入的 Vue 文件
    })
  ],
  optimizeDeps: {
    exclude: ['@vue-motion/core', '@vue-motion/lib', '@vue-motion/extension-math']
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})