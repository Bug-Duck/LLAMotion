<script setup lang="ts">
import { usePlayer } from '@vue-motion/core';
import { compile, precompile } from '../../src';

const code = `
<script setup>
import { ref, onMounted } from 'vue'
import { usePlayer, useWidget, defineAnimation } from '@vue-motion/core'
import { Motion, Circle, moveOnFunction } from '@vue-motion/lib'
import { MathFunction } from '@vue-motion/extension-math'

const { useAnimation, play } = usePlayer()

// Initial frequency multiplier
const phi = ref(1)

const sineFunction = useWidget('sineFunction')

// Define animation to increase phi
const increasePhi = defineAnimation((target, context) => {
  return (progress) => {
    phi.value = 1 + progress * 4
  }
})

onMounted(() => {
  useAnimation(sineFunction)
    .animate(increasePhi, {
      duration: 5
    })
  
  play()
})
<\/script>

<template>
  <Motion :width="1600" :height="900">
    <MathFunction 
      :x="0" 
      :y="0" 
      :fn="x => Math.sin(phi * x)" 
      :domain="[-10, 10]" 
      :widget="sineFunction" 
      color="blue" 
      width="2"
    />
</template>
`

const compiled = precompile(code)
const component = compile(compiled)

const { elapsed, pause, play, setElapsed } = usePlayer()

setTimeout(() => {
  setElapsed(0)
  play()
}, 2000);
</script>

<template>
  <component :is="component" />
</template>
