<template>
    <div class="root">
        <Menu :ref="menu" />
        <!-- <Order @back="toMenu" /> -->
    </div>
</template>

<script setup>
const time = 1000
const menu = ref(null)
const checkout = ref(false)

const mainButton = Telegram.WebApp.MainButton;
mainButton.show();
mainButton.onClick(() => mainClick());

const updateMainButton = () => {
    mainButton.setParams({
        text: checkout.value ? 'Pay' : '去结算 $ 12.00',
        color: checkout.value ? '#ff0000' : '#31b545',
        is_visible: true,
    });
    mainButton.hideProgress();
}

const mainClick = () => {
    console.log('mainClick')
    if (checkout.value) {
        pay();
    } else {
        toOrder();
    }
}

const toMenu = () => {
    checkout.value = false;
    mainButton.hide();
    setTimeout(() => {
        updateMainButton();
    }, time);
}

const toOrder = () => {
    checkout.value = true
    mainButton.hide();
    setTimeout(() => {
        updateMainButton();
    }, time);
}

const pay = () => {
    mainButton.setParams({
        is_active: false,
        color: '#801111',
    })
    mainButton.showProgress();

    useWebAppPopup().showConfirm("Are you sure ?", (ok) => {
        console.log(ok)
        updateMainButton();
    });
}

updateMainButton();
Telegram.WebApp.ready();
Telegram.WebApp.expand();
</script>

<style scoped>
.root {
    height: 100vh;
    overflow: hidden;
}
</style>