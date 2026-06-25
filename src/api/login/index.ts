import request from "@/config/axios";
import * as loginType from "./types";

// 登录
export const login = (data: loginType.LoginParams) => {
  return request.post({
    url: "/system/auth/login",
    data,
  });
};
