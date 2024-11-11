<template>
  <div>
    <component :is="compiledComponent" v-if="compiledComponent"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { compileVueString } from './utils/vueCompiler'

// 示例 Vue 模板字符串
const templateString = `
<template>
  <div class="dynamic-component">
    <h1>动态编译的组件</h1>
  </div>
</template>
`

const compiledComponent = ref(compileVueString(templateString))
</script>
