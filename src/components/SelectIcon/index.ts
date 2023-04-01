import { App } from "vue";
import SelectIcon from "./index.vue";

export default {
  install(app: App) {
    app.component("select-icon", SelectIcon);
  },
};
