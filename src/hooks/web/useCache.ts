import WebStorageCache from "web-storage-cache";

type CacheType = "localStorage" | "sessionStorage";

export const CACHE_KEY = {
  // 用户相关
  ROLE_ROUTERS: "roleRouters",
  USER: "user",
  VisitTenantId: "visitTenantId",
  // 系统设置
  IS_DARK: "isDark",
  LANG: "lang",
  THEME: "theme",
  LAYOUT: "layout",
  DICT_CACHE: "dictCache",
  // 登录表单
  LoginForm: "loginForm",
  TenantId: "tenantId",
};

export const useCache = (storage: CacheType = "localStorage") => {
  const wsCache = new WebStorageCache({
    storage,
  });

  return {
    wsCache,
  };
};
