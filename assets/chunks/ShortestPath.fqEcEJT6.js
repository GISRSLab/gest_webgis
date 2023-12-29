import{d as E,j as T,o as S,c as _,I as c,w as h,a as f,m as o,F as B,k as C,f as I}from"./framework.FfYh61A3.js";import{l as e}from"./leaflet-src._SlVFspr.js";import{N as M,T as b,b as x,c as G,d as F,e as z}from"./namespace.QZiRHU_D.js";import{E as y}from"./index.wlq5r9Vu.js";import{E as w}from"./index.-sCuYguS.js";import"./commonjsHelpers.4gQjN7DL.js";import"./cubic.mOPjq5oI.js";import"./value.Hn_TO6tZ.js";import"./isArray.-udoYP1w.js";import"./bisect.DoBgTFST.js";import"./get.EGpIXTsI.js";import"./memoize.ktP4ZuZa.js";import"./index.5F6Tb3y8.js";import"./aria.ClGo7ZJR.js";const A=C("div",{id:"shortestpath",class:"w-full h-full z-0"},null,-1),R="https://iserver.supermap.io/iserver/services/map-changchun/rest/maps/长春市区图",ee=E({__name:"ShortestPath",setup(V){let u,p=[];T(()=>{const t=new e.Map("shortestpath",{crs:new M({bounds:new e.Bounds([48.4,-7668.25],[8958.85,-55.58]),origin:new e.Point(48.4,-55.58)}),center:[-3600,5e3],maxZoom:18,zoom:2,attributionControl:!1});u=t,new b(R).addTo(t);var n=new e.Marker([-3e3,4e3]).addTo(t);n.bindPopup("<h1>👽</h1>途经点1").openPopup();var a=new e.Marker([-2500,5500]).addTo(t);a.bindPopup("<h1>👽</h1>途经点2");var s=new e.Marker([-4e3,6900]).addTo(t);s.bindPopup("<h1>👽</h1>途经点3")});function g(t){const r=new x({returnEdgeFeatures:!0,returnEdgeGeometry:!0,returnEdgeIDs:!0,returnNodeFeatures:!0,returnNodeGeometry:!0,returnNodeIDs:!0,returnPathGuides:!0,returnRoutes:!0}),n=new G({resultSetting:r,weightFieldName:"length"}),a=new F({isAnalyzeById:!1,nodes:[new e.LatLng(-3e3,4e3),new e.LatLng(-2500,5500),new e.LatLng(-4e3,6900)],hasLeastEdgeCount:!1,parameter:n}),s="https://iserver.supermap.io/iserver/services/transportationanalyst-sample/rest/networkanalyst/RoadNet@Changchun",P=new z(s),v=new e.Icon({iconUrl:I("/imgs/logo.png"),iconSize:[20,20]});P.findPath(a).then(function(k){const m=k.result;m===void 0&&w({title:"提示",message:"服务器未返回结果，请检查参数是否正确",type:"error"}),w({title:"提示",type:"success",message:"查询最短路径完成！"}),m.pathList.map(function(l){const N=new e.GeoJSON(l.route).addTo(t),d=new e.GeoJSON(l.pathGuideItems,{pointToLayer:function(i,L){return new e.Marker(L,{icon:v})},filter:function(i){return!!(i.geometry&&i.geometry.type==="Point")}}).addTo(t);p.push(N,d),t.fitBounds(d.getBounds())})})}return(t,r)=>(S(),_(B,null,[c(o(y),{type:"primary",onClick:r[0]||(r[0]=n=>g(o(u)))},{default:h(()=>[f("开始")]),_:1}),c(o(y),{type:"primary",onClick:r[1]||(r[1]=n=>o(p).forEach(a=>a.remove()))},{default:h(()=>[f("清除")]),_:1}),A],64))}});export{ee as default};