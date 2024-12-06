<script setup lang="ts">
import { defineComponent } from 'vue';
import { compile } from 'vue-inbrowser-compiler';

const result = compile(
    `<script setup>

const x = ref(0)
onMounted(() => {
  x.value = 1
})

<\/script>

<template>
  <div>{{ x }}</div>
</template>
`)
console.log(result)
const component = defineComponent(Function(result.script.replace('const Vue = require("vue");', ''))())
console.log(component)
</script>

<template>
  <component :is="component" />
</template>

