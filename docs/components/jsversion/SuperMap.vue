<script setup >
import {Map, CRS, ControlPosition} from 'leaflet';
import { onMounted } from 'vue';
import { TiledMapLayer } from '@supermap/iclient-leaflet';
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css"
import "@geoman-io/leaflet-geoman-free"

const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
onMounted(() => {
 const map = new Map('supermap',{
    crs: CRS.EPSG4326,
    center: [0, 0],
    maxZoom: 18,
    zoom: 1,
    attributionControl:false
})
const layer = new TiledMapLayer(url);
layer.addTo(map);


//捕捉绘制控件参数设置
const pmOptions = {
    position: 'topright',
    drawMarker: true,
    drawPolygon: true,
    drawPolyline: true,
    editPolygon: true,
    deleteLayer: true
}
map.pm.addControls(pmOptions);
map.pm.setLang("zh");
// 监听绘制事件
map.on('pm:create',({shape, layer})=>{
    console.log(shape, layer);
    
})
})
</script>

<template>
    <div id="supermap" class="w-full h-full z-0">
        
    </div>
</template>

<style scoped>

</style>