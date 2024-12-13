<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { createLLMVision } from '../../src/index'

const prompt = ref('')
const apiKey = ref('')
const previewComponent = ref(null)
const showApiKeyInput = ref(false)
const scale = ref(1)

// Cookie handling functions
function setCookie(name: string, value: string, days = 365) {
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`
}

function getCookie(name: string) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return null
}

// Initialize client with stored API key
let client: any = null

onMounted(() => {
  const savedApiKey = getCookie('llm_api_key')
  if (savedApiKey) {
    apiKey.value = savedApiKey
    initializeClient(savedApiKey)
  } else {
    showApiKeyInput.value = true
  }
})

function initializeClient(key: string) {
  client = createLLMVision({
    apiKey: key,
    user: 'test',
  })
}

function handleSaveApiKey() {
  if (apiKey.value) {
    setCookie('llm_api_key', apiKey.value)
    initializeClient(apiKey.value)
    showApiKeyInput.value = false
  }
}

async function handleGenerate() {
  if (!client) {
    showApiKeyInput.value = true
    return
  }
  let component = null
  component = await client.requestAsComponent(prompt.value)
  previewComponent.value = component
  nextTick(() => {
    calculateScale()
  })
}

function calculateScale() {
  const container = document.querySelector('.preview-section')
  const content = container?.querySelector('div')
  if (!container || !content) return

  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight
  const contentWidth = content.clientWidth
  const contentHeight = content.clientHeight

  const scaleX = containerWidth / contentWidth
  const scaleY = containerHeight / contentHeight
  scale.value = Math.min(scaleX, scaleY)
}
</script>

<template>
  <div class="container">
    <!-- API Key Modal -->
    <div v-if="showApiKeyInput" class="api-key-modal">
      <div class="modal-content">
        <h2>Enter OpenAI API Key</h2>
        <input v-model="apiKey" type="password" placeholder="sk-..." class="api-key-input" />
        <button @click="handleSaveApiKey" class="save-key-btn">
          Save API Key
        </button>
      </div>
    </div>

    <div class="input-section">
      <textarea v-model="prompt" placeholder="Enter your animation prompt here..." class="prompt-input"></textarea>
      <button @click="handleGenerate" class="generate-btn">
        Generate Animation
      </button>
    </div>

    <div class="preview-section">
      <component v-if="previewComponent" :is="previewComponent" :style="{ transform: `scale(${scale})` }" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 16px;
  gap: 16px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.api-key-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
}

.api-key-input {
  width: 100%;
  height: 35px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

.save-key-btn {
  padding: 12px 24px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.input-section {
  display: flex;
  gap: 16px;
  width: 100%;
  min-height: 80px;
  flex-shrink: 0;
}

.prompt-input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  font-family: inherit;
  font-size: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.generate-btn {
  padding: 0 32px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s;
  white-space: nowrap;
}

.generate-btn:hover {
  background-color: #45a049;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.preview-section {
  flex: 1;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  zoom: 0.5;
}

.preview-section :deep(> div) {
  transform-origin: center center;
}
</style>
