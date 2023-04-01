<template>
  <el-menu
    :collapse="isCollapse"
    default-active="1"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon-menu />
      <span>首页</span> </el-menu-item
    ><el-menu-item
      :route="{
        path: '/selecticon',
      }"
      index="2"
    >
      <el-icon-menu />
      <span>图标选择器</span> </el-menu-item
    ><el-menu-item index="3">
      <el-icon-menu />
      <span>地址选择器</span> </el-menu-item
    ><el-menu-item index="4">
      <el-icon-menu />
      <span>趋势</span> </el-menu-item
    ><el-menu-item index="5">
      <el-icon-menu />
      <span>导航1</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  isCollapse: boolean;
}>();
</script>

<style scoped></style>
