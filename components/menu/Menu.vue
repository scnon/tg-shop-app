<template>
    <div class="menu">
        <MenuCategory :data="data.categories" v-model="activeIndex" @change="onTabChange" />
        <MenuGoodList ref="goodList" :data="data.categories" v-model="activeIndex" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import GoodList from './good/GoodList.vue'

const activeIndex = ref(0)
const goodList = ref<InstanceType<typeof GoodList>>()

const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);
const data = reactive({
    categories: [
        {
            label: '热销',
            title: '热销',
            items: items
        },
        {
            label: '新品',
            title: '新品',
            items: items
        },
        {
            label: '新品',
            title: '新品',
            items: items
        },
        {
            label: '新品',
            title: '新品',
            items: items
        }
    ]
})

const onTabChange = (index: number) => {
    console.log('onTabChange', index)
    if (goodList.value) {
        goodList.value.moveToActiveSideBar(index);
    }
}
</script>

<style scoped>
.menu {
    display: flex;
    height: 100vh;
    background-color: #e0e0e0;
}
</style>