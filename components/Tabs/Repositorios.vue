<script setup lang="ts">

const URL_GITHUB = "https://github.com/dmartinezh97/"

const search = ref("")
const proyectos = [
    {
        nombre: "vue3-vuetify3-i18n-template",
        descripcion: "Boilerplate Vue 3 + Vuetify 3 + Pinia + i18n + VueUse",
        slug: "vue3-vuetify3-i18n-template",
        tipo: "Privado",
        fecha: "2022-06-20", //Updated Apr 30, 2023
        lenguaje: "Vue",
        color: "#41B883",
        logo: "vue3-i18n.jpg"
    },
    {
        nombre: "gpt4-pdf-chatbot-langchain",
        descripcion: "GPT4 & LangChain Chatbot for large PDF docs",
        slug: "gpt4-pdf-chatbot-langchain",
        tipo: "Privado",
        fecha: "2023-04-30", //Updated Apr 30, 2023
        lenguaje: "Vue",
        color: "#41B883",
        logo: "pdf-chatbot.jpg"
    },
    {
        nombre: "Audio2Resumen",
        descripcion: "Transcripción de audio a texto utilizando la herramienta Whisper de OpenAI. Generación de texto y resúmenes precisos y concisos.",
        slug: "Audio2Resumen",
        tipo: "Publico",
        fecha: "2023-05-02",
        lenguaje: "JavaScript",
        color: "#FFFF00",
        logo: "audio2resumen.jpg"
    }
]

const proyectosFiltrados = computed(() => {
    return proyectos.filter(proyecto => {
        let valBuscador = search.value.toLowerCase()
        return proyecto.nombre.toLowerCase().includes(valBuscador) ||
        proyecto.descripcion.toLowerCase().includes(valBuscador) ||
        proyecto.lenguaje.toLowerCase().includes(valBuscador) ||
        proyecto.tipo.toLowerCase().includes(valBuscador)
    })
})

const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("es", options);
}

</script>

<template>
    <div>
        <div class="flex">
            <input v-model="search" type="text" id="buscador"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Busca un repositorio...">
            <!-- <div>
                asd
            </div> -->
        </div>
        <div class="flex">
            <ul class="w-full">
                <li v-for="(proyecto, index) in proyectosFiltrados"
                    :class="[index === (proyectosFiltrados.length -1) ? '' : 'border-b-[1px]', ' border-solid border-gray-300 py-6 text-gray-600']"
                    class="flex justify-between w-full">
                    <div class="w-2/12">
                        <div class="flex items-center justify-center">
                            <!-- <img v-if="proyecto.logo" class="h-full w-full rounded-md" :src="getImagePath(proyecto.logo)" :alt="proyecto.nombre" /> -->
                            <img v-if="proyecto.logo" class="w-24 h-24 rounded-md" :src="`/images/repositorios/${proyecto.logo}`" :alt="proyecto.descripcion" />

                            <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg> -->
                        </div>
                    </div>
                    <div class="w-8/12 lg:w-9/12">
                        <div class="inline-block mb-1">
                            <h3 class="flex items-center break-all text-xl font-semibold text-blue-500">
                                <a :href="URL_GITHUB + proyecto.slug">{{ proyecto.nombre }}</a>
                                <span class="text-xs text-gray-500 align-middle border border-gray-500 rounded-[2rem] font-medium ml-1 px-1 leading-[18px]">{{ proyecto.tipo }}</span>
                            </h3>
                        </div>
                        <div>
                            <p class="w-9/12 inline-block text-sm mb-2 pr-4">
                                {{ proyecto.descripcion }}
                            </p>
                        </div>
                        <div class="flex text-xs mt-2">
                            <span class="ml-0 mr-3">
                                <span class="relative inline-block w-3 h-3 top-[2px] mr-1 rounded-[50%] border border-solid border-[#cdd9e533]" :style="'background-color:'+ proyecto.color"></span>
                                <span>{{ proyecto.lenguaje }}</span>
                            </span>
                             <div :date="proyecto.fecha" class="no-wrap">{{ formatDate(proyecto.fecha) }}</div>
                        </div>
                    </div>
                    <div class="w-2/12 ml-3">
                        asd
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>