import { AxiosResponse } from "axios";
import axiosInstance from "./axios-instance";
import store from "store2";

const getSpotifyAccessToken = async () => {
  console.log(process.env.SPOTIFY_CLIENT_ID);
  const params = {
    grant_type: "client_credentials",
    client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
    client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET as string,
  };

  const res = await axiosInstance.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams(params).toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log("res", res);
  return res.data;
};
const authApis = {
  getSpotifyAccessToken,
};

export default authApis;
