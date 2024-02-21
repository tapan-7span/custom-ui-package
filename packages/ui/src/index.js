import * as components from "@/components/index.js";
import "./style.css";

const install = (Vue) => {
  const componentsList = components?.default;
  Object.keys(componentsList).forEach((name) => {
    Vue.component(name, componentsList[name]);
  });
};

const plugin = {
  install,
};

export default plugin;
