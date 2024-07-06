<template>
    <div class="menu">
        <MenuCategory :data="data?.categories" v-model="activeIndex" @change="onTabChange" />
        <MenuGoodList ref="goodList" :data="data?.categories" v-model="activeIndex" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import GoodList from './good/GoodList.vue'
import type { MenuCagetory, MenuData } from '~/models/menu';

const activeIndex = ref(0)
const goodList = ref<InstanceType<typeof GoodList>>()

const { data } = await useFetch<MenuData>('/api/menu', { method: 'post', body: { hello: 'world' } })
// const data = ref<MenuCagetory[]>([])

const onTabChange = (index: number) => {
    console.log('onTabChange', index)
    if (goodList.value) {
        goodList.value.moveToActiveSideBar(index);
    }
}

// onMounted(() => {
//     $fetch<MenuData>('/api/menu', { method: 'post', body: { hello: 'world' } }).then((res) => {
//         data.value = res.categories || [];
//     })
// })
</script>

<style scoped>
.menu {
    display: flex;
    height: 100vh;
    background-color: #e0e0e0;
}
</style>