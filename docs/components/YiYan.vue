<script setup lang="ts">
import { onMounted, onUnmounted, h} from 'vue';
import { ElMessageBox } from 'element-plus';

async function getYiYan():Promise<string>{
  const res = await fetch('https://v1.hitokoto.cn?c=d&max_length=16')
  const data = await res.json();
  await typing(data.hitokoto);
  return "ok";
}
async function delay(time:number):Promise<string>{
  return new Promise(resolve => setTimeout(()=>resolve("ok"), time));
}
async function typing(str:string):Promise<string>{
  const footerMessageEle = document.querySelector(".VPFooter .message");
  for(let i = 0; i < str.length; i++){
    footerMessageEle.innerHTML = str.slice(0, i+1) + "_";
    await delay(200);
  }
  footerMessageEle.innerHTML = str;
  return "ok";
}
if(!import.meta.env.SSR){
  let timer = undefined;
  onMounted(async ()=>{
    timer = setInterval(getYiYan, 5000);
    window.onbeforeunload = function(){
      sessionStorage.removeItem("first_visit");
      clearInterval(timer);
      timer = undefined;
    }
    document.onvisibilitychange = async ()=>{
      if(document.visibilityState === 'hidden'){
        clearInterval(timer);
        timer = undefined;
      } else if(document.visibilityState === 'visible' && !timer){
        await getYiYan();
        timer = setInterval(getYiYan, 5000);
      }
    }
  });
  onUnmounted(()=>timer?clearInterval(timer):void(0));
} 
// 入场提示
const attention = h('div', null,[
  "主站: ",
  h('a', {
    href:'https://dsyzayn.github.io/gest_webgis',
    target:'_self'
  }, "https://dsyzayn.github.io/gest_webgis"),
  h('br'),
  "镜像站: ",
  h('a', {
    href:"https://cxy2003.gitee.io/gest_webgis",
    target:'_self'
  },"https://cxy2003.gitee.io/gest_webgis"),
  h('br'),
  //h('a',null,'评论系统暂无法使用'),
  h('br'),
  h('p',{
    style:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }
  },"2024新年快乐！🎉")
])
if(!sessionStorage.getItem("first_visit")){
  ElMessageBox.alert(attention, '温馨提示', {});
  getYiYan();
}
sessionStorage.setItem("first_visit", "false");
</script>
<template>

</template>