import { defineComponent } from 'vue'
import { compile as clp } from 'vue-inbrowser-compiler'
import * as vuemotion_core from '@vue-motion/core'
import * as vue from 'vue'
import * as vuemotion_lib from '@vue-motion/lib'
import * as vuemotion_extension_math from '@vue-motion/extension-math'

export function precompile(code: string): string {
  const compiledObject = clp(code)
  let script = compiledObject.script
  
  // 修改正则表达式以支持变量名中的 $ 符号
  const requirePattern = /(?:(?:var|const|let)\s+)?([$\w]+)\s*=\s*require\((["'])(.+?)\2\)/g
  const matches = Array.from(script.matchAll(requirePattern))
  console.log('matches:', matches)

  for (const key in vue) {
    (window as any)[key] = vue[key]
  }
  
  const moduleMap: Record<string, any> = {
    'https://cdn.jsdelivr.net/npm/@vue-motion/core@latest/dist/index.js': vuemotion_core,
    'https://cdn.jsdelivr.net/npm/@vue-motion/lib@latest/dist/index.js': vuemotion_lib,
    'https://cdn.jsdelivr.net/npm/@vue-motion/extension-math@latest/dist/index.js': vuemotion_extension_math,
    'vue': vue,
  };

  for (const match of matches) {
    const varName = match[1];    // 改为使用第一个捕获组
    const moduleName = match[3]; // 改为使用第三个捕获组
    console.log('Found:', varName, moduleName)
    
    if (moduleMap.hasOwnProperty(moduleName)) {
      (window as any)[varName] = moduleMap[moduleName];
    } else {
      console.warn(`未找到模块: ${moduleName}`);
    }
  }

  console.log(script)

  // 修改 replace 逻辑以处理多个语句
  script = script.replace(
    /^.*require\(("|').+("|')\);/gm,
    ''
  )

  console.log(script)
  
  return script
}

export function compile(processed: string) {
  return defineComponent(Function(processed)())
}
