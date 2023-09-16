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
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
                { hid: 'description', name: 'description', content: 'Artículos y recursos sobre Desarrollo Web, Frontend, JavaScript, Vue, CSS y Performance Web' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        },
        pageTransition: { name: 'page', mode: 'in-out' }
    },
    content: {
        highlight: {
            preload: [
                'vue',
                'js',
                'html',
                'css'
            ],
            theme: {
                default: 'github-dark',
            }
        }
    },
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '@/assets/css/main.css'
    ],
})
