<script setup lang="ts">
import { withBase } from 'vitepress';
import { defineProps } from 'vue';
const props = withDefaults(defineProps<{
    src: string,
    alt: string
}>(),{
    src:"/imgs/ArcGIS.png",
    alt:"ArcGIS"
})
</script>

<template>
    <img :src="withBase(props.src)" :alt="props.alt"/>
</template>

<style scoped>

</style>