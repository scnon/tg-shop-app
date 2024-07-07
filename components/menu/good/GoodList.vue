<template>
    <div ref="wrapper" class="good-list" @scroll="onScroll">
        <div v-for="(item, index) in goodList" :key="index" class="section" :style="contentStyle">
            <div class="title">{{ item.title || item.label }}</div>

            <div v-for="(info, index) in item.items" :key="index">
                <menu-good-item :data="info" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MenuCagetory } from '@/models/menu'

const activeIndex = defineModel({
    type: Number,
    default: 0
})

const props = defineProps({
    data: Object as PropType<MenuCagetory[]>
})

const goodList = toRef(props, 'data')

const contentStyle = ref('');
const wrapper = ref<HTMLElement>();
const offsetTopList = reactive<number[]>([]);

const getOffsetTopList = () => {
    if (wrapper.value) {
        const title = wrapper.value.querySelectorAll<HTMLElement>('.title');
        title.forEach(item => {
            offsetTopList.push(item.offsetTop);
        });
    }
}

const moveToActiveSideBar = (index: number) => {
    if (wrapper.value) {
        wrapper.value.scrollTop = offsetTopList[index] - offsetTopList[0];
    }
}

onMounted(() => {
    getOffsetTopList();
    moveToActiveSideBar(activeIndex.value);
    console.log('goodList', offsetTopList);
})

const onScroll = (event: WheelEvent | Event) => {
    const threshold = offsetTopList[0];
    const { scrollTop } = event.target as Element;
    if (scrollTop < threshold) {
        activeIndex.value = 0;
        return;
    }
    const index = offsetTopList.findIndex((top) => top > scrollTop && top - scrollTop <= threshold);
    if (index > -1) {
        activeIndex.value = index;
    }
    console.log(offsetTopList, threshold, scrollTop, index, activeIndex.value);
}

defineExpose({
    moveToActiveSideBar
})
</script>

<style scoped>
.good-list {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
    color: var(--tg-theme-link-color);
    background-color: var(--tg-theme-secondary-bg-color);
}

.section {
    padding: 6px 0 0 0;
}

.title {
    padding-left: 20px;
    margin-bottom: 4px;
    line-height: 46px;
    border-radius: 6px;
    background-color: var(--tg-theme-header-bg-color);
}
</style>