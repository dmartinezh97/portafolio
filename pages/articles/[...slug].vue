<template>
  <article id="article" class="flex w-full max-w-[800px] mx-auto">
    <ContentDoc v-slot="{ doc }">
      <div id="article-content-wrapper" class="my-12 px-4">
        <div id="article-content">
          <header id="article-header" class="flex items-center mb-9">
            <picture class="mr-3">
              <component :is="getIcon(doc.icon)" :alt="'Imagen de la etiqueta ' + doc.icon" class="w-24 h-24"></component>
            </picture>
            <div class="article-header-meta">
              <h1 class="text-4xl font-semibold text-gray-900 leading-9">{{ doc.title }}</h1>
              <div id="article-meta" class="mt-3 text-xs flex items-center gap-x-1">
                <time>{{ formatDate(doc.date) }}</time>
                ·
                <span>{{ doc.tiempo }} minutos de lectura</span>
                ·
                <a target="_blank" rel="noopener nofollow" class="flex items-center"
                  :href="'https://github.com/dmartinezh97/portafolio/edit/master/content/' + doc._file">¿Una
                  errata? Edita el artículo<IconsIconGithub class="w-5 h-5 ml-1"></IconsIconGithub> </a>
              </div>
            </div>
          </header>
          <div id="articleBody" class="prose prose-lg max-w-none scroll-smooth">
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </div>
      <div class="block fixed right-10 z-[2] max-w-[224px] mt-12" v-if="doc.toc">
        <h3 class="text-sm pb-2 font-normal ">Contenido del artículo</h3>
        <ul class="list-none list-outside">
          <li v-for="link in doc.body.toc.links">
            <NuxtLink :to="{ hash: '#' + link.id }" class="leading-6 text-xs font-medium text-gray-500">
              <!-- <a :href="'#' + link.id"></a> -->
              <span>{{ link.text }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </ContentDoc>
  </article>
</template>

<script>
import IconJavascript from '../../components/icons/IconJavascript.vue';
import IconVue from '../../components/icons/IconVue.vue';

export default {
  methods: {
    getIcon(icon) {
      switch (icon) {
        case 'JavaScript':
          return IconJavascript
        case 'Vue':
          return IconVue
        default:
          return IconVue
      }
    },
    scrollToTop(id) {
      this.$scrollTo(id)
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("es", options);
    },
  }
}
</script>