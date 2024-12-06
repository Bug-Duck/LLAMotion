import { createPlayer } from "@vue-motion/core"
import { App } from "vue"
import * as vuemotion_core from '@vue-motion/core'
import * as vuemotion_lib from '@vue-motion/lib'
import * as vuemotion_extension_math from '@vue-motion/extension-math'
import * as vue from 'vue'

export function llamotion() {
  return {
    install(app: App) {
      app.use(createPlayer({
        studio: false,
        fps: 60
      }))
    }
  }
}