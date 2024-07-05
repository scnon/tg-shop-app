<template>
    <div class="menu">
        <MenuCategory />
        <MenuGoodList :goods="goods" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['change'])
const totalPrice = computed({
    get: () => {
        return 100
    }
})
const goods = [
    1, 3, 4, 5, 6, 7, 8, 9, 0
]
const activeId = ref(1);
const activeIndex = ref(0);
const items = [
    {
        text: '浙江',
        children: [
            { text: '杭州', id: 1 },
            { text: '温州', id: 2 },
            { text: '宁波', id: 3, disabled: true },
        ],
    },
    {
        text: '江苏',
        children: [
            { text: '南京', id: 4 },
            { text: '无锡', id: 5 },
            { text: '徐州', id: 6 },
        ],
    },
    { text: '福建', disabled: true },
];

const onClickItem = (item) => {
    console.log(item)
    activeId.value = item.id
}
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100vh;
    width: 100%;
    text-align: center;
    background-color: #e0e0e0;
}
</style>