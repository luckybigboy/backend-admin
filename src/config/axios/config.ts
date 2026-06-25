interface Config {
  baseUrl: string; // 请求地址
  result_code: number | string; // 接口成功相应码
  request_timeout: number; // 请求超时时间
  default_headers: AxiosHeaders; // 默认请求头
}

export const config: Config = {
  baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_URL,
  result_code: 200,
  request_timeout: 10000,
  default_headers: "application/json",
};
