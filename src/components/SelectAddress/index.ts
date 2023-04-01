import { App } from "vue";
import SelectAddress from "./index.vue";

export default {
  install(app: App) {
    app.component("select-address", SelectAddress);
  },
};
