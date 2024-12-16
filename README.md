# Bijon

Bijon is a Vue component generation tool based on VueMotion that generates mathematical, physical, statistical animations through natural language.

## Installation

```bash
npm install bijon
# or
yarn add bijon
```

## Basic Usage

### 1. Create Bijon Instance

```javascript
import { createBijon } from 'bijon'

const bijon = createBijon({
  apiKey: 'YOUR_DIFY_API_KEY',  // Dify API Key
  apiUrl: 'YOUR_API_URL'        // Optional, defaults to https://api.dify.ai/v1/chat-messages
})
```

### 2. Create Conversation

```javascript
const conversation = bijon.createConversation({
  user: 'user_id',              // User identifier
  conversationId: 'xxx'         // Optional, for continuing previous conversations
})
```

### 3. Generate Components

```javascript
// Method 1: Get component directly
const component = await conversation.requestAsComponent('Create a counter component')

// Method 2: Get response and compile manually
const response = await conversation.request('Create a counter component')
const component = conversation.compile(response.answer)
```

## Using in Vue Applications

### 1. Register Plugin

```javascript
import { createApp } from 'vue'
import { bijon } from 'bijon'
import App from './App.vue'

const app = createApp(App)
app.use(bijon())
```

### 2. Use in Components

```vue
<template>
  <div>
    <component :is="generatedComponent" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createBijon } from 'bijon'

const generatedComponent = ref(null)
const bijon = createBijon({
  apiKey: 'YOUR_DIFY_API_KEY'
})

const conversation = bijon.createConversation({
  user: 'user_id'
})

// Generate component
const init = async () => {
  generatedComponent.value = await conversation.requestAsComponent('Create a counter component')
}

init()
</script>
```

## API Reference

### createBijon(params)

Creates a Bijon instance.

Parameters:
- `params.apiKey`: Dify API key (required)
- `params.apiUrl`: API URL (optional)

### createConversation(params)

Creates a conversation instance.

Parameters:
- `params.user`: User identifier (required)
- `params.conversationId`: Conversation ID (optional)

### conversation.request(requirement)

Sends a request and gets the raw response.

Parameters:
- `requirement`: Component requirement description

Returns: Promise<BijonResponse>

### conversation.requestAsComponent(requirement, additionalModules?)

Requests and compiles directly to a Vue component.

Parameters:
- `requirement`: Component requirement description
- `additionalModules`: Additional module mappings (optional)

Returns: Promise<Component>

### conversation.compile(code, additionalModules?)

Compiles Vue component code.

Parameters:
- `code`: Component code
- `additionalModules`: Additional module mappings (optional)

Returns: Component

## Built-in Modules

Bijon comes with the following modules pre-integrated:
- `@vue-motion/core`
- `@vue-motion/lib`
- `@vue-motion/extension-math`
- `vue`

## License

MIT