import { compileTemplate } from '@vue/compiler-sfc'
import { h, defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString } from 'vue'

export function compileVueString(template: string) {
  // 验证输入
  if (!template || typeof template !== 'string') {
    throw new Error('Template must be a non-empty string')
  }

  try {
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
      name: 'DynamicComponent',
      setup() {
        return () => {
          try {
            // 提供 Vue 运行时上下文
            const ctx = {
              openBlock,
              createElementBlock,
              createElementVNode,
              toDisplayString,
              _Vue: {
                createVNode: h,
                createBlock: h,
              }
            }
            
            // 修改代码执行方式，确保代码是一个合法的函数体
            const renderCode = `
              with(this) {
                return (function(h) {
                  ${code.replace('return function render', 'function render')}
                  return render()
                })(h)
              }
            `
            const renderFn = new Function('h', renderCode)
            return renderFn.call(ctx, h)
          } catch (error: any) {
            console.error('Runtime error in dynamic component:', error)
            // 返回错误提示组件
            return h('div', { class: 'error-message' }, 
              `Failed to render component: ${error.message}`)
          }
        }
      }
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