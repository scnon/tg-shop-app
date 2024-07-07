import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  devServer: {
    port: 3000,
    host: 'pay.xing.me',
    // https: false,
    https: {
      key: resolve(__dirname, "ssl/pay.xing.me-key.pem"),
      cert: resolve(__dirname, "ssl/pay.xing.me.pem"),
    },
  },

  typescript: {
    typeCheck: true
  },

  vite: {
    plugins: [
      AutoImport({
        resolvers: [TDesignResolver({
          library: 'mobile-vue'
        })],
      }),

      Components({
        resolvers: [TDesignResolver({
          library: 'mobile-vue'
        })],
      }),
    ],
    ssr: {
    }
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },

  compatibilityDate: '2024-07-06'
})