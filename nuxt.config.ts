// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Daniel Martínez | Full-Stack Developer',
            htmlAttrs: {
                lang: 'es'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Artículos y recursos sobre Desarrollo Web, Frontend, JavaScript, Vue, CSS y Performance Web' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content'
    ],
    css: [
        '@/assets/css/main.css'
    ]
})
