import { precompile, compile as cpl } from "./compiler"

export const ANONYMIZE = Symbol('ANONYMIZE')

export interface BijonParams {
  apiKey: string
  apiUrl?: string
}

export interface BijonConversation {
  user: string
  conversationId?: string
}

export function defineBijonConversation(params: BijonConversation) {
  return params
}

export interface BijonResponse {
  event: string
  message_id: string
  conversation_id: string
  mode: string
  answer: string
  metadata: {
    usage: {
      prompt_tokens: number
      prompt_unit_price: string
      prompt_price_unit: string
      prompt_price: string
      completion_tokens: number
      completion_unit_price: string
      completion_price_unit: string
      completion_price: string
      total_tokens: number
      total_price: string
      currency: string
      latency: number
    }
    retriever_resources: Array<{
      position: number
      dataset_id: string
      dataset_name: string
      document_id: string
      document_name: string
      segment_id: string
      score: number
      content: string
    }>
  }
  created_at: number
}

export function createBijon(params: BijonParams) {
  const apiUrl = params.apiUrl || 'https://api.dify.ai/v1/chat-messages'
  const apiKey = params.apiKey

  function createConversation(params: BijonConversation) {
    const conversation = defineBijonConversation(params)

    async function request(requirement: string) {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {},
          query: requirement,
          response_mode: 'blocking',
          user: params.user,
          files: [],
          conversation_id: conversation.conversationId ?? void 0,
        }),
      })
  
      const data = await response.json() as BijonResponse
      if (data.conversation_id) {
        conversation.conversationId = data.conversation_id
      }
      return data
    }

    function compile(code: string, additionalModules?: Record<string, any>) {
      return cpl(precompile(code, additionalModules))
    }
  
    async function requestAsComponent(requirement: string, additionalModules?: Record<string, any>) {
      const response = await request(requirement)
      const component = compile(
        response.answer.match(/```vue.+```/g)?.[0]
        ? response.answer.replace('```vue', '').replace('```', '').replace(/\/\/.*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->/g, '')
        : response.answer.replace(/\/\/.*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->/g, ''), 
        additionalModules
      )
      return component
    }

    return {
      request,
      compile,
      requestAsComponent,
      ...conversation,
    }
  }

  return {
    createConversation,
  }
}
