<template>
  <div>
    <select-icon title="图标选择器" :visible="visible"></select-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const visible = ref<boolean>(false);
</script>

<style scoped></style>
