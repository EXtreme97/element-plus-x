<template>
  <el-button type="primary" @click="handleClick()">点击选择图标</el-button>
  <div class="m--select-icon-dialog-body-heihgt">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="content">
        <div
          v-for="(ele, index) in Object.keys(ElementPlusIconsVue)"
          :key="index"
          class="icon-item"
          @click="clickIcon(ele)"
        >
          <div>
            <component :is="`el-icon-${camelToLine(ele)}`"></component>
          </div>
          <div>{{ ele }}</div>
        </div>
      </div></el-dialog
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { camelToLine } from "../../utils/index";
import { useCopy } from "../../hooks/useCopy";

const props = defineProps<{
  title: string;
  visible: boolean;
}>();
const dialogVisible = ref(props.visible);
const handleClick = () => {
  dialogVisible.value = true;
};
const clickIcon = (value: string) => {
  let txt = `<el-icon-${camelToLine(value)}/>`;
  useCopy(txt);
  dialogVisible.value = false;
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .icon-item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    cursor: pointer;
  }
  svg {
    width: 2em;
    height: 2em;
  }
}
</style>
