<script setup lang="ts">
import { usePlayer, useWidget } from '@vue-motion/core'
import { Motion, NumberPlane, MathFunction } from '@vue-motion/lib'
import { onMounted } from 'vue'

// 1. use the hook to get the two key methods.
const { play, useAnimation } = usePlayer()

// 2. Get the widget with the `useWidget` hook.
const plane = useWidget()
const f = useWidget()
const g = useWidget()

onMounted(() => {
  // 3. use `useAnimation` to get a animation manager from the get widget instance.
  useAnimation(f)
    .animate(fadeIn, { duration: 1 })
    .exec(() => {
      console.log('f animation end') // 4. output
    })
  useAnimation(g)
    .animate(fadeIn, { duration: 1 })
    .exec(() => {
      console.log('g animation end') // 5. output
    })
  // 6. After mounted, call `play` method to begin the animation.
  play()
})
</script>

<template>
  <!-- 7. Set the animation root of component `<Motion>`, set his width and height -->
  <Motion :width="1600" :height="900">
    <!-- 8. Add a basic widget in animation, and bind the widget instance to the `widget` prop -->
    <NumberPlane :widget="plane" :domainX="[-10, 10]" :domainY="[-10, 10]" />
    <MathFunction :widget="f" :fn="Math.sin" :domain="[-10, 10]" :plane="plane"/>
    <MathFunction :widget="g" :fn="Math.cos" :domain="[-10, 10]" :plane="plane"/>
  </Motion>
</template>