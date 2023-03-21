<template>
    <div>
        <div class="contenedor p-4">
            <div class="aside w-full p-2">
                <Informacion></Informacion>
            </div>
            <div class="main w-full p-2">
                <Proyectos></Proyectos>
            </div>
            <div class="info w-full p-2">
                <Posts></Posts>
            </div>
            <div class="feed p-2">
                feed
            </div>
        </div>
    </div>
</template>

<style>
.contenedor{
    display: grid;
    grid-template-areas: "aside main main info"
                         "aside main main info"
                         ". feed feed ."
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