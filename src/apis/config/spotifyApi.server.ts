import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { onResponse } from "./interceptor";
import { cookies } from "next/headers";

export const onRequestServer = async (config: InternalAxiosRequestConfig) => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("spotify-access-token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const onResponseErrorServer = async (error: any) => {
  return Promise.reject(error);
};

const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

spotifyApi.interceptors.request.use(onRequestServer);
spotifyApi.interceptors.response.use(onResponse, onResponseErrorServer);

export default spotifyApi;
