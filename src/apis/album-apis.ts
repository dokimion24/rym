import { AxiosResponse } from "axios";
import axiosInstance from "./axios-instance";
import store from "store2";

const getNewAlbum = async () => {
  const res = await axiosInstance.post(
    `https://api.spotify.com/v1/browse/new-releases`
  );
  return res.data;
};
const albumApis = {
  getNewAlbum,
};

export default albumApis;
