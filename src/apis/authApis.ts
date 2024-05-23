import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

const getSpotifyAccessToken = async () => {
  const res = await axiosInstance.post("/api/spotify-token");

  return res.data;
};
const authApis = {
  getSpotifyAccessToken,
};

export default authApis;
