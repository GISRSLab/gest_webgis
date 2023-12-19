---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "GEST WebGIS"
  text: "Enjoy The Best Docs!"
  tagline: Documentation for GEST WebGIS
  image:
    src: /imgs/avartar.webp
    alt: GEST WebGIS
  actions:
    - theme: brand
      text: WebGIS Examples
      link: /supermap/more/
    - theme: alt
      text: SuperMap Docs
      link: /supermap/

features:
  - title: <img src= "./imgs/ArcGIS.png" alt="ArcGIS" class="inline-block"/>&ensp;&ensp;ArcGIS
    details: 使用ArcGIS API for JavaScript 开发高性能的二三维WebGIS应用
    link: https://developers.arcgis.com/javascript/latest/
    target: "_blank"
  - title: <img src= "./imgs/supermap.png" alt="SuperMap" class="inline-block"/>
    details: SuperMap iClient 是空间信息和服务的可视化交互开发平台，面向Web端和移动端提供了多种类型的SDK开发包。
    link: http://support.supermap.com.cn/
    target: "_blank"
  - title: <img src= "./imgs/mapgis.png" alt="MapGIS"  class="inline-block"/>
    details: 面向二次开发应用场景，提供支撑云+端应用开发所需的SDK和资源包，覆盖桌面端、浏览器端、移动端三端开发产品。
    link: https://mapgis.com/index.php?a=shows&catid=101&id=116
    target: "_blank"
---
<script setup lang="ts">
function getYiYan(){
  fetch('https://v1.hitokoto.cn?c=d&max_length=16')
    .then(res => res.json())
    .then(data =>{
      const footerMessage = document.querySelector('.VPFooter .message')
      requestAnimationFrame(()=> footerMessage.innerText = data.hitokoto)
    })
    .catch(console.error)
    setTimeout(getYiYan, 5000)
}
if(!import.meta.env.SSR){
  getYiYan()
} 
</script>