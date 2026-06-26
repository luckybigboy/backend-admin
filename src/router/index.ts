import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import constantsRoute from "@/router/modules/constantsRoute";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes: constantsRoute as RouteRecordRaw[],
});

export const setupRouter = (app: App) => {
  app.use(router); // 使用路由
};

export default router;
