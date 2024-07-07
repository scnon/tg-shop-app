<template>
    <div class="category">
        <t-side-bar :value="activeIndex" @change="onSideBarChange" @click="onSidebarClick">
            <t-side-bar-item v-for="(item, index) in category" :key="index" :value="index" :label="item.label"
                :badge-props="item.badge">
            </t-side-bar-item>
        </t-side-bar>
    </div>
</template>

<script setup lang="ts">
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
    height: 100vh;
    overflow: auto;

    --td-bg-color-container: var(--tg-theme-secondary-bg-color);

    --td-side-bar-bg-color: var(--tg-theme-header-bg-color);
    --td-side-bar-active-color: var(--tg-theme-link-color);
    --td-side-bar-color: var(--tg-theme-text-color);
}
</style>