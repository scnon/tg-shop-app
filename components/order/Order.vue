<template>
    <div class="order">
        order
    </div>
</template>

<script setup>

const emit = defineEmits(['back'])
const back = () => {
    emit('back')
}

const pay = () => {
    console.log('pay')
}
</script>

<style scoped>
.order {
    justify-content: center;
    align-items: center;
    background-color: #808080;
    height: 100vh;
}
</style>