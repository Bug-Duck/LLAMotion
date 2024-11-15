<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createLLAMotionClient } from '../../dist/index.js'

const client = createLLAMotionClient({
  apiKey: '',
  model: 'ft:gpt-4o-mini-2024-07-18:personal::AT9I9SDW'
})

let animation = ref(null)
onMounted(async () => {
  animation.value = await client.requestAsComponent(`A NumberPlane grows`)
})
</script>

<template>
  <component :is="animation" v-if="true"/>
</template>

<style scoped>
template {
  display: block;
}
</style>
