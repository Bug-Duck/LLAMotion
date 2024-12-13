import * as vuemotion_core from '@vue-motion/core'
import * as vuemotion_lib from '@vue-motion/lib'
import * as vuemotion_extension_math from '@vue-motion/extension-math'
import * as vue from 'vue'

export function defineModuleMap(map: Record<string, Record<string, any>>): Record<string, any> {
  return map
}

export default defineModuleMap({
  '@vue-motion/core': vuemotion_core,
  '@vue-motion/lib': vuemotion_lib,
  '@vue-motion/extension-math': vuemotion_extension_math,
  'vue': vue,
})
