<template>
    <header
      class="z-50 flex h-16 fixed w-full font-bold text-gray-700 bg-white bg-opacity-80 border-b backdrop-blur-md backdrop-saturate-150"
    >
      <div class="container flex flex-wrap justify-between items-center mx-auto px-2 lg:px-4 py-4">
        <div class="flex items-center sm:ml-0">
          <button @click="onClickMenu" data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a class="flex" href="/">
            <span class="text-xl ml-2">Daniel Martínez</span>
          </a>
        </div>
        <div :class="[!toggleMenu ? 'hidden' : '', 'w-full bg-white rounded sm:bg-transparent sm:block sm:w-auto mt-3 sm:mt-0']">
          <nav :class="[!toggleMenu ? 'hidden' : 'flex', 'sm:flex flex-col sm:flex-row flex-wrap sm:items-center justify-center text-base sm:py-0 sm:space-x-6']">
          <!-- text-gray-700 hover:bg-gray-50 md:hover:bg-transparent block pr-4 md:hover:text-blue-700 md:p-0 -->
            <NuxtLink v-for="enlace in listadoNavbar" @click.native="onClickItemMenu" :key="`NavbarLink-${enlace.id}`" class="cursor-pointer font-medium pl-4 py-2 border-b rounded border-gray-100 sm:border-0 sm:p-0" :to="enlace.href" v-text="enlace.text"></NuxtLink>
          </nav>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    data(){
      return {
        toggleMenu: false,
        listadoNavbar: [
          {
            id: 1,
            text: "Inicio",
            href: "/"
          },
          // {
          //   id: 2,
          //   text: "Blog",
          //   href: "/blog"
          // },
          // {
          //   id: 3,
          //   text: "Proyectos",
          //   href: "/proyectos"
          // },
          // {
          //   id: 4,
          //   text: "Recursos",
          //   href: "/recursos"
          // },
          // {
          //   id: 5,
          //   text: "Herramientas",
          //   href: "/herramientas"
          // },
          // {
          //   id: 6,
          //   text: "Sobre mí",
          //   href: "/sobremi"
          // },
        ],
      }
    },
    methods: {
      onClickMenu(){
        this.toggleMenu = !this.toggleMenu;
      },
      onClickItemMenu(){
        this.toggleMenu = false;
      }
  
    }
  };
  </script>
  
  <style>
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  </style>
  