import { AxiosResponse } from "axios";
import serviceApi from "../config/serviceApi";

export const getSpotifyAccessToken = async () => {
  const res = await serviceApi.post("/api/spotify-token");
  return res;
};
