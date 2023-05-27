import { App } from "vue";
import SelectAddress from "./SelectAddress";
import SelectIcon from "./SelectIcon";
import Tendency from "./Tendency";
import Notifi from "./Notify";
import List from "./List";

const components = [SelectAddress, SelectIcon, Tendency, Notifi, List];

export default {
  install(app: App) {
    components.map((item) => app.use(item));
  },
};
