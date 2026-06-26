import { createApp } from "vue";
import "./style.css";

// 引入unocss 样式
import "@/plugins/unocss";

// 引入animate.css
import "@/plugins/animate.css";

import App from "./App.vue";
import ElementPlus from "element-plus";

import { setupStore } from "@/store";

const setupAll = async () => {
  const app = createApp(App);
  setupStore(app);
  app.use(ElementPlus, { size: "small", zIndex: 3000 });
  app.mount("#app");
};

setupAll();
