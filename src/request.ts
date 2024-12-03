import { OpenAI } from 'openai'
import { compileVueString } from './utils/compiler'
import { getPrompt } from './prompts/choices'
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'
import { apiDocuments } from './prompts/document'
import { usagePrompt } from './prompts/usage'

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
    const messages = [
      ...usagePrompt(),
      { role: 'system', content: getPrompt() },
      { role: 'user', content: `
Now please generate the json data for the following prompts:

\`\`\`txt
${prompts}
\`\`\`

Please output in json format, and only json format without any other text.
      `}
    ]
    const firstResponse = await openai.chat.completions.create({
      model: params.model,
      messages: messages as ChatCompletionMessageParam[],
    })
    messages.push(firstResponse.choices[0].message)
    const jsonData = JSON.parse(firstResponse.choices[0].message.content.replace('```json', '').replace('```', ''))
    console.log(jsonData)
    messages.push({ role: 'system', content: `
Now we have the concrete APIs documentation for the widget and animation that you choose, If it has not default value, it is required:

${
  Object.keys(apiDocuments).map(key => {
    if (jsonData.widget.includes(key) || jsonData.animations.includes(key)) {
      return `- ${key}: ${apiDocuments[key]}`
    }
    return ''
  }).join('\n')
}

Now please generate the vue code for the following prompts:

\`\`\`txt
${prompts}
\`\`\`
      ` })
    console.log(messages)
    const response = await openai.chat.completions.create({
      model: params.model,
      messages: messages as ChatCompletionMessageParam[],
    })
    return response.choices[0].message.content.replace('```vue', '').replace('```', '')
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
