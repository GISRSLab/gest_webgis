<script setup lang="ts">
import { ComputedRef, computed } from 'vue';
import { useData } from 'vitepress';
import Giscus, { Theme } from '@giscus/vue';

const { isDark } = useData();
const giscusTheme:ComputedRef<Theme> = computed(function():Theme{
    return isDark.value ? "dark": "light"
})
</script>

<template>
    <Giscus
        repo="DSYZayn/gest_webgis"
        repoId="R_kgDOKkhevg"
        category="Announcements"
        categoryId="DIC_kwDOKkhevs4Cb59n"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        :theme= giscusTheme
        lang="zh-CN"
        loading="lazy"
    >
    </Giscus>
</template>
