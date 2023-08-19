import './assets/main.css'
import 'uno.css'

import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
// import VueApexCharts from 'vue3-apexcharts'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import generatedRoutes from '~pages'
import i18n from './plugins/i18n'
import { setupLayouts } from 'virtual:generated-layouts'
import vuetify from './plugins/vuetify'
import { createWebHashHistory } from 'vue-router'
const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes, history: createWebHashHistory(), base: import.meta.env.BASE_URL }, ({ app, isClient }) => {
    app.use(createPinia())
    app.use(vuetify)
    app.use(createHead())
    app.use(i18n)
    if (isClient) {
        import('vue3-apexcharts').then(({ default: VueApexCharts }) => {
            app.use(VueApexCharts)
        })
    }
})

// const app = createApp({
//     render: () => h(App),
//     setup() {
//         onInitApp()
//     },
// })

// app.use(createPinia())
//     .use(vuetify)
//     .use(createHead())
//     .use(i18n)
//     .use(VueApexCharts)
//     .use(
//         createRouter({
//             history: createWebHistory(import.meta.env.BASE_URL),
//             routes,
//         })
//     )
// app.mount('#app')
