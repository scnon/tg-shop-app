<template>
    <div class="category">
        <t-side-bar :value="activeIndex" @change="onSideBarChange" @click="onSidebarClick">
            <t-side-bar-item v-for="(item, index) in category" :key="index" :value="index" :label="item.label">
            </t-side-bar-item>
        </t-side-bar>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { type MenuCagetory } from '@/models/menu'

const emit = defineEmits(['change'])
const activeIndex = defineModel({
    type: Number,
    default: 0
})

const props = defineProps({
    data: Object as PropType<MenuCagetory[]>
})

const category = toRef(props, 'data')

const onSideBarChange = (index: number) => {
    activeIndex.value = index
    emit('change', index)
}

const onSidebarClick = () => {
    console.log('onSidebarClick')
}
</script>

<style scoped>
.category {
    justify-content: center;
    align-items: center;
    background-color: #cccccc;
    height: 100vh;
    width: 100px;
}

.cate-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 46px;
    background-color: #cccccc;
    user-select: none;
}

.cate-item-selected {
    background-color: #f0f0f0;
}

.item-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>