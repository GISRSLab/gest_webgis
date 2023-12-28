<script setup lang="ts">
import { onMounted, onUnmounted, h} from 'vue';
import { ElMessageBox } from 'element-plus';

async function getYiYan():Promise<string>{
  const res = await fetch('https://v1.hitokoto.cn?c=d&max_length=16')
  const data = await res.json();
  const status = await typing(data.hitokoto);
  return "ok";
}
async function delay(time:number):Promise<string>{
  return new Promise(resolve => setTimeout(()=>resolve("ok"), time));
}
async function typing(str:string):Promise<string>{
  let i = 0;
  console.log(str);
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
    await getYiYan()
    timer = setInterval(getYiYan, 5000);

  });
  onUnmounted(()=>timer?clearInterval(timer):void(0));
} 
// 入场提示
const attention = `主站：<a href="https://dsyzayn.github.io/gest_webgis" target="_self">https://dsyzayn.github.io/gest_webgis</a>
                    <br>
                    镜像站：<a href="https://cxy2003.gitee.io/gest_webgis" target="_self">https://cxy2003.gitee.io/gest_webgis</a>` 
if(!sessionStorage.getItem("first_visit")){
  ElMessageBox.alert(h('div', {innerHTML:attention}), '温馨提示')
}
sessionStorage.setItem("first_visit", "false");
</script>