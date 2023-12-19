# 加载地图
<script setup lang="ts">
import {defineClientComponent} from 'vitepress'
import ClientSuperMap from '../../components/SuperMap.vue';

const ClientHomeMap = defineClientComponent(()=>{
    return import('../../components/HomeMap.vue')
})
</script>
## 原生leaflet加载WMTS
这里的代码有些长，不用担心，大部分都是为了规范化做出的牺牲。  
:::timeline 首先
我写了一个Tidanditu.js，用于放置有关天地图的各种方法。这里面就包含了一个`getTiandituWMTS`的函数，用于获取天地图的WMTS服务。  
:::
:::timeline 接下来
我在`HomeMap.vue`中开始装载地图，在装载地图之前，需要创建一个`div`元素，id为map(随意),然后在js代码块中的onMounted钩子函数的回调中初始化地图。  
具体而言，是使用leaflet的Map类,对其进行实例化。
```js
new Map("map", options)
```
其中"map"就是我们为地图容器元素设置的id，options是一个{}包含的配置选项，不填的则为默认值
:::
:::timeline 最后
当然，我这里使用了try，catch语句，配合`Tianditu.js`和fetch API抛出的异常来保证地图真的加载天地图了，而不只是将天地图的图层挂载。
:::

:::details 点击展开源代码
::: code-group
<<< ../../components/jsversion/HomeMap.vue
<<< ../../composables/jsversion/Tianditu.js
:::
<div class="w-full h-96">
    <ClientHomeMap />
</div>

## iclient加载iServer地图
这是另一种加载地图的方式，对于Map对象，我们仍可以使用由leaflet创建的Map，但图层则使用SuperMap iClient来创建。  
在这种方式下，只有图层的创建方式不是原生leaflet具有的。  
具体而言：
- 第一步，拿到地图服务的url：https://iserver.supermap.io/iserver/services/map-world/rest/maps/World
- 第二步，创建Map对象或使用已存在的。
- 第三步，创建TiledMapLayer图层
- 最后，挂载图层到Map对象上
::: details 点击展开源代码
::: code-group
<<< ../../components/jsversion/SuperMap.vue
:::
<ClientOnly>
    <div class="w-full h-[25rem] vp-raw">
        <ClientSuperMap />
    </div>
</ClientOnly>

### 进阶
:::tip
显然,这里的地图右边出现了一列控件。貌似上述步骤并不能产生这样的效果。  
是的，我加入了一个新的模块，实现了地图量测的面板。
查看源代码就可以发现，我引入了一个第三方库：`@geoman-io/leaflet-geoman-free`  
这个库的安装使用非常简单，只需要以下几步：
:::
```cmd
> npm install @geoman-io/leaflet-geoman-free
```

```js
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css"
import "@geoman-io/leaflet-geoman-free"
```
```js
//在你的js代码中
//捕捉绘制控件参数设置
const pmOptions = {
    position: 'topright',
    drawMarker: true,
    drawPolygon: true,
    drawPolyline: true,
    editPolygon: true,
    deleteLayer: true
}
map.pm.addControls(pmOptions);//挂载控件
map.pm.setLang("zh");//设置语言
```
至此，已实现了可涂画的功能，实际上我已经将捕获数据的代码写在了源代码中，假如把这些捕获到的数据传递给某个文本框，是不是就实现了`量测+结果显示`的功能呢？  
完整代码将在本章最后提供，你可以先尝试一下自己实现，记得充分利用Tailwindcss 和 Element-plus来改善你的UI界面。