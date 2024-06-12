import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { onResponse } from "./interceptor";
import { getCookie } from "cookies-next";

export const onRequestClient = async (config: InternalAxiosRequestConfig) => {
  try {
    const accessToken = getCookie("rym-access-token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const onResponseError = async (error: any) => {
  if (error.request.status === 401) {
    serviceApi.get("/auth/token");
  }

  return Promise.reject(error);
};

const serviceApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

serviceApi.interceptors.request.use(onRequestClient);
serviceApi.interceptors.response.use(onResponse, onResponseError);
