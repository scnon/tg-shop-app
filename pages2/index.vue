<template>
    <div class="root">
        <Transition>
            <Menu v-if="!checkout" @order="toOrder" />
        </Transition>
        <Transition>
            <Order v-if="checkout" />
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const checkout = ref(false)

const toOrder = () => {
    checkout.value = checkout.value ? false : true
}
</script>

<style scoped>
.root {
    height: 100vh;
    overflow: hidden;
}

.v-enter-active,
.v-leave-active {
    transition: height 0.5s;
}

.v-enter-from,
.v-leave-to {
    height: 0px;
}
</style>