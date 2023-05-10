<template>
    <div class="flex flex-col-reverse flex-nowrap lg:flex-row">
        <div
            class="flex flex-col justify-center space-y-6 text-center px-4 lg:px-12 lg:w-3/5 xl:items-start xl:flex-grow xl:pr-20 xl:w-1/2 xl:text-left z-10">
            <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-black font-bold tracking-tight">
                Daniel Martínez<br /><span class="text-blue-500">Full-Stack</span>
                Developer
            </h1>
            <p class="text-lg text-gray-900">
                Me apasiona crear aplicaciones web limpias y fáciles de usar.
                Enfocado en Vue y .NET Core. Aunque también sigo muy de cerca todo
                lo relacionado con la seguridad informática.
            </p>
            <NuxtLink
                class="w-full md:w-auto button flex-none bg-gray-900 hover:bg-gray-700 text-white leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                to="/sobremi">
                <div class="flex items-center justify-center capitalize">
                    Más sobre mí
                    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"
                        class="inline w-6 h-6 ml-1">
                        <path fill="none" d="M0 0h256v256H0z"></path>
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="24" d="M40 128h176M144 56l72 72-72 72"></path>
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="flex flex-col justify-center mb-4 lg:w-2/5">
            <img class="w-1/2 md:w-2/5 lg:w-3/5 mx-auto" src="~/assets/img/avatar.png" alt="" />
        </div>
    </div>
</template>