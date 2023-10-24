import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GEST WebGIS",
  description: "The Best Course Docs!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/example/markdown-examples' },
      { text: 'API', link: '/api/api-examples' },
    ],

    sidebar: {
      "example":[
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/example/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api/api-examples' }
          ]
        }
      ],
      "api":[
        {
          text: 'API',
          items: [
            { text: 'API Examples', link: '/api/api-examples' },
            { text: "Markdown Examples", link:"/example/markdown-examples"}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DSYZayn' }
    ],
    footer: {
      message: "©2023 GEST WebGIS. All rights reserved.",
      copyright: "MIT Licensed | Copyright (c) 2021 GEST WebGIS"
    }
  }
})
