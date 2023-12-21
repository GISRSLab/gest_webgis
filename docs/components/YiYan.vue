<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue';
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
  onMounted(()=>{
    timer = setInterval(getYiYan, 5000);
  });
  onUnmounted(()=>timer?clearInterval(timer):void(0));
} 
</script>