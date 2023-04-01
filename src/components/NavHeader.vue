<template>
  <span
    @click="
      () => {
        emits('toggle', !props.isCollapse);
      }
    "
  >
    <el-icon-expand v-if="isCollapse" />
    <el-icon-fold v-else
  /></span>
</template>

<script setup lang="ts">
const props = defineProps<{
  isCollapse: boolean;
}>();
const emits = defineEmits(["toggle"]);
</script>

<style scoped></style>
