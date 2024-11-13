import { OpenAI } from 'openai'
import { compileVueString } from './utils/compiler'

export interface LLAMotionClientParams {
  apiKey: string
  model: string
}

export function createLLAMotionClient(params: LLAMotionClientParams) {
  const openai = new OpenAI({
    apiKey: params.apiKey,
    dangerouslyAllowBrowser: true,
  })

  async function requestAsCode(prompts: string) {
    console.log('Start to request!')
    const response = await openai.chat.completions.create({
      model: params.model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant that can help me create animations with VueMotion animation engine.' },
        { role: 'user', content: prompts }
      ],
    })
    return response.choices[0].message.content
  }

  async function requestAsComponent(prompts: string) {
    const code = await requestAsCode(prompts)
    console.log(code)
    return compileVueString(code)
  }

  return {
    requestAsCode,
    requestAsComponent
  }
}
