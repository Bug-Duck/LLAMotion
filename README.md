# LLAMotion SDK

This is the SDK for LLAMotion, a tool that allows you to generate VueMotion animations from natural language.

## Installation

```bash
npm install llamotion-sdk
```

And use the plugin in your Vue app:

```javascript
import { createApp } from 'vue'
import { llamotion } from 'llamotion-sdk'

createApp(App).use(llamotion()).mount('#app')
```

## Usage

Notice: LLAMotion is still in the alpha stage, the API still not be public. This document is for the internal user.

Firstly, you need to create a client:

```javascript
const client = createLLAMotionClient({
  apiKey: 'YOUR_OPENAI_API_KEY',
  model: 'The current fine-tuned model'
})
```

And then you can use the client to request the animation:

```javascript
const animation = await client.requestAsComponent('Please create a simple animation that moves a rectangle and a arc with VueMotion zoom out to 2x, please use animation api scale')
```

The `animation` is a dynamic component, you can use it directly in your template:

```vue
<template>
  <component :is="animation" />
</template>
```

The last step is set the style:

```vue
<style scoped>
template {
  display: block;
}
</style>
```

If you want to just compile the Vue component, you can use `compileVueString` function:

```javascript
const component = compileVueString(code)
```

The main reason is that you may want to use other language to generate the Vue component.
