<template>
  <ClientOnly>
    <t-config-provider>
      <NuxtPage />
    </t-config-provider>
  </ClientOnly>
</template>

<script setup lang="ts">
import { SideBar } from 'tdesign-mobile-vue';
import zhConfig from 'tdesign-mobile-vue/lib/locale/zh_CN'


</script>


<style scoped>
.body {
  user-select: none;
}
</style>