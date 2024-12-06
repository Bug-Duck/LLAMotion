import { defineComponent } from 'vue'
import { compile as clp } from 'vue-inbrowser-compiler'

export function precompile(code: string): string {
  // Remove all import statements before compilation
  const compiledObject = clp(code)
  let script = compiledObject.script
  script = script.replace(
    'const Vue = require(\"vue\");',
    ''
  ).replace(/const .+ = require\(".+"\)/, '')
  console.log(script)
  return script
}

export function compile(processed: string) {
  return defineComponent(Function(processed)())
}
