<template>
  <article id="article" class="w-full max-w-[800px] mx-auto">
    <ContentDoc v-slot="{ doc }">
      <div id="article-content-wrapper" class="mt-8">
        <div id="article-content">
          <header id="article-header" class="flex items-center mb-8">
            <picture class="mr-3">
              <component :is="getIcon(doc.icon)" :alt="'Imagen de la etiqueta ' + doc.icon" class="w-24 h-24"></component>
            </picture>
            <div class="article-header-meta">
              <h1 class="text-4xl font-semibold text-gray-900 leading-9">{{ doc.title }}</h1>
              <div id="article-meta" class="mt-3 text-xs flex items-center gap-x-1"><time itemprop="datePublished"
                  datetime="2023-02-10T00:00:00Z">10 febrero 2023</time>
                ·
                <span>3 minutos de lectura</span>
                ·
                <a target="_blank" rel="noopener nofollow" class="flex items-center"
                  :href="'https://github.com/dmartinezh97/portafolio/edit/master/content/' + doc._file">¿Una
                  errata? Edita el artículo<IconsIconGithub class="w-5 h-5 ml-1"></IconsIconGithub> </a>
              </div>
            </div>
          </header>
          <div id="articleBody" class="prose prose-gray prose-lg max-w-none">
            <ContentRenderer :value="doc" />
          </div>
        </div>
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
    }
  }
}
</script>