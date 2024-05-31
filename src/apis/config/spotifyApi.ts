import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { onResponse } from "./interceptor";
import { getCookie } from "cookies-next";
import { getSpotifyAccessToken } from "../domain/auth.api.server";
export const onRequestClient = async (config: InternalAxiosRequestConfig) => {
  try {
    const accessToken = getCookie("spotify-access-token");
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
    getSpotifyAccessToken();
  }

  return Promise.reject(error);
};

const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

spotifyApi.interceptors.request.use(onRequestClient);
spotifyApi.interceptors.response.use(onResponse, onResponseError);

export default spotifyApi;
