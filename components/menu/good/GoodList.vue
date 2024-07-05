<template>
    <div class="good-list">
        <div v-for="good in goods" :key="good.id">
            <MenuGoodItem :data="good" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
    goods: Array
})

</script>

<style scoped>
.good-list {
    justify-content: center;
    align-items: center;
    background-color: #cccccc;
    height: 100vh;
}
</style>