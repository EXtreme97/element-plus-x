import { App } from "vue";
import SelectAddress from "./SelectAddress";
import SelectIcon from "./SelectIcon";
import Tendency from "./Tendency";

const components = [SelectAddress, SelectIcon, Tendency];

export default {
  install(app: App) {
    components.map((item) => app.use(item));
  },
};
