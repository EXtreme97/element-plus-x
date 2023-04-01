import { App } from "vue";
import Tendency from "./index.vue";

export default {
  install(app: App) {
    app.component("tendency", Tendency);
  },
};
