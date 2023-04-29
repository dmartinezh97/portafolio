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
    </div>
</template>