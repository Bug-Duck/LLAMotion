<script setup lang="ts">
import { ref, onMounted, nextTick, markRaw } from 'vue'
import { createBijon } from 'bijon'
import { usePlayer } from '@vue-motion/core'

const prompt = ref('')
const apiKey = ref('')
const previewComponent = ref(null)
const showApiKeyInput = ref(false)
const scale = ref(1)
const conversations = ref<Array<{id: string, messages: Array<{role: string, content: string}>}>>([])
const currentConversation = ref<any>(null)
const isLoading = ref(false)
const isPaused = ref(false)
const { elapsed, pause, play } = usePlayer()

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
let bijon: any = null
let conversation: any = null

onMounted(() => {
  const savedApiKey = getCookie('bijon_api_key')
  if (savedApiKey) {
    apiKey.value = savedApiKey
    initializeClient(savedApiKey)
  } else {
    showApiKeyInput.value = true
  }
})

function initializeClient(key: string) {
  bijon = createBijon({
    apiKey: key,
  })
}

function createNewConversation() {
  if (!bijon) return
  
  conversation = bijon.createConversation({
    user: 'test-user'
  })
  
  conversations.value.push({
    id: Date.now().toString(),
    messages: []
  })
  
  currentConversation.value = conversations.value[conversations.value.length - 1]
}

function handleSaveApiKey() {
  if (apiKey.value) {
    setCookie('bijon_api_key', apiKey.value)
    initializeClient(apiKey.value)
    showApiKeyInput.value = false
    createNewConversation()
  }
}

async function handleGenerate() {
  if (!bijon || !conversation) {
    showApiKeyInput.value = true
    return
  }

  const userPrompt = prompt.value
  prompt.value = ''
  isLoading.value = true

  currentConversation.value.messages.push({
    role: 'user',
    content: userPrompt
  })

  try {
    const component = await conversation.requestAsComponent(userPrompt)
    
    previewComponent.value = null
    await nextTick()
    await initializePlayer(component)
    
    currentConversation.value.messages.push({
      role: 'assistant',
      content: 'Generated animation component'
    })
    
    await nextTick()
    calculateScale()
  } catch (error) {
    console.error('Generation failed:', error)
  } finally {
    isLoading.value = false
  }
}

function calculateScale() {
  const container = document.querySelector('.preview-section')
  const content = container?.querySelector('div')
  if (!container || !content) return

  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight
  const contentWidth = content.scrollWidth
  const contentHeight = content.scrollHeight

  const padding = 40
  const scaleX = (containerWidth - padding) / contentWidth
  const scaleY = (containerHeight - padding) / contentHeight
  scale.value = Math.min(scaleX, scaleY, 1)
}

async function initializePlayer(component: any) {
  previewComponent.value = markRaw(component)
  await nextTick()
}

function togglePause() {
  if (isPaused.value) {
    play()
  } else {
    pause()
  }
  isPaused.value = !isPaused.value
}

function restart() {
  elapsed.value = 0
  if (isPaused.value) {
    play()
    isPaused.value = false
  }
}
</script>

<template>
  <div class="container">
    <!-- API Key Modal -->
    <div v-if="showApiKeyInput" class="api-key-modal">
      <div class="modal-content">
        <h2>Enter Bijon API Key</h2>
        <input v-model="apiKey" type="password" placeholder="sk-..." class="api-key-input" />
        <button @click="handleSaveApiKey" class="save-key-btn">
          Save API Key
        </button>
      </div>
    </div>

    <div class="main-content">
      <!-- Conversations Sidebar -->
      <div class="conversations-sidebar">
        <button @click="createNewConversation" class="new-chat-btn">
          New Chat
        </button>
        <div class="conversation-list">
          <div v-for="conv in conversations" 
               :key="conv.id" 
               :class="['conversation-item', { active: currentConversation?.id === conv.id }]"
               @click="currentConversation = conv">
            Chat {{ conv.id }}
          </div>
        </div>
      </div>

      <div class="chat-container">
        <!-- Chat Messages -->
        <div class="messages-container">
          <div v-for="(message, index) in currentConversation?.messages" 
               :key="index"
               :class="['message', message.role]">
            {{ message.content }}
          </div>
        </div>

        <!-- Input Section -->
        <div class="input-section">
          <textarea v-model="prompt" 
                    placeholder="Enter your animation prompt here..." 
                    class="prompt-input"
                    :disabled="isLoading"
                    @keyup.enter="handleGenerate"></textarea>
          <button @click="handleGenerate" 
                  class="generate-btn"
                  :disabled="isLoading">
            <span v-if="!isLoading">Generate Animation</span>
            <div v-else class="loading-spinner"></div>
          </button>
        </div>
      </div>

      <!-- Preview Section -->
      <div class="preview-section">
        <div class="preview-wrapper">
          <component v-if="previewComponent" 
                     :is="previewComponent" 
                     :key="Date.now()"
                     :style="{
                       transform: `scale(${scale})`,
                       transformOrigin: 'center center'
                     }" />
        </div>
        
        <div v-if="previewComponent" class="player-controls">
          <button @click="restart" class="control-btn">
            <span>⟲</span>
          </button>
          <button @click="togglePause" class="control-btn">
            <span>{{ isPaused ? '▶' : '⏸' }}</span>
          </button>
        </div>
      </div>
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
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.conversations-sidebar {
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.new-chat-btn {
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 16px;
}

.conversation-list {
  flex: 1;
  overflow-y: auto;
}

.conversation-item {
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 8px;
}

.conversation-item.active {
  background-color: #e8f5e9;
}

.chat-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 16px;
}

.message {
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  max-width: 80%;
}

.message.user {
  background-color: #e3f2fd;
  margin-left: auto;
}

.message.assistant {
  background-color: #f5f5f5;
  margin-right: auto;
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

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.generate-btn:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

.prompt-input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.player-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.control-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.preview-section {
  position: relative;
}
</style>
