<script setup lang="ts">
import { onMounted} from 'vue';
import {Map, GeoJSON, Bounds, Point, Marker, Icon, LatLng} from 'leaflet';
import { TiledMapLayer, NonEarthCRS, NetworkAnalystService, FindPathParameters,TransportationAnalystParameter, TransportationAnalystResultSetting} from '@supermap/iclient-leaflet';
import {ElNotification, ElButton} from 'element-plus';
import 'element-plus/dist/index.css';
const url = "https://iserver.supermap.io/iserver/services/map-changchun/rest/maps/长春市区图";
let _map: L.Map;
let _analyseLayers:L.GeoJSON[] = [];
onMounted(() => {
const map = new Map('shortestpath', {
        crs: new NonEarthCRS({
            bounds: new Bounds([48.4, -7668.25], [8958.85, -55.58]),
            origin: new Point(48.4, -55.58)
        }),
        center: [-3600, 5000],
        maxZoom: 18,
        zoom: 2,
        attributionControl:false 
    });
    _map = map;
const layer = new TiledMapLayer(url);

layer.addTo(map);
            //添加站点
            var marker1 = new Marker([-3000, 4000]).addTo(map);
            marker1.bindPopup("<h1>👽</h1>途经点1").openPopup();
            var marker2 = new Marker([-2500, 5500]).addTo(map);
            marker2.bindPopup("<h1>👽</h1>途经点2");
            var marker3 = new Marker([-4000, 6900]).addTo(map);
            marker3.bindPopup("<h1>👽</h1>途经点3");
})


function findPathProcess(map:Map) {



            //网络分析结果参数
const resultSetting = new TransportationAnalystResultSetting({
    // 是否在分析结果中包含弧段要素集合
    returnEdgeFeatures: true,
    // 返回的弧段要素集合中是否包含几何对象信息
    returnEdgeGeometry: true,
    // 返回的结果中是否包含经过弧段ID集合
    returnEdgeIDs: true,
    // 返回的分析结果总是否包含结点要素集合
    returnNodeFeatures: true,
    // 返回的结点要素集合中是否包含几何对象信息
    returnNodeGeometry: true,
    // 返回的分析结果中是否包含经过结点ID集合
    returnNodeIDs: true,
    // 返回分析结果中是否包含行驶导引集合
    returnPathGuides: true,
    // 返回结果中是否包含路由对象集合
    returnRoutes: true
});
// 网络分析通用参数
const analystParameter = new TransportationAnalystParameter({
    // 分析结果返回的内容
    resultSetting: resultSetting,
    // 阻力字段的名称
    weightFieldName: "length"
});
// 最佳路径分析参数
const findPathParams = new FindPathParameters({
    // 是否通过结点ID指定路径分析的结点
    isAnalyzeById: false,
    // 最佳路径分析经过的结点或设施点数组
    nodes: [new LatLng(-3000, 4000), new LatLng(-2500, 5500), new LatLng(-4000, 6900)],
    // 是否按照弧段数最少的进行最佳路径分析
    hasLeastEdgeCount: false,
    // 交通网络分析通用参数
    parameter: analystParameter
});
// 创建最佳路径分析实例
const serviceUrl = "https://iserver.supermap.io/iserver/services/transportationanalyst-sample/rest/networkanalyst/RoadNet@Changchun";
const findPathService = new NetworkAnalystService(serviceUrl);
const myIcon = new Icon({
                iconUrl: "/imgs/logo.png",
                iconSize: [20, 20]
            });
// 向服务器发送请求，并对返回的结果进行分析处理，展示在客户端上
findPathService.findPath(findPathParams).then(function (serviceResult) {
    // 获取服务器返回的结果
    const result = serviceResult.result;
    if (result === undefined) {
        ElNotification({
            title: "提示",
            message: "服务器未返回结果，请检查参数是否正确",
            type: "error"
        })
    }
    ElNotification({
        title: "提示",
        type: "success",
        message:"查询最短路径完成！"
    })
    result.pathList.map(function (result) {
                    const routeLayer = new GeoJSON(result.route).addTo(map);
                    const pathLayer = new GeoJSON(result.pathGuideItems, {
                        pointToLayer: function (geoPoints, latlng) {
                            return new Marker(latlng, { icon: myIcon });
                        },
                        filter: function (geoJsonFeature) {
                            if (geoJsonFeature.geometry && geoJsonFeature.geometry.type === 'Point') {
                                return true;
                            }
                            return false;
                        }
                    }).addTo(map);
                    _analyseLayers.push(routeLayer,pathLayer);
                    map.fitBounds(pathLayer.getBounds());
                })
});
}
</script>

<template>
    <el-button type="primary" @click="findPathProcess(_map)">开始</el-button>
    <el-button type="primary" @click="_analyseLayers.forEach( layer => layer.remove())" >清除</el-button>

    <div id="shortestpath" class="w-full h-full z-0">
        
    </div>
</template>

<style scoped>

</style>