# Vue Dynamic Component Compiler

This module provides a utility function to compile a Vue template string into a Vue component. It can be useful for dynamically rendering Vue components from template strings at runtime.

## Functions

### `compileVueString(template: string)`

Compiles a Vue template string into a dynamic Vue component.

#### Parameters
- **template** (`string`): A Vue template string to be compiled. This string should represent the structure of the Vue component.

#### Returns
- **DynamicComponent** (`Component`): A Vue component instance that can be rendered directly in your application. The component renders based on the template provided.

#### Example
```javascript
import { compileVueString } from './path-to-file'

const template = `<div>Hello, {{ name }}!</div>`

const DynamicComponent = compileVueString(template)

// Usage in a Vue app
app.component('DynamicComponent', DynamicComponent)
```

#### Usage Details

1. **Compile Template**: The function uses `@vue/compiler-sfc`'s `compileTemplate` function to compile the provided `template` string into JavaScript code.
   - The compiled template is wrapped in a `code` property.

2. **Define Component**: Using Vue's `defineComponent`, a new component named `DynamicComponent` is created.
   - Inside the component's `setup` function, a render function is dynamically constructed using the `Function` constructor.
   - The `h` function (Vue's hyperscript utility) is passed to the render function, allowing it to generate virtual DOM nodes.

3. **Return Dynamic Component**: The compiled and rendered component can now be used in a Vue application, displaying content based on the `template` string.
