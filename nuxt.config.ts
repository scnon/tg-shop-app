import mkcert from 'vite-plugin-mkcert'
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
    https: true
  },

  typescript: {
    typeCheck: true
  },

  vite: {
    plugins: [
      mkcert(),
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