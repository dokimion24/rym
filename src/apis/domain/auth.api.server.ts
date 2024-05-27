import { AxiosResponse } from "axios";
import serviceApi from "../config/serviceApi";

const getSpotifyAccessToken = async () => {
  return await serviceApi.post("/api/spotify-token");
};
const authApisServer = {
  getSpotifyAccessToken,
};

export default authApisServer;
