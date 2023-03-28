<template>
    <li class="relative flex gap-x-4 items-center justify-between pb-7 overflow-hidden">
        <div class="flex gap-x-2 md:gap-x-4 items-center">
            <div class="mt-0.5 relative h-full">
                <div class="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300">
                </div>
                <component :is="getIcon"></component>
            </div>
            <p
                class="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-white md:border md:border-gray-200 md:shadow-sm">
                {{ text }}
            </p>
        </div>
        <span v-if="textTipo" class="inline-flex items-center h-6 text-xs font-medium px-2.5 py-0.5 rounded-full" :class="colorText">
            <span class="w-2 h-2 mr-1 rounded-full " :class="color"></span>
            {{ textTipo }}
        </span>
    </li>
</template>

<script>
import IconCommit from '../icons/IconCommit.vue';
import IconMerge from '../icons/IconMerge.vue';

export default {
    props: {
        text: String,
        icon: String,
        textTipo: {
            type: String,
            required: false
        },
        colorText: {
            type: String,
            required: false
        },
        tipo: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false
        },
    },
    // data() {
    //     return {
    //         classTextTipo: {
    //             'bg-green-100 text-green-800': this.tipo == 'Actualmente' || this.tipo == 'Abierta',
    //             'bg-orange-100 text-orange-800': this.tipo == 'En progreso',
    //             'bg-purple-100 text-purple-800': this.tipo == 'Merged',
    //         },
    //         classObjectTipo: {
    //             'bg-green-500': this.tipo == 'Actualmente' || this.tipo == 'Abierta',
    //             'bg-orange-500': this.tipo == 'En progreso',
    //             'bg-purple-500': this.tipo == 'Merged',
    //         }
    //     }
    // },
    computed: {
        getIcon() {
            switch (this.tipo) {
                case 'Commit':
                    return IconCommit
                case 'Merged':
                    return IconMerge
                default:
                    return IconCommit
            }
        }
    }
}
</script>