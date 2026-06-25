export {};

declare global {
  type AxiosHeaders =
    | "application/json"
    | "application/x-www-form-urlencoded"
    | "multipart/form-data";
}
