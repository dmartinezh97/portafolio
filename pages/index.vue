<template>
    <div>
        <div class="contenedor gap-y-4 p-2 md:p-4 flex flex-col lg:grid">
            <div class="aside md:p-2">
                <Informacion></Informacion>
            </div>
            <div class="main md:p-2">
                <Timeline></Timeline>
            </div>
            <div class="info md:p-2">
                <Articulos></Articulos>
            </div>
            <div class="feed md:p-2">
                Feed de twitter con.. ¿Qué datos? :)
            </div>
        </div>
    </div>
</template>

<style>
.contenedor{
    /* display: grid; */
    grid-template-areas: "aside main main info"
                         "aside main main info"
                         ". feed feed .";
    grid-template-columns: repeat(4, 1fr);
}

.aside{
    grid-area: aside;
}

.main{
    grid-area: main;
}

.info{
    grid-area: info;
}

.feed{
    grid-area: feed;
}
</style>