<script setup lang="ts">
import { onMounted, ref} from 'vue';
import {Map, GeoJSON, Bounds, Point} from 'leaflet';
import { NonEarthCRS, TiledMapLayer, DatasetBufferAnalystParameters, BufferSetting, FilterParameter, SpatialAnalystService} from '@supermap/iclient-leaflet';
import {ElNotification, ElButton, ElInput} from 'element-plus';
const url = "https://iserver.supermap.io/iserver/services/map-changchun/rest/maps/长春市区图";
let _map: L.Map;
let _bufferLayers:L.GeoJSON[] = [];
const inputValue = ref<string>("团结路");
onMounted(() => {
const map = new Map('buffer', {
        crs: new NonEarthCRS({
            bounds: new Bounds([48.4, -7668.25], [8958.85, -55.58]),
            origin: new Point(48.4, -55.58)
        }),
        center: [-3375, 5105],
        maxZoom: 18,
        zoom: 6
    });
    _map = map;
const layer = new TiledMapLayer(url);

layer.addTo(map);
})
function startBuffer(map){
// 设置缓冲区分析参数
const BufferEndType = {
  /** 平头缓冲。 */
  FLAT: "FLAT",
  /** 圆头缓冲。 */
  ROUND: "ROUND"
};
const dsBufferAnalystParams = new DatasetBufferAnalystParameters({
    // 用来做缓冲区分析的数据源中数据集名称
    dataset: "RoadLine2@Changchun",
    // 设置数据集中集合对象的过滤条件
    filterQueryParameter: new FilterParameter({
        // 属性过滤条件
        attributeFilter: "NAME='" + inputValue.value + "'"
    }),
    // 缓冲区分析通用参数设置

    bufferSetting: new BufferSetting({
        // 缓冲区端点枚举值，包含FLAT和ROUND
        endType: BufferEndType.ROUND,
        // 左侧缓冲距离
        leftDistance: {value: 10},
        // 右侧缓冲距离
        rightDistance: {value: 10},
        // 圆头缓冲圆弧处线段的个数
        semicircleLineSegment: 10
    })
});
const serviceUrl = "https://iserver.supermap.io/iserver/services/spatialanalyst-changchun/restjsr/spatialanalyst"
// 创建缓冲区分析服务
const bufferServiceByDatasets = new SpatialAnalystService(serviceUrl);
// 向服务端发送服务请求，并获取返回的结果
bufferServiceByDatasets.bufferAnalysis(dsBufferAnalystParams).then(function (serviceResult:any){
    // 获取服务端返回的数据
    const result = serviceResult.result;
    console.log(result);
    if ( result === undefined) {
        ElNotification({
            title:"提示",
            type:"error",
            message:"缓冲区分析失败！"
        });
        return;
    };
    ElNotification({
        title:"提示",
        type:"success",
        message:"缓冲区分析成功！"
    })
    const multiPolygon = new GeoJSON(result.recordset.features, {
        style:{
            color:"red"
        }
    }).addTo(map);
    _bufferLayers.push(multiPolygon);
    map.fitBounds(multiPolygon.getBounds());

});

}
</script>

<template>
    <el-button type="primary"  @click="startBuffer(_map)">开始</el-button>
    <el-button type="primary"  @click="_bufferLayers.forEach(layer=>layer.remove())">清除</el-button>
    <el-input
    placeholder="路名"
    v-model="inputValue"
    @change="startBuffer(_map)"
    style="width: 10rem;"
    ></el-input>
    <div id="buffer" class="w-full h-full z-0">
        
    </div>
</template>

<style scoped>

</style>