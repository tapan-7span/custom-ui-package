import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import UiComponents from "../../../packages/ui/dist/ui-components";
import "../../../packages/ui/dist/style.css";
const app = createApp(App);

app.use(UiComponents);
app.mount("#app");
