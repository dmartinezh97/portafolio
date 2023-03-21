<template>
    <li class="relative flex gap-x-4 items-center justify-between pb-7 overflow-hidden">
        <div class="flex gap-x-4">
            <div class="mt-0.5 relative h-full">
                <div class="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300">
                </div>
                <svg class="w-5 h-5 text-gray-800" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.8462 12.3462C16.8462 15.0226 14.6765 17.1923 12 17.1923C9.32354 17.1923 7.15385 15.0226 7.15385 12.3462M16.8462 12.3462C16.8462 9.6697 14.6765 7.5 12 7.5C9.32354 7.5 7.15385 9.6697 7.15385 12.3462M16.8462 12.3462H22.5M7.15385 12.3462H1.5"
                        stroke="currentColor" stroke-linecap="round"></path>
                </svg>
            </div>
            <p
                class="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-white border border-gray-200 shadow-smb">
                {{ text }}
            </p>
        </div>
        <span v-if="tipo" class="inline-flex items-center h-6 text-xs font-medium px-2.5 py-0.5 rounded-full"
            :class="classTextTipo">
            <span class="w-2 h-2 mr-1 rounded-full" :class="classObjectTipo"></span>
            {{ tipo }}
        </span>
    </li>
</template>

<script>
export default {
    props: {
        text: String,
        tipo: {
            type: String,
            validator: function (value) {
                return ['Actualmente', 'En progreso', 'Merged', 'Abierta'].indexOf(value) !== -1;
            }
        }
    },
    data() {
        return {
            classTextTipo: {
                'bg-green-100 text-green-800': this.tipo == 'Actualmente' || this.tipo == 'Abierta',
                'bg-orange-100 text-orange-800': this.tipo == 'En progreso',
                'bg-purple-100 text-purple-800': this.tipo == 'Merged',
            },
            classObjectTipo: {
                'bg-green-500': this.tipo == 'Actualmente' || this.tipo == 'Abierta',
                'bg-orange-500': this.tipo == 'En progreso',
                'bg-purple-500': this.tipo == 'Merged',
            }
        }
    }
}
</script>