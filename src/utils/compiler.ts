import { compileTemplate } from '@vue/compiler-sfc'
import { h, defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString } from 'vue'
import * as Vue from 'vue'
import * as vuemotion_core from '@vue-motion/core'
import * as vuemotion_lib from '@vue-motion/lib'
import * as vuemotion_extension_math from '@vue-motion/extension-math'

export function compileVueString(template: string) {
  // 先提取script内容
  const scriptMatch = template.match(/<script.*?>([\s\S]*?)<\/script>/i)
  let scriptContent = scriptMatch ? scriptMatch[1].trim() : ''
  
  // 清除script中的import语句
  scriptContent = scriptContent.replace(/^\s*import\s+.*?['"]\s*;?\s*$/gm, '')
  
  // 完全移除script标签及其内容
  template = template.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  
  // 提取模板内容
  template = template.replace(/^<template>([\s\S]*)<\/template>$/, '$1').trim()
  
  // 移除style标签及其内容
  template = template.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')

  // 验证输入
  if (!template || typeof template !== 'string') {
    throw new Error('Template must be a non-empty string')
  }

  try {
    // 编译script内容
    let setupFunction = () => ({})
    if (scriptContent) {
      try {
        // 将script内容转换为setup函数
        const scriptCode = `
          return {
            setup() {
              ${scriptContent}
            }
          }
        `
        setupFunction = new Function(scriptCode)()?.setup
      } catch (error) {
        console.error('Failed to compile script:', error)
      }
    }

    // 编译模板，更新编译选项
    const { code, errors } = compileTemplate({ 
      source: template, 
      filename: 'dynamic-component.vue', 
      id: 'dynamic-component',
      compilerOptions: {
        mode: 'function',
        prefixIdentifiers: true,  // 启用前缀标识符
        hoistStatic: true,        // 启用静态提升
        cacheHandlers: true,      // 启用事件处理器缓存
        ssr: false,
        inSSR: false
      }
    })

    // 检查编译错误
    if (errors && errors.length > 0) {
      throw new Error(`Template compilation failed: ${errors.join(', ')}`)
    }
    // 创建动态组件
    return defineComponent({
      components: {
        // 确保所有 vuemotion 组件都被正确注册
        Rect: vuemotion_lib.Rect
      },
      setup(props, context) {
        // 执行用户的setup函数
        const userSetup = setupFunction()
        
        return () => {
          try {
            // 提供 Vue 运行时上下文
            const ctx = {
              h,
              openBlock,
              createElementBlock,
              createElementVNode,
              toDisplayString,
              _Vue: {
                createVNode: h,
                createBlock: h,
                resolveComponent: (name: string) => {
                  // 优先从注册的组件中查找
                  if (name in vuemotion_lib) {
                    return vuemotion_lib[name];
                  }
                  if (name in vuemotion_core) {
                    return vuemotion_core[name];
                  }
                  if (name in vuemotion_extension_math) {
                    return vuemotion_extension_math[name];
                  }
                  console.warn(`Component ${name} not found`);
                  return name; // 返回组件名称而不是undefined
                }
              },
              // 确保所有必要的上下文都可用
              Vue,
              ...vuemotion_core,
              ...vuemotion_lib,
              ...vuemotion_extension_math,
              // 将setup返回的数据注入到渲染上下文
              ...userSetup,
              usePlayer: vuemotion_core.usePlayer,
            }
            
            // 修改渲染代码的构造方式
            const renderCode = `
              with(this) {
                ${code.replace('return function render', 'function render')}
                return render.call(this);
              }
            `
            
            const renderFn = new Function(renderCode);
            return renderFn.call(ctx);
          } catch (error: any) {
            console.error('Runtime error in dynamic component:', error)
            // 返回错误提示组件
            return h('div', { class: 'error-message' }, 
              `Failed to render component: ${error.message}`)
          }
        }
      },
    })
  } catch (error: any) {
    console.error('Failed to compile template:', error)
    // 返回错误组件
    return defineComponent({
      name: 'ErrorComponent',
      setup() {
        return () => h('div', { class: 'error-message' }, 
          `Template compilation error: ${error.message}`)
      }
    })
  }
}