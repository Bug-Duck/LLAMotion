<script setup lang="ts">
import { compile, precompile } from '../../src';

const code = `
<script setup>
import { MathFunction } from '@vue-motion/extension-math'
import { Motion, moveOnFunction } from '@vue-motion/lib'
import { usePlayer, useWidget } from '@vue-motion/core'
import { onMounted } from 'vue'

const { useAnimation, play } = usePlayer()
const functionWidget = useWidget()
const movingWidget = useWidget() // Widget to be animated along the function

onMounted(() => {
  useAnimation(functionWidget)
    .animate(moveOnFunction, {
      duration: 5,
      path: (progress) => {
        return { x: progress * 100, y: progress * 100 } // Scale coordinates for view
      },
      divisionX: 100,
      divisionY: 100,
    })
  play()
})
<\/script>

<template>
  <Motion :width="1600" :height="900">
    <MathFunction 
      :widget="functionWidget"
      :fn="(x) => x * Math.sin(x * Math.cos(x))"
      :domain="[-5, 5]"
      :color="'white'"
      :width="2"
    />
  </Motion>
</template>
`

const compiled = precompile(code)
const component = compile(compiled)
</script>

<template>
  <component :is="component" />
</template>
