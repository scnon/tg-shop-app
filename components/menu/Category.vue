<template>
    <div class="category">
        <van-config-provider :theme-vars="theme">
            <van-sidebar v-model="active" scrollspy>
                <van-sidebar-item @click="onItemClick(item)" v-for="item in categoryList" :title="item.name">
                </van-sidebar-item>
            </van-sidebar>
        </van-config-provider>
    </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const active = ref(0)
const theme = reactive({
    sidebarWidth: '100px',
    sidebarBackground: '#e0e0e0',
    sidebarLineHeight: '16px',
    sidebarPadding: '16px',
})

const categoryList = ref([
    { id: 1, name: '热销', picUrl: 'https://avatars.githubusercontent.com/u/24618629?v=4' },
    { id: 2, name: '新品', picUrl: 'https://avatars.githubusercontent.com/u/24618629?v=4' },
    { id: 3, name: '优惠', picUrl: 'https://avatars.githubusercontent.com/u/24618629?v=4' },
    { id: 4, name: '主食', picUrl: 'https://avatars.githubusercontent.com/u/24618629?v=4' },
    { id: 5, name: '饮品', picUrl: 'https://avatars.githubusercontent.com/u/24618629?v=4' },
    { id: 6, name: '甜品', picUrl: 'https://avatars.githubusercontent.com/u/24618629?v=4' },
    { id: 7, name: '水果', picUrl: 'https://avatars.githubusercontent.com/u/24618629?v=4' },
    { id: 8, name: '零食', picUrl: 'https://avatars.githubusercontent.com/u/24618629?v=4' },
    { id: 9, name: '其他', picUrl: 'https://avatars.githubusercontent.com/u/24618629?v=4' }
])

const onItemClick = (item) => {
    console.log(item)
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