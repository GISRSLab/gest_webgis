<script setup lang="ts">
import {onMounted} from 'vue';
import {Map, CRS, ControlPosition, Polygon, Polyline, PM, LatLng,Circle } from 'leaflet';
import {TiledMapLayer, MeasureService, MeasureParameters} from '@supermap/iclient-leaflet';
import '@geoman-io/leaflet-geoman-free'
// import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'

const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";

const measure_service = new MeasureService(url);

onMounted(() => {
 const map = new Map('measure',{
    crs: CRS.EPSG4326,
    center: [0, 0],
    maxZoom: 18,
    zoom: 1,
    attributionControl:false
})
const layer = new TiledMapLayer(url);
layer.addTo(map);
const pmOptions = {
    position: 'topright' as ControlPosition,
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
    //初始化类，设置服务请求关键参数
    switch(shape){
        case "Line":resolveLine(layer);break;
        case "Rectangle":resolvePolygon(layer);break;
        case "Polygon":resolvePolygon(layer);break;
        case "Circle":resolveCircle(layer);break;
    }
})
})

function resolveLine(layer:any){
    const _latlngs = layer._latlngs as LatLng[]
    const _geometry = new Polyline( _latlngs)
    const measureParam = new MeasureParameters(_geometry);
    
    //提交服务请求，传递服务查询参数，获取返回结果
    measure_service.measureDistance(measureParam).then((serviceResult)=>{
        //获取服务器返回结果
        const result = serviceResult.result;
        
        layer.bindPopup(`<h3>长度</h3><p>${result.distance}米</p>`)
                .openPopup();
    })
    layer.on("pm:edit",({shape, layer})=>{
        resolveLine(layer)
    })
}
function resolvePolygon(layer:any){
    const _latlngs = layer._latlngs as LatLng[]
    const _geometry = new Polygon(_latlngs)
    const measureParam = new MeasureParameters(_geometry);
    //提交服务请求，传递服务查询参数，获取返回结果
    measure_service.measureArea(measureParam).then((serviceResult)=>{
        //获取服务器返回结果
        const result = serviceResult.result;
        layer.bindPopup(`<h3>面积</h3><p>${result.area}平方米</p>`)
                .openPopup()
    })
    layer.on("pm:edit",({shape, layer})=>{
        resolvePolygon(layer)
    })
}
function resolveCircle(layer:any){
    const polygon = PM.Utils.circleToPolygon(layer as Circle)

    const measureParam = new MeasureParameters(polygon);
    //提交服务请求，传递服务查询参数，获取返回结果
    measure_service.measureArea(measureParam).then((serviceResult)=>{
        //获取服务器返回结果
        const result = serviceResult.result;
        layer.bindPopup(`<h3>面积</h3><p>${result.area}平方米</p>`)
                .openPopup()
    })
    layer.on("pm:edit",({shape, layer})=>{
        resolveCircle(layer)
    })
}

</script>

<template>
    <div id="measure" class="w-full h-full z-0">
        
    </div>
</template>

<style scoped>

</style>