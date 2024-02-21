import UiComponents from "ui-components";
export default defineNuxtPlugin((nuxtApp) => {
  console.log(">", UiComponents);
  // nuxtApp.vueApp.use(UiComponents, { app: nuxtApp.vueApp });
});
