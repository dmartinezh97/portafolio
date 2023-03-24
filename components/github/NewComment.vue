<template>
    <li class="relative flex gap-x-4 items-center justify-between pb-7 overflow-hidden">
        <div class="flex gap-x-4 w-full">
            <div class="relative h-full">
                <div class="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300">
                </div>
                <img class="w-6 h-6 rounded-full shadow-lg"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bonnie image" />
            </div>
            <div
                class="w-full items-center justify-between p-4 text-xs text-gray-600 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex">
                {{ text }}
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        text: String,
    }
}
</script>