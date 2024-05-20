import axios from "axios";
import authApis from "./auth-apis";
import { setCookie, getCookie } from "cookies-next";

const axiosInstance = axios.create({
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // try {
    //   let accessToken = getCookie("access_token");
    //   console.log("ac", accessToken);

    //   if (!accessToken) {
    //     const { data } = await authApis.getSpotifyAccessToken();
    //     accessToken = data.access_token;
    //     setCookie("access_token", accessToken, {
    //       maxAge: data.expires_in,
    //       path: "/",
    //     });
    //     config.headers["Authorization"] = `Bearer ${accessToken}`;
    //   }
    // } catch (error) {
    //   console.error("Spotify Token Fail:", error);
    //   return Promise.reject(error);
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
