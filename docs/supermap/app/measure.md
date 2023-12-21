<script setup lang="ts">
import {defineClientComponent} from 'vitepress';

const ClientMeasureMap = defineClientComponent(()=>import('../../components/MeasureMap.vue'));
</script>
# 量测面板的实现

:::details 点击展开源码
<<< @/components/jsversion/MeasureMap.vue
:::
<div class="w-full h-96 vp-raw">
    <ClientMeasureMap />
</div>
