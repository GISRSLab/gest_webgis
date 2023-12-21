<script setup lang="ts">
import {defineClientComponent} from 'vitepress';

const ClientBufferMap = defineClientComponent(()=>import("../../components/BufferMap.vue"))
</script>
# 缓冲区的实现
:::details 点击展开源码
<<< @/components/jsversion/BufferMap.vue
:::
<div class="w-full h-96 vp-raw">
    <ClientBufferMap />
</div>