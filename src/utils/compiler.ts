import { defineComponent } from 'vue'
import { compile as clp } from 'vue-inbrowser-compiler'

export function precompile(code: string): object {
  // Remove all import statements before compilation
  const codeWithoutImports = code.replace(/import\s+.*?['"]\s*;?\s*\n?/g, '')
  const compiledObject = clp(codeWithoutImports)
  compiledObject.script.replace(
    'const Vue = require(\'vue\');',
    ''
  )
  return compiledObject
}

export function compile(processed: object) {
  return defineComponent(Function((processed as any).script)())
}
