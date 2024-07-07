<template>
  <div class="info">
    <div>
      <div class="title">
        <div class="shop-name"><b>魏蜀吴火锅店</b></div>
        <t-tag theme="danger" size="small">新店</t-tag>
      </div>
      <div class="time">
        <text class="title">营业时间:</text><b>9:30 - 22:00</b>
      </div>
      <div class="time">
        <text class="title">地址:</text>南山区科技园南区
      </div>
    </div>
    <div class="table">桌号 <b>103</b></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.info {
  display: flex;
  padding: 0 16px 12px 16px;
  color: var(--tg-theme-text-color);
}

.title {
  display: flex;
  font-size: 16px;
  align-items: center;
  color: var(--tg-theme-text-color);
  --td-tag-small-height: 16px;

  .welcome {
    font-size: 14px;
    color: var(--tg-theme-hint-color);
  }

  .shop-name {
    font-size: 18px;
    padding-right: 6px;
    color: var(--tg-theme-link-color);
  }
}

.time {
  display: flex;
  font-size: 14px;
  color: var(--tg-theme-text-color);

  .title {
    font-size: 14px;
    margin-right: 6px;
    color: var(--tg-theme-hint-color);
  }
}

.table {
  margin-left: auto;
  align-self: center;
  padding: 6px 8px;
  border-radius: 6px;
  color: var(--tg-theme-button-text-color);
  background-color: var(--tg-theme-button-color);
}
</style>