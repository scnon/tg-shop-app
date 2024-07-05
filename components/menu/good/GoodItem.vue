<template>
    <div class="good-item">
        <t-image class="image" :src="data?.image" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { GoodInfo } from '~/models/menu'

defineProps({
    data: Object as PropType<GoodInfo>
})

</script>

<style scoped>
.good-item {
    width: 100%;
    height: 84px;
    background-color: #f0f0f0;
}

.image {
    width: 48px;
    height: 48px;
}
</style>