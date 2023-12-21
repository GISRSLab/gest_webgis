<script setup lang="ts">
import { onMounted, ref} from 'vue';
import {Point, Coords, Map } from 'leaflet';
import { getTiandituWMTS } from '../composables/Tianditu';
import { ElButton, ElInput} from 'element-plus';

const isError = ref<boolean>(false);
const isLoading = ref<boolean>(true);
const inputKey = ref<string>('');
const placeholder = ref<string>('请前往天地图官网获取');
function loadMap(key: string){
    //开始加载
    try{
        //重置状态
        isError.value = false;
        isLoading.value = true;
        //获取天地图WMTS图层
        const [timg, tpoi] =  getTiandituWMTS(key, 'vec_w', 'cva_w');
        fetch(timg.getTileUrl(new Point(429, 183) as Coords)).then((res) => {
        new Map("map",{
            preferCanvas:true,
            minZoom: 3,
            maxZoom:18,
            attributionControl: false,
            zoomControl: true,
            layers: [timg,tpoi],
            center:[44.817831,123.08026],
            zoom:9,
            worldCopyJump:true,
            });
        isLoading.value = false;
        isError.value = false;
                 }).catch((err) => {
                     console.log(err);
                     isError.value = true;
                });
    }
    catch(err){
        console.log(err);
        isError.value = true;
    }
}
onMounted(() => {
    //加载地图
    if(!import.meta.env.SSR){
        loadMap(import.meta.env.VITE_TXXXNDIT_KEY);
    }
});
const key = import.meta.env.VITE_TIANDITU_KEY;
</script>

<template>
<div class="relative w-full h-full">
    <div v-if="isLoading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"> {{ isError ? "未获取到天地图图层， 请输入天地图key!" : "加载中..."}} 
    <!-- 冗余设计-->
        <br>
        <el-input v-model="inputKey" @change="loadMap(inputKey)" :placeholder="placeholder"/>
        <br>
        <br>
        <div class="buttons flex flex-row gap-2 ">
            <el-button @click="loadMap(inputKey)" type="primary" >重新加载</el-button>
            <el-button @click="loadMap(key)" type="primary" @mouseenter="placeholder = key" @mouseleave="placeholder = '请前往天地图官网获取'">使用临时秘钥</el-button>
            <el-button 
            type="primary" 
            tag="a" 
            href="http://lbs.tianditu.gov.cn/server/MapService.html" 
            target="_blank" style="color: white;text-decoration: none;"> 前往天地图官网 </el-button> 
        </div>
    </div>
    <div id="map" class="w-[98%] h-[98%] left-[1%] top-[1%] focus-visible:outline-none z-0">

    </div>
</div>
</template>

<style scoped>
</style>