import { createApp } from "vue";
import App from "./App.vue";
import OneSignalVuePlugin from "../node_modules/onesignal-vue/dist/index";
import "./registerServiceWorker";

const app = createApp(App);
app.use(OneSignalVuePlugin, {
  appId: "76409db4-fc73-4971-af15-999c02a98369",
});
app.mount("#app");
