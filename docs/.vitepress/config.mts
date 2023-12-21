// import { defineConfig } from 'vitepress'
import {withMermaid} from 'vitepress-plugin-mermaid';
import timeline from 'vitepress-markdown-timeline';

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "GEST WebGIS",
  description: "The Best Course Docs!",
  base: '/gest_webgis/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SuperMap', link: '/supermap/'}
    ],

    sidebar: {
      "supermap":[
        {
          text: "前言",
          link: "/supermap/",
          items: [
            { text: '基本介绍',
              link: "/supermap/intro/",
              items:[
                { text: 'SuperMap iServer 简介', link: '/supermap/intro/#supermap-iserver' },
                { text: 'SuperMap iClient 简介', link: '/supermap/intro/#supermap-iclient'},
                { text: 'JavaScript 简介', link: '/supermap/intro/javascript'},
                { text: 'TypeScript 简介', link: '/supermap/intro/typescript'}
              ]
            },
            {
              text: 'Vue3 简介',
              link: "/supermap/vue3/"
            },
            {
              text: "环境配置",
              items: [
                { text:"SuperMap iServer配置", link: '/supermap/env/iserver'},
                { text: "vue3基础配置", link: '/supermap/env/vue3'}
              ]
            },
            {
              text:'iServer服务',
              items:[
                { text:'发布', link: '/supermap/services/publish'},
                { text:'管理', link: '/supermap/services/manage'},
                { text:'注册地理数据库', link: '/supermap/services/register'}
              ]
            },
            {
              text:'应用开发',
              items:[
                { text: '准备', link: '/supermap/app/prepare'},
                { text: '加载', link: '/supermap/app/load'},
                { text: '主页面设计', link: '/supermap/app/home'},
                { text: '量测面板', link: '/supermap/app/measure'},
                { text: '缓冲区', link: '/supermap/app/buffer'},
                { text: '最短路径', link: '/supermap/app/sp'}
              ]
            },
            { text: '更多案例', link: '/supermap/more/'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DSYZayn' }
    ],
    footer: {
      message: "我的辫子长在头上，诸君的辫子长在心里。", 
      copyright: "MIT Licensed | Copyright (c) 2023 GEST WebGIS"
    }
  },
  mermaid:{},
    // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container 
  },
  markdown:{
    theme:{
      light:"github-light",
      dark: "github-dark"
    },
    config:(md)=>{
      md.use(timeline)
    }
  },
  vite:{
    assetsInclude:['**/*.awebp'],
  }
})

