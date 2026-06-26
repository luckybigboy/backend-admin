export {};

type LocaleType = "zh-CN" | "en";

type Recordable<T = any, K = string> = Record<
  K extends null | undefined ? string : K,
  T
>;

declare global {
  type AxiosHeaders =
    | "application/json"
    | "application/x-www-form-urlencoded"
    | "multipart/form-data";
}
