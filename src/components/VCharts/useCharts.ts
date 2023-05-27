import * as echarts from "echarts/core";
import { ChartType } from "./type";
import { Ref, ShallowRef } from "vue";
const optionsModules = import.meta.glob<{ default: echarts.EChartsCoreOption }>(
  "./options/**.ts"
);
interface ChartHookOption {
  type?: Ref<ChartType>;
  el: ShallowRef<HTMLElement>;
}

class ChartsResize {
  #charts = new Set<echarts.ECharts>();
  #timeId: any = null;

  constructor() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }
  getCharts() {
    return [...this.#charts];
  }
  handleResize() {
    clearTimeout(this.#timeId);
    this.#timeId = setTimeout(() => {
      this.#charts.forEach((chart) => {
        chart.resize();
      });
    }, 500);
  }
  add(chart: echarts.ECharts) {
    this.#charts.add(chart);
  }
  remove(chart: echarts.ECharts) {
    this.#charts.delete(chart);
  }
  removeListener() {
    window.removeEventListener("resize", this.handleResize);
  }
}
