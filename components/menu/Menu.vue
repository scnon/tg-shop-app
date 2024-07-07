<template>
    <div class="menu">
        <div class="info">
            <div>
                <div class="title">
                    <text class="shop-name"><b>魏蜀吴火锅店</b></text>
                    <t-tag theme="danger" size="small">新店</t-tag>
                </div>
                <div>
                    <div class="time"><text class="title">营业时间: </text><b>9:30 - 22:00</b></div>
                </div>
            </div>
            <div class="table">桌号 <b>103</b></div>
        </div>
        <div class="list">
            <MenuCategory :data="data?.categories" v-model="activeIndex" @change="onTabChange" />
            <MenuGoodList ref="goodList" :data="data?.categories" v-model="activeIndex" />
        </div>
    </div>
</template>

<script setup lang="ts">
import GoodList from './good/GoodList.vue'
import type { MenuData } from '~/models/menu';

const activeIndex = ref(0)
const goodList = ref<InstanceType<typeof GoodList>>()

const { data } = await useFetch<MenuData>('/api/menu', { method: 'post', body: { hello: 'world' }, server: true })
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

.info {
    display: flex;
    padding: 0 16px 12px 16px;
    color: var(--tg-theme-text-color);

    .title {
        /* display: flex; */
        font-size: 16px;
        color: var(--tg-theme-text-color);

        .welcome {
            font-size: 14px;
            color: var(--tg-theme-hint-color);
        }

        .shop-name {
            font-size: 18px;
            padding-right: 6px;
            color: var(--tg-theme-link-color);
        }
    }

    .time {
        font-size: 14px;
        color: var(--tg-theme-text-color);

        .title {
            font-size: 14px;
            color: var(--tg-theme-hint-color);
        }
    }

    .table {
        margin-left: auto;
        align-self: center;
        padding: 6px 8px;
        border-radius: 6px;
        color: var(--tg-theme-button-text-color);
        background-color: var(--tg-theme-button-color);
    }
}



.list {
    display: flex;
    flex: 1;
}
</style>