import { createApp } from "vue";
import "./style.css";

// 引入unocss 样式
import "@/plugins/unocss.css";

// 引入animate.css
import "@/plugins/animate.css";

import App from "./App.vue";
import ElementPlus from "element-plus";

const app = createApp(App);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.mount("#app");
