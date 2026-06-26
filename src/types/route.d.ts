import type { RouteRecordRaw } from "vue-router";
import { defineComponent } from "vue";

declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    hidden?: boolean;
    alwaysShow?: boolean;
    title?: string;
    titleSuffix?: string;
    icon?: string;
    noCache?: boolean;
    breadcrumb?: boolean;
    affix?: boolean;
    noTagsView?: boolean;
    activeMenu?: string;
    followAuth?: string;
    canTo?: boolean;
  }
}

type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

declare global {
  interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
    name: string;
    component?: Component | string;
    children?: AppRouteRecordRaw[];
    meta?: RouteMeta;
    props?: Recordable;
    fullPath?: string;
    keepAlive?: boolean;
  }
}
