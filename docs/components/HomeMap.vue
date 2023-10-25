<script setup lang="ts">
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { getTiandituWMTS } from '../composables/Tianditu';

//导入Zondy
const [timg, tpoi]  = getTiandituWMTS("4267820f43926eaf808d61dc07269beb", 'vec_w', 'cva_w');
//
onMounted(() => {
    const map = L.map('map',{
        preferCanvas:true,
        minZoom: 3,
        maxZoom:18,
        attributionControl: false,
        zoomControl: true,
        layers: [timg,tpoi],
        center:[44.817831,123.08026],
        zoom:9,
        worldCopyJump:true
    });
        
});
</script>

<template>
    <div id="map" class="w-[98%] h-[98%] left-[1%] top-[1%] focus-visible:outline-none">
        
    </div>
</template>

<style scoped>
</style>