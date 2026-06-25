import { service } from "./service";
import { config } from "./config";

const { default_headers } = config;

const request = (options: any) => {
  const { headersContentType, headers, ...otherOptions } = options;

  return service({
    ...otherOptions,
    headers: {
      "content-type": headersContentType || default_headers,
      ...headers,
    },
  });
};

export default {
  get: async <T = any>(options: T) => {
    const res = await request({ method: "GET", ...options });
    return res.data as T;
  },
  post: async <T = any>(options: T) => {
    const res = await request({ method: "POST", ...options });
    return res.data as T;
  },
  postOriginal: async <T = any>(options: T) => {
    const res = await request({ method: "POST", ...options });
    return res as T;
  },
  delete: async <T = any>(options: T) => {
    const res = await request({ method: "DELETE", ...options });
    return res.data as T;
  },
  put: async <T = any>(options: T) => {
    const res = await request({ method: "PUT", ...options });
    return res.data as T;
  },
};
