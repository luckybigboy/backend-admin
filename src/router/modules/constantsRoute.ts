import type { RouteRecordRaw } from "vue-router";

const constantsRoute: AppRouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue"),
    meta: {
      hidden: true,
      title: "登录",
      noTagsView: true,
    },
  },
];

export default constantsRoute;
