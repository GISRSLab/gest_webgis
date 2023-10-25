import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GEST WebGIS",
  description: "The Best Course Docs!",
  base: '/gest_webgis/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/example/markdown-examples' },
      { text: 'SuperMap', link: '/supermap/'}
    ],

    sidebar: {
      "example":[
        {
          text: 'Examples',
          items: [
            { text: 'WebGIS Examples', link: '/example/markdown-examples' }
          ]
        }
      ],
      "supermap":[
        {
          text: "SuperMap",
          items: [
            { text: '基本介绍',
              items:[
                { text: 'SuperMap iServer 简介', link: '/supermap/intro/iserver' },
                { text: 'JavaScript 简介', link: '/supermap/intro/javascript'},
                { text: 'SuperMap iClient 简介', link: '/supermap/intro/iclient'}
              ]
            },
            {
              text: "环境配置",
              items: [
                { text:"SuperMap iServer配置", link: '/supermap/env/iserver'},
                { text:"SQL Server 安装与配置", link: '/supermap/env/sqlserver'}
              ]
            },
            {
              text:"数据处理",
              items:[
                { text:"数据导入", link: '/supermap/data/input'},
                { text:'坐标校正', link: '/supermap/data/coordinate'}
              ]
            },
            {
              text:'地图服务',
              items:[
                { text:'发布', link: '/supermap/services/direct'},
                { text:'注册地理数据库', link: '/supermap/services/register'}
              ]
            },
            {
              text:'应用开发',
              items:[
                { text: '准备', link: '/supermap/app/prepare'},
                { text: '加载', link: '/supermap/app/load'},
                { text: '主页面', link: '/supermap/app/home'},
                { text: '缓冲区', link: '/supermap/app/buffer'},
                { text: '最短路径', link: '/supermap/app/sp'}
              ]
            }
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
  }
})
