import { TileLayer} from "leaflet";
export function getTiandituWMTS(key, imgType, poiType){
    /**
     * 获取天地图地图WMTS图层的方法
     *@param {string} key:天地图开发者密钥
     *@param {string} imgType:影像类型字符串
     *@param {string} poiType:注记类型字符串
     *@return {WebTileLayer[]}: WebTileLayer array 
     */
    if( key === undefined) {
        throw new Error("请输入天地图开发者密钥！");
    }
    const imgLayer = imgType.split("_")[0];
    const imgFormat = imgType.split("_")[1];
    const poiLayer = poiType.split("_")[0];
    const poiFormat = poiType.split("_")[1];
    const Tianditu_poi = new TileLayer(
        "https://{s}.tianditu.gov.cn/"
        + poiType + "/wmts?f=pbf&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=" 
        + poiLayer  + "&STYLE=default&TILEMATRIXSET=" 
        + poiFormat + "&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=" 
        + key,
            {
                subdomains:["t0", "t1", "t2", "t3","t4", "t5", "t6", "t7"]
            }
    )
    const Tianditu_img = new TileLayer(
            "https://{s}.tianditu.gov.cn/"
            + imgType + "/wmts?f=pbf&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=" 
            + imgLayer  + "&STYLE=default&TILEMATRIXSET=" 
            + imgFormat + "&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=" 
            + key,
            {
                subdomains:["t0", "t1", "t2", "t3","t4", "t5", "t6", "t7"],
            }
    )
       return [Tianditu_img, Tianditu_poi];
}