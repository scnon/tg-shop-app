<template>
    <div class="menu">
        <menu-shop-info />
        <div class="list">
            <menu-category :data="data?.categories" v-model="activeIndex" @change="onTabChange" />
            <menu-good-list ref="goodList" :data="data?.categories" v-model="activeIndex" />
        </div>
    </div>
</template>

<script setup lang="ts">
import GoodList from './good/GoodList.vue'
import type { MenuData } from '~/models/menu';

const activeIndex = ref(0)
const goodList = ref<InstanceType<typeof GoodList>>()

const { data } = await useFetch<MenuData>('/api/shop/menu', { method: 'post', body: { hello: 'world' }, server: true })
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
    height: 100vh;
    background-color: var(--tg-theme-bg-color);
}

.list {
    display: flex;
}
</style>