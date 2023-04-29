<template>
    <div class="col-span-12 md:col-span-6 lg:col-span-4 md:order-1 grid gap-4 xl:gap-6">
        <!-- Card -->
        <div
            class="md:order-2 relative border border-gray-200 rounded-xl shadow after:absolute after:inset-x-0.5 after:bottom-0.5 after:z-10 after:w-[calc(100%-4px)] after:h-20 after:rounded-b-xl after:bg-gradient-to-t after:from-white after:via-white/[.9] after:to-white/[.4]">
            <div class="relative overflow-hidden w-full h-full rounded-xl">
                <div class="p-6 flex bg-white flex-col justify-between md:min-h-[480px] text-center rounded-xl">
                    <div>
                        <svg class="w-8 h-8 mx-auto mb-4" width="33" height="32" viewBox="0 0 33 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_6991_185972)">
                                <path
                                    d="M16.3333 0C7.49331 0 0.333313 7.16 0.333313 16C0.333313 23.08 4.91331 29.06 11.2733 31.18C12.0733 31.32 12.3733 30.84 12.3733 30.42C12.3733 30.04 12.3533 28.78 12.3533 27.44C8.33331 28.18 7.29331 26.46 6.97331 25.56C6.79331 25.1 6.01331 23.68 5.33331 23.3C4.77331 23 3.97331 22.26 5.31331 22.24C6.57331 22.22 7.47331 23.4 7.77331 23.88C9.21331 26.3 11.5133 25.62 12.4333 25.2C12.5733 24.16 12.9933 23.46 13.4533 23.06C9.89331 22.66 6.17331 21.28 6.17331 15.16C6.17331 13.42 6.79331 11.98 7.81331 10.86C7.65331 10.46 7.09331 8.82 7.97331 6.62C7.97331 6.62 9.31331 6.2 12.3733 8.26C13.6533 7.9 15.0133 7.72 16.3733 7.72C17.7333 7.72 19.0933 7.9 20.3733 8.26C23.4333 6.18 24.7733 6.62 24.7733 6.62C25.6533 8.82 25.0933 10.46 24.9333 10.86C25.9533 11.98 26.5733 13.4 26.5733 15.16C26.5733 21.3 22.8333 22.66 19.2733 23.06C19.8533 23.56 20.3533 24.52 20.3533 26.02C20.3533 28.16 20.3333 29.88 20.3333 30.42C20.3333 30.84 20.6333 31.34 21.4333 31.18C24.6098 30.108 27.37 28.0667 29.3254 25.3435C31.2807 22.6203 32.3328 19.3525 32.3333 16C32.3333 7.16 25.1733 0 16.3333 0Z"
                                    fill="currentColor" class="fill-black"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_6991_185972">
                                    <rect width="32" height="32" fill="white" transform="translate(0.333313)"></rect>
                                </clipPath>
                            </defs>
                        </svg>

                        <h3 class="text-lg md:text-xl font-semibold text-gray-800">
                            Sobre mi
                        </h3>
                        <p class="mt-2 text-gray-500 max-w-xl mx-auto">
                            En este apartado podrás conocer los proyectos en los que he participado, así como las habilidades y conocimientos adquiridos durante mi trayectoria como programador.
                            <!-- En este apartado podrás conocer mi trayectoria en el mundo de la programación, incluyendo proyectos que he realizado en diversas áreas y tecnologías. Los proyectos en los que he participado, así como las habilidades y conocimientos adquiridos durante este camino. -->
                            <!-- En este apartado, encontrarás una lista detallada de mi experiencia como programador, incluyendo proyectos que he realizado en diversas áreas y tecnologías. Desde mi formación académica hasta mis experiencias laborales, podrás conocer mi trayectoria en el mundo de la programación y los proyectos en los que he participado, así como las habilidades y conocimientos adquiridos durante este camino. -->
                        </p>
                        <!-- Open Source Software. Find the entire code on our GitHub. -->
                    </div>
                    <div class="mt-8">
                        <div class="flex justify-end">
                            <FormsToggle v-model="ordenReciente" text="Más reciente primero"></FormsToggle>
                        </div>
                        <!-- Timeline -->
                        <ul :class="getObjectClass" class="flex flex-col text-left space-y-1.5">

                            <GithubNewActivity tipo="Commit" text="dmartinezh97 comenzó una formación sobre Nuxt 3" text-tipo="En progreso" color="bg-orange-500" color-text="bg-orange-100 text-orange-800"></GithubNewActivity>

                            <GithubNewComment fecha="Junio 2022 - Actualmente">
                                <ul class="ml-4 list-disc list-outside">
                                    <li>Vue.JS, Vuetify, Express.js</li>
                                    <li>Mejoras en el rendimiento y en la interfaz del usuario</li>
                                    <li>Implementación de evolutivos y correctivos de frontend y conexión con el backend</li>
                                    <li>Implementación de nuevas pantallas en un software de planificación de turnos y control de horario</li>
                                    <li>Desarrollo de módulos o características para la aplicación BOLD</li>
                                </ul>
                            </GithubNewComment>
                            
                            <GithubNewActivity tipo="Merged" text="dmartinezh97 obtuvo un trabajo como Front-End en Global Planning Solutions" text-tipo="Actualmente" color="bg-green-500" color-text="bg-green-100 text-green-800"></GithubNewActivity>

                            <GithubNewComment fecha="Febrero 2020 - Mayo 2022">
                                <ul class="ml-4 list-disc list-outside">
                                    <li>Vue.JS, React Native y .NET</li>
                                    <li>Desarrollo de aplicaciones web y muliplataforma a medida</li>
                                    <li>Desarrollo de integraciones con A3ERP. Sincronizadores, sitios web, aplicaciones y software de gestión de planta</li>
                                    <li>Desarrollo de integraciones con Prestashop, Salesforce, Zoho y Wordpress</li>
                                </ul>
                            </GithubNewComment>

                            <GithubNewActivity tipo="Merged" text="dmartinezh97 fue contratado como Full-Stack Developer en AT Infoserveis"></GithubNewActivity>

                            <GithubNewActivity tipo="Merged" text="dmartinezh97 se unió a AdStorm"></GithubNewActivity>

                            <GithubNewActivity tipo="Commit" text="Cursó un grado de Administración de Sistemas Informáticos en Red a nivel de grado superior"></GithubNewActivity>

                            <GithubNewActivity tipo="Commit" text="Se graduó en Desarrollo de Aplicaciones Multiplataforma a nivel de grado superior"></GithubNewActivity>

                            <GithubNewActivity tipo="Commit" text="Se graduó en Sistemas Microinformáticos y Redes a nivel de grado medio"></GithubNewActivity>

                            <GithubNewActivity tipo="Merged" text="Participó en un programa de prácticas en Audens Food S.A."></GithubNewActivity>

                            <GithubNewActivity tipo="Commit" text="Añadió la informatica a la branch de intereses"></GithubNewActivity>

                            <GithubNewActivity tipo="Merged" text="dmartinezh97 merged commit d31m10h97 en master el 31 de octubre de 1997" text-tipo="Merged" color="bg-purple-500" color-text="bg-purple-100 text-purple-800"></GithubNewActivity>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Timeline",
    data(){
        return {
            ordenReciente: true,
        }
    },
    computed: {
        getObjectClass(){
            return {
                'flex-col': this.ordenReciente,
                'flex-col-reverse': !this.ordenReciente,
                
            }
        }
    }
}
</script>