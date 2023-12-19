<script setup lang="ts">
import {ElButton} from 'element-plus'
</script>
# 在SuperMap Client项目中的配置
如果你动手能力实在不强，请直接查看[参考文件包](#参考文件包)。
## 1. 新建vue3项目
```cmd
> cd <your-new-project-path>
> npm create vue@latest
...
> npm install 
> npm run dev
```
## 2. 安装iClient依赖
> 参考[iClient for Leaflet开发指南](https://iclient.supermap.io/web/introduction/leafletDevelop.html)
:::tip
上述文档链接中有许多错误，请谨慎辨别
:::
:::timeline step1
安装leaflet、@supermap/iclient-leaflet
```cmd 
> npm install @supermap/iclient-leaflet
> npm install leaflet
```
:::
:::timeline step2
在`main.js`中引入leaflet和iclient leaflet的样式文件
:::code-group
```js[main.js]
import 'leaflet/dist/leaflet.css';
import '@supermap/iclient-leaflet/dist/iclient-leaflet.css';
:::

## 3.配置Tailwindcss & Element-plus
:::timeline step1
Tailwindcss参考[Install Tailwind CSS with Vite](https://www.tailwindcss.cn/docs/guides/vite#vue)  
Element-plus参考[使用包管理器安装Element-plus](https://element-plus.gitee.io/zh-CN/guide/installation.html#使用包管理器)
```cmd
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p
> npm install element-plus --save
```
:::

:::timeline step2

在`tailwind.config.js`中增加配置
:::code-group
```js[tailwind.config.js]
/** @type {import('tailwindcss').Config} */
export default {
  content: [ // [!code ++]
    "./index.html",// [!code ++]
    "./src/**/*.{vue,js,ts,jsx,tsx}",// [!code ++]
  ],// [!code ++]
  theme: {
    extend: {},
  },
  plugins: [],
}
```
:::

:::timeline step3
在`./src/style.css`中增加配置,记得将这个css文件引入到`main.js`或 `index.html`中

:::code-group
```css[style.css]
import 'element-plus/dist/index.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```
:::
:::tip
通常vscode都会对@tailwind这个指令标注警告，我们忽略它
:::

:::timeline step4
在你的App.vue中测试它们：

:::code-group
```vue[App.vue]
<script setup >
import {ElButton} from 'element-plus'
</script>
<template>
<div class="shadow-lg bg-blue-100 rounded-3xl w-40 h-40 flex gap-3 flex-col items-center justify-center">
  <el-button type="primary">Element-plus</el-button>
  <div class="text-purple-600 font-bold">Tailwind CSS</div>
</div>
</template>
<style scoped>
</style>
```
:::

它预期将渲染为:
<div class="flex items-center justify-center w-full">
<div class="shadow-lg bg-blue-100 rounded-3xl w-40 h-40 flex gap-3 flex-col items-center justify-center">
  <el-button type="primary">Element-plus</el-button>
  <div class="text-purple-600 font-bold">Tailwind CSS</div>
</div>
</div>

如果你发现它没有生效，请检查你是否在`main.js`或`index.html`中引入了`style.css`，然后重启项目：

```cmd
> 按住Ctrl + C
> npm run dev
```
## 4.配置项目结构

:::code-group
```sh [./src]
├─assets
│  ├─css
│  ├─font
│  └─styles
├─components
├─composables
│  ├─plugins
├─layouts
├─pages
├─router
├─stores
├─utils
└─views
```
:::

## 参考文件包
<el-button 
  tag="a"
  href="../../example.7z"
  type="primary"
  target="_self"
  style="color:white;text-decoration:none;">
点击直接下载参考文件包
</el-button>

:::warning 此文件包已经配置好了以下目录，并且包含了后续将用到的几个地图示例
```sh
├─.vscode
├─node_modules
├─public
│  └─imgs
└─src
    ├─assets
    │  ├─css
    │  └─font
    ├─components
    ├─composables
    ├─pages
    ├─router
    ├─stores
    ├─utils
    └─views
```
使用方式：
> 解压，进入example目录
> npm install
> npm run dev
浏览器输入`http://localhost:5174`
:::
