<template>
    <div class="container mx-auto">
        <div class="px-4 py-14">
            <CardsMiInformacion></CardsMiInformacion>
            <CardsMisLenguajes></CardsMisLenguajes>
        </div>
        <div class="contenedor gap-y-4 p-2 md:p-4 flex flex-col lg:grid">
            <div class="proyectos md:p-2">
                <TabsUnderlineNav></TabsUnderlineNav>
                <Proyectos></Proyectos>
            </div>
            <div class="articulos md:p-2">
                <Articulos></Articulos>
            </div>
            <div class="timeline md:p-2">
                <Timeline></Timeline>
            </div>
            <!-- <div class="feed md:p-2">
                Feed de twitter con.. ¿Qué datos? :)
            </div> -->
        </div>
    </div>
</template>

<style>
.contenedor{
    /* display: grid; */
    grid-template-areas: "proyectos proyectos articulos"
                         "proyectos proyectos articulos"
                         "timeline timeline .";
    grid-template-columns: repeat(3, 1fr);
}

.proyectos{
    grid-area: proyectos;
}

.timeline{
    grid-area: timeline;
}

.articulos{
    grid-area: articulos;
}

.feed{
    grid-area: feed;
}
</style>