<script setup lang="ts">
import TabsResumen from '../Tabs/Resumen.vue';
import TabsRepositorios from '../Tabs/Repositorios.vue';
import IconPerson from '../icons/IconPerson.vue';
import IconRepositorio from '../icons/IconRepositorio.vue';
import TabsTimeline from '../Tabs/Timeline.vue';

const contentActive = shallowRef(TabsResumen)
const itemActive = ref(1)
const listadoNavbar = [
    {
        id: 1,
        text: "Resumen",
        icon: IconPerson,
        content: TabsResumen
    },
    {
        id: 2,
        text: "Repositorios",
        icon: IconRepositorio,
        content: TabsRepositorios
    },
    {
        id: 3,
        text: "Sobre mi",
        icon: IconRepositorio,
        content: TabsTimeline
    },
]

const onClickCurrentTab = (item: any) => {
    itemActive.value = item.id
    contentActive.value = item.content
}

</script>

<template>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
        <div class="border-b-2 border-gray-200">
            <ul class="flex flex-wrap -mb-0.5 text-sm font-medium text-center text-gray-500">
                <li v-for="item in listadoNavbar" @click="onClickCurrentTab(item)" :class="{ 'text-blue-500' : itemActive == item.id }" :key="'UnderlineNav' + item.id">
                    <div
                        class="inline-flex p-4 border-b-2 rounded-t-lg cursor-pointer group"
                        :class="[itemActive == item.id ? 'border-blue-500' : 'hover:border-gray-300 hover:text-gray-300']">
                        <component :is="item.icon" class="w-5 h-5 mr-2" :class="[itemActive == item.id ? 'text-blue-500' : 'text-gray-500 group-hover:text-gray-300']"></component>
                        {{ item.text }}
                    </div>
                </li>
            </ul>
        </div>
        <div class="p-2">
            <component :is="contentActive" :key="contentActive.key"></component>
        </div>
    </div>
</template>