export function usagePrompt() {
  return [
    { role: 'user', content: `What's the basic syntax for using the VueMotion animation engine?` },
    { role: 'assistant', content: `
The basic syntax is like below:

\`\`\`vue
<script setup>
import { usePlayer, useWidget } from 'https://cdn.jsdelivr.net/npm/@vue-motion/core@latest/dist/index.js'
import { Motion, Rect, move } from 'https://cdn.jsdelivr.net/npm/@vue-motion/lib@0.6.0/dist/index.js'
import { onMounted } from 'https://cdn.jsdelivr.net/npm/vue@3.5.12/dist/vue.esm-browser.js'

// 1. use the hook to get the two key methods.
const { play, useAnimation } = usePlayer()

// 2. Get the widget instance from the \`useWidget\` hook by the \`wid\`.
const rect1 = useWidget('rect1')

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
    <!-- 4. Add a basic widget in animation, and set his wid (Widget ID) -->
    <Rect :width="200" :height="200" wid="rect1" />
  </Motion>
</template>
\`\`\`

;; There are some thing need to notice:
;; 1. The \`wid\` is the unique id of the widget, it's required for getting the widget instance.
;; 2. Please use \`useWidget\` first and then use \`useAnimation\` to get the animation manager.
;; 3. The hook \`useAnimation\` is returned by \`usePlayer\`, so please use \`usePlayer\` first.
;; 4. The animation api should be input into \`animate\` method, not a method name.
    `}
  ]
}