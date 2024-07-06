import TDesign from 'tdesign-mobile-vue';
import 'tdesign-mobile-vue/es/style/index.css';


// export default defineNuxtPlugin({
//     name: 'tdesign',
//     enforce: 'pre',

//     async setup(nuxtApp) {
//     },
//     hooks: {
//         'app:created'() {
//             const nuxtApp = useNuxtApp();
//             nuxtApp.vueApp.use(TDesign);
//         },
//     }
// });

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(TDesign);
})