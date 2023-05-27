import { App } from "vue";
import List from "./index.vue";

export default {
  install(app: App) {
    app.component("x-list", List);
  },
};
