<script setup lang="ts">
import { compile, precompile } from '../../src/utils/compiler'

const component = compile(precompile(`
<script setup>
import { hello } from 'hello'

const x = ref(0)
onMounted(() => {
  x.value = 1
})

<\/script>

<template>
  <div>{{ x }}</div>
</template>
`))
</script>

<template>
  <component :is="component" />
</template>

