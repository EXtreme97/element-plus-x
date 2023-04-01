<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option
        v-for="provin in allAreas"
        :key="provin.code"
        :value="provin.name"
        :lable="provin.name"
        >{{ provin.name }}</el-option
      >
    </el-select>
    <el-select
      clearable
      :disabled="!province"
      v-model="city"
      placeholder="请选择市级"
    >
      <el-option
        v-for="city in selectCity"
        :value="city.name"
        :key="city.code"
        :lable="city.name"
        >{{ city.name }}</el-option
      >
    </el-select>
    <el-select
      clearable
      :disabled="!province || !city"
      v-model="county"
      placeholder="请选择区县"
    >
      <el-option
        v-for="county in selectCounty"
        :value="county.name"
        :key="county.code"
        :lable="county.name"
        >{{ county.name }}</el-option
      >
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import location from "../../assets/json/pc-code.json";
export interface IAreaItem {
  name: string;
  code: string;
  children?: IAreaItem[];
}
let province = ref<string>("");
let city = ref<string>("");
let county = ref<string>("");
let allAreas = ref(location);

let selectCity = ref<IAreaItem[]>([]);
let selectCounty = ref<IAreaItem[]>([]);
watch(
  () => province.value,
  (val) => {
    console.log(val);

    if (val) {
      let cities = allAreas.value.find((item) => item.name === province.value)!
        .children!;
      selectCity.value = cities;
    }
    city.value = "";
    county.value = "";
  }
);
watch(
  () => city.value,
  (val) => {
    if (val) {
      let counties = selectCity.value.find((item) => item.name === city.value)!
        .children!;
      selectCounty.value = counties;
    }
    county.value = "";
  }
);
</script>

<style scoped></style>
