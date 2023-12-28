// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue';
import '../custom.css'
import './style.css'
import "leaflet/dist/leaflet.css"
import '@supermap/iclient-leaflet/dist/iclient-leaflet.css'
import 'element-plus/dist/index.css';
import 'vitepress-markdown-timeline/dist/theme/index.css'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after':()=>h(Giscus,{
        repo: "DSYZayn/gest_webgis",
        repoId:"R_kgDOKkhevg",
        category:"Announcements",
        categoryId:"DIC_kwDOKkhevs4Cb59n",
        mapping:"pathname",
        strict:"0",
        reactionsEnabled:"1",
        emitMetadata:"0",
        inputPosition:"top",
        theme:"preferred_color_scheme",
        lang:"zh-CN",
        loading:"lazy"
      })
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
