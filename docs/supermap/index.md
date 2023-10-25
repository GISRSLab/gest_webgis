# SuperMap 开发文档
<script setup lang="ts">
import {defineClientComponent} from 'vitepress'
const ClientHomeMap = defineClientComponent(()=>{
    return import('../components/HomeMap.vue')
})
</script>
<div class="w-full h-96">
    <ClientHomeMap />
</div>
