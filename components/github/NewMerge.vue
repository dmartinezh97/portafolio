<template>
    <li class="relative flex gap-x-4 items-center justify-between pb-7 overflow-hidden">
        <div class="flex gap-x-4">
            <div class="mt-0.5 relative h-full">
                <div
                    class="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300">
                </div>
                <svg class="w-5 h-5 text-gray-800" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.07447 8.60449C7.04859 8.60449 8.64894 7.0141 8.64894 5.05224C8.64894 3.09039 7.04859 1.5 5.07447 1.5C3.10034 1.5 1.5 3.09039 1.5 5.05224C1.5 7.0141 3.10034 8.60449 5.07447 8.60449ZM5.07447 8.60449V15.709M5.07447 8.60449C5.90425 11.0939 9.79787 14.5156 15.4009 13.1667M5.07447 15.709C3.10034 15.709 1.5 17.2994 1.5 19.2612C1.5 21.2231 3.10034 22.8135 5.07447 22.8135C7.04859 22.8135 8.64894 21.2231 8.64894 19.2612C8.64894 17.2994 7.04859 15.709 5.07447 15.709ZM22.5 12.5722C22.5 14.5341 20.8997 16.1245 18.9255 16.1245C16.9514 16.1245 15.3511 14.5341 15.3511 12.5722C15.3511 10.6104 16.9514 9.01999 18.9255 9.01999C20.8997 9.01999 22.5 10.6104 22.5 12.5722Z"
                        stroke="currentColor" stroke-linecap="round"></path>
                </svg>
            </div>
            <p class="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-white border border-gray-200 shadow-sm">
                {{ text }}
            </p>
        </div>
        <span  v-if="tipo" class="inline-flex items-center h-6 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full" :class="classTextTipo">
            <span class="w-2 h-2 mr-1 bg-green-500 rounded-full" :class="classObjectTipo"></span>
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
                return ['Actualmente'].indexOf(value) !== -1;
            }
        }
    },
    data() {
        return {
            classTextTipo: {
                'bg-green-100 text-green-800': this.tipo == 'Actualmente',
            },
            classObjectTipo: {
                'bg-green-100': this.tipo == 'Actualmente',
            }
        }
    }
}
</script>