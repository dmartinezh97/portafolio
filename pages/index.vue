<template>
    <div>
        <div class="contenedor p-4">
            <div class="aside p-2">
                <Informacion></Informacion>
            </div>
            <div class="main p-2">
                <Proyectos></Proyectos>
            </div>
            <div class="info p-2">
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