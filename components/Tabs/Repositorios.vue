<script setup lang="ts">

const search = ref("")

</script>

<template>
    <div>
        <div class="flex">
            <input v-model="search" type="text" id="buscador" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Busca un repositorio...">
            <!-- <div>
                asd
            </div> -->
        </div>
        <div class="flex">
            <ul class="w-full">
                <li class="flex justify-between w-full border-b-[1px] border-solid border-[#373E47] py-6 text-[#ADBAC7]">
                    jj
                </li>
            </ul>
        </div>
    </div>
</template>