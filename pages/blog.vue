<template>
    <main class="container mx-auto">
        <section class="py-10">
            <h2 class="mb-10 text-center text-3xl md:text-5xl"><span class="text-gray-800 font-bold">Blog</span> &#9996;
            </h2>
            <div id="articulos" class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-4">
                <ContentList path="/articles" v-slot="{ list }">
                    <NuxtLink :to="articulo._path" v-for="articulo in list" :key="articulo.slug"
                        class="flex flex-col items-start col-span-4 sm:col-span-1 md:col-span-1 overflow-hidden shadow-sm hover:shadow-lg rounded-xl">
                        <div class="block transition duration-200 ease-out transform hover:scale-110">
                            <!-- <nuxt-img format="webp" class="object-cover w-full shadow-sm lg:max-h-56"
                                :src="`/img/posts/${articulo.img}`" /> -->
                        </div>
                        <div
                            class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl w-full h-full">
                            <div
                                class="bg-blue-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto rounded-full text-xs font-medium text-white inline-block">
                                <span>{{ formatDate(articulo.createdAt) }}</span> <!--Ago 22, 2021-->
                            </div>
                            <h2 class="text-base font-bold sm:text-lg md:text-xl">{{ articulo.title }}</h2>
                            <p class="mt-2 text-sm text-gray-500">{{ articulo.description }}</p>
                        </div>
                    </NuxtLink>
                </ContentList>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("es", options);
        },
    },
};
</script>