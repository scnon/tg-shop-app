import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vant/nuxt"],
  devServer: {
    https: {
      key: resolve(__dirname, "ssl/pay.xing.me-key.pem"),
      cert: resolve(__dirname, "ssl/pay.xing.me.pem"),
    },
  }
})