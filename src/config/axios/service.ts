import axios, { AxiosError } from "axios";
import type {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from "axios";
import { config } from "./config";

const { baseUrl, request_timeout, default_headers } = config;

// 请求白名单， 无需token
const whiteList: string[] = ["/login"];

const service: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: request_timeout,
  withCredentials: false,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { service };
