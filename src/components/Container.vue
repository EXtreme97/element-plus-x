<template>
  <el-container>
    <el-aside width="auto">
      <NavSide :isCollapse="isCollapse"></NavSide
    ></el-aside>
    <el-container>
      <el-header>
        <NavHeader :isCollapse="isCollapse" @toggle="toggle"></NavHeader
      ></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
let isCollapse = ref(false);
const toggle = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>
