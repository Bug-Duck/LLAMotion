import { defineComponent } from 'vue'
import { compile as clp } from 'vue-inbrowser-compiler'

export function precompile(code: string): object {
  const compiledObject = clp(code)
  compiledObject.script.replace(
    'const Vue = require(\'vue\');',
    ''
  )
  return compiledObject
}

export function compile(processed: object) {
  return defineComponent(Function((processed as any).script)())
}
