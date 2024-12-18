import { createPlayer } from "@vue-motion/core"
import { App, Plugin } from "vue"
import * as vuemotion_lib from '@vue-motion/lib'
import * as vuemotion_extension_math from '@vue-motion/extension-math'

export function bijon() {
  return {
    install(app: App) {
      app.use(createPlayer({
        studio: false,
        fps: 60
      }) as unknown as Plugin)
      for (const i in vuemotion_lib) {
        if ((vuemotion_lib as any)[i].setup) {
          app.component(i, (vuemotion_lib as any)[i]);
        }
      }
      for (const i in vuemotion_extension_math) {
        if ((vuemotion_extension_math as any)[i].setup) {
          app.component(i, (vuemotion_extension_math as any)[i]);
        }
      }
    }
  }
}