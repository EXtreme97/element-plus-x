<template>
  <div class="tendency">
    <div class="txt"></div>
    <div class="icon">
      <el-icon-ArrowUp :style="{ color: upColor }" v-if="type === 'up'" />
      <el-icon-ArrowDown :style="{ color: downColor }" v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "up",
  },
  txt: {
    type: String,
    default: "",
  },
  upColor: {
    type: String,
    default: "#f5222d",
  },
  downColor: {
    type: String,
    default: "#52c41a",
  },
});
</script>

<style scoped lang="scss">
.tendency {
  display: flex;
  align-items: center;
  .txt {
  }
  .icon {
    width: 0.8em;
    height: 0.8em;
  }
}
</style>
