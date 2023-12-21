<script setup lang="ts">
import {defineClientComponent} from 'vitepress';

const ClientShortestPath = defineClientComponent(() => import("../../components/ShortestPath.vue"));
</script>
# 实现最短路径 
::: details 点击查看源代码
:::code-group
<<< @/components/jsversion/ShortestPath.vue 
:::
<div class="w-full h-96 vp-raw">
    <ClientShortestPath />
</div>


