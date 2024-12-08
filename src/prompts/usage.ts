export function usagePrompt() {
  return [
    { role: 'user', content: `What's the basic syntax for using the VueMotion animation engine?` },
    { role: 'assistant', content: `
The basic syntax is like below:

\`\`\`vue
<script setup>
import { usePlayer, useWidget } from '@vue-motion/core'
import { Motion, Rect, move } from '@vue-motion/lib'
import { onMounted } from 'vue'

// 1. use the hook to get the two key methods.
const { play, useAnimation } = usePlayer()

// 2. Get the widget with the \`useWidget\` hook.
const rect1 = useWidget()

onMounted(() => {
  // 5. use \`useAnimation\` to get a animation manager from the get widget instance.
  useAnimation(rect1)
    .animate(move, { duration: 1, offsetX: 100, offsetY: 100 }) // 6. Add \`move\` animation to the widget.
    .delay(3) // 7. delay 3 seconds.
    .exec(() => {
      console.log('animation end') // 8. output
    })
  // 9. After mounted, call \`play\` method to begin the animation.
  play()
})
</script>

<template>
  <!-- 3. Set the animation root of component \`<Motion>\`, set his width and height -->
  <Motion :width="1600" :height="900">
    <!-- 4. Add a basic widget in animation, and bind the widget instance to the \`widget\` prop -->
    <Rect :width="200" :height="200" :widget="rect1" />
  </Motion>
</template>

\`\`\`

;; There are some thing need to notice:
;; 1. Please use \`useWidget\` first and then use \`useAnimation\` to get the animation manager.
;; 2. The hook \`useAnimation\` is returned by \`usePlayer\`, so please use \`usePlayer\` first.
;; 3. The animation api should be input into \`animate\` method, not a method name.
    `}
  ]
}