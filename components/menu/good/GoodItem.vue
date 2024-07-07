<template>
    <div class="good-item">
        <t-image class="image" src="https://tdesign.gtimg.com/demo/demo-image-1.png" />
        <div class="info">
            <div><b>{{ data?.label }}</b></div>
            <div class="sell">已售102</div>
            <div style="flex: 1;"></div>
            <div class="price">
                <div style="flex: 2;">$ <b style="font-size: 18px;">3.6</b></div>
                <div v-if="count == 0" class="add" @click="count += 1">
                    添加
                </div>
                <t-stepper v-if="count > 0" class="stepper" theme="filled" disableInput v-model="count" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { GoodInfo } from '~/models/menu'

defineProps({
    data: Object as PropType<GoodInfo>
})

const count = ref(0)

</script>

<style scoped>
.good-item {
    display: flex;
    height: 84px;
    margin: 12px 6px;
    margin-right: 2px;
    border-radius: 8px;

    color: var(--tg-theme-text-color);
    background-color: var(--tg-theme-bg-color);
}

.image {
    width: 84px;
    height: 84px;
    border-radius: 8px;
}

.info {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 4px;
    margin-left: 8px;
}

.sell {
    font-size: 12px;
    color: var(--tg-theme-hint-color);
}

.price {
    display: flex;
    font-size: 16px;
    color: #ff3333;
    margin-right: 4px;
}

.stepper {
    margin-left: auto;

    --td-stepper-input-color: var(--tg-theme-button-text-color);
    --td-bg-color-secondarycontainer: var(--tg-theme-button-color);
    --td-stepper-input-disabled-color: var(--tg-theme-link-color);
    --td-stepper-input-disabled-bg: var(--tg-theme-button-color);
}

.add {
    color: var(--tg-theme-button-text-color);
    padding: 0 8px;
    margin-bottom: 3px;
    font-size: 14px;
    line-height: 24px;
    border-radius: 6px;
    background-color: var(--tg-theme-button-color);
}

.t-stepper--filled-disabled {
    display: none;
}
</style>