import { createApp } from "vue";

import router from "./router";
import "./style.css";
import App from "./App.vue";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { camelToLine } from "./utils";
import xUI from "./components";

const app = createApp(App);
app.use(router).use(xUI).mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${camelToLine(key)}`, component);
}
