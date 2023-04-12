<template>
    <div
        class="relative flex flex-col items-center rounded-[20px] bg-white bg-clip-border">
        <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
            <div class="w-full h-32 rounded-xl bg-gradient-to-r from-[#42d392] to-[#647eff]">
                <!-- Botón descargar CV -->
                <!-- https://codepen.io/paulkoeckdev/pen/MWmvbJK -->
                <!-- <div class="flex justify-end p-1 px-2">
                    <button type="button" class="px-2 py-1 bg-white/40 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex">
                        <IconsIconDownload></IconsIconDownload>
                        <span>Descargar CV</span>
                    </button>
                </div> -->
            </div>
            <!-- <img alt="Degradado" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png'
                class="absolute flex h-32 w-full justify-center rounded-xl bg-cover"> -->
            <div
                class="absolute -bottom-14 flex h-[120px] w-[120px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
                <img class="h-full w-full rounded-full" src="~/assets/img/avatar.png" alt="Foto de perfil" />
            </div>
        </div>
        <div class="mt-16 flex flex-col items-center">
            <h4 class="text-xl font-bold text-navy-700">
                Daniel Martínez
            </h4>
            <p class="text-base font-normal text-gray-600">Full-Stack Developer</p>
        </div>
        <CardsMiGithubButtons class="mt-2"></CardsMiGithubButtons>
        <!-- <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
            <div class="flex flex-col items-center justify-center">
                <p class="text-2xl font-bold text-navy-700">17</p>
                <p class="text-sm font-normal text-gray-600">Proyectos</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <p class="text-2xl font-bold text-navy-700">
                    9.7K
                </p>
                <p class="text-sm font-normal text-gray-600">Cafes</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <p class="text-2xl font-bold text-navy-700">
                    434
                </p>
                <p class="text-sm font-normal text-gray-600">Ideas</p>
            </div>
        </div> -->
    </div>
</template>