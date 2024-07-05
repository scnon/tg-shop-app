<template>
    <div class="good-item">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
    data: Object
})

</script>

<style scoped>
.good-item {
    background-color: #f0f0f0;
}
</style>