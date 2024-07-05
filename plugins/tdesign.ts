import TDesign from 'tdesign-mobile-vue';
import 'tdesign-mobile-vue/es/style/index.css';

export default defineNuxtPlugin({
    name: 'tdesign',

    async setup(nuxtApp) {
        nuxtApp.vueApp.use(TDesign);
    },
});