<template>
    <div class="good-item">
        <!-- <t-image class="image" :src="data?.image" /> -->
    </div>
</template>

<script setup lang="ts">
import type { GoodInfo } from '~/models/menu'

defineProps({
    data: Object as PropType<GoodInfo>
})

</script>

<style scoped>
.good-item {
    width: 100%;
    height: 84px;

    background-color: var(--tg-theme-secondary-bg-color);
}

.image {
    width: 48px;
    height: 48px;
}
</style>