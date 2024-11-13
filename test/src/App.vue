<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createLLAMotionClient } from '../../dist/index.mjs'

const client = createLLAMotionClient({
  apiKey: '',
  model: 'ft:gpt-4o-mini-2024-07-18:personal::ASLMRyVK'
})

let animation = ref(null)
onMounted(async () => {
  animation.value = await client.requestAsComponent(`Please create a simple animation that moves a rectangle with VueMotion from the left-top to right-bottom of screen, please use animation api 'move'`)
})
</script>

<template>
  <component :is="animation" v-if="true"/>
</template>
