import { createPlayer } from "@vue-motion/core"
import { App } from "vue"
import * as vuemotion_core from '@vue-motion/core'
import * as vuemotion_lib from '@vue-motion/lib'
import * as vue from 'vue'

export function llamotion() {
  return {
    install(app: App) {
      app.use(createPlayer({
        studio: false,
        fps: 60
      }))
      for (const key in vuemotion_core) {
        (window as any)[key] = vuemotion_core[key as keyof typeof vuemotion_core]
      }
      for (const key in vue) {
        (window as any)[key] = vue[key as keyof typeof vue]
      }
      for (const key in vuemotion_lib) {
        (window as any)[key] = vuemotion_lib[key as keyof typeof vuemotion_lib]
      }
      for (const i in vuemotion_lib) {
        if ((vuemotion_lib as any)[i].setup) {
          app.component(i, (vuemotion_lib as any)[i]);
        }
      }
    }
  }
}