import { App } from "vue";
import Notifi from "./index.vue";

export default {
  install(app: App) {
    app.component("notifi", Notifi);
  },
};
