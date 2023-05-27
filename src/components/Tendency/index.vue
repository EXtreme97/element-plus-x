<template>
  <div class="tendency">
    <div class="txt" :style="{ color: txtColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ txt }}</div>
    </div>
    <div class="icon">
      <!-- <el-icon-arrowUp :style="{ color: upColor }" v-if="type === 'up'" />
      <el-icon-arrowDown :style="{ color: downColor }" v-else /> -->
      <component
        :is="`el-icon-${camelToLine(upIcon)}`"
        :style="{ color: upColor }"
        v-if="type === 'up'"
      ></component>
      <component
        :is="`el-icon-${camelToLine(downIcon)}`"
        :style="{ color: downColor }"
        v-else
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import { camelToLine } from "../../utils";

const slots = useSlots();
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
  upIcon: {
    type: String,
    default: "arrowUp",
  },
  downIcon: {
    type: String,
    default: "arrowDown",
  },
});
const txtColor = computed(() => {
  return props.type === "up" ? props.upColor : props.downColor;
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
