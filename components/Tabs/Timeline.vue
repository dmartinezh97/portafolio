<template>
    <div
        class="md:order-2 relative after:absolute after:inset-x-0.5 after:bottom-0.5 after:z-10 after:w-[calc(100%-4px)] after:h-20 after:rounded-b-xl after:bg-gradient-to-t after:from-white after:via-white/[.9] after:to-white/[.4]">
        <div class="relative overflow-hidden w-full h-full rounded-xl">
            <div class="p-6 flex bg-white flex-col justify-between md:min-h-[480px] text-center rounded-xl">
                <div>
                    <IconsIconGithub class="w-8 h-8 mx-auto mb-4"></IconsIconGithub>

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