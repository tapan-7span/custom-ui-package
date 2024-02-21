import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import UiComponents from "ui-components";
import "ui-components/style.css";
const app = createApp(App);

app.use(UiComponents);
app.mount("#app");
