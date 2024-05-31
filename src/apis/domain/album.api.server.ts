import spotifyApi from "../config/spotifyApi.server";

export const getNewAlbum = async () => {
  const res = await spotifyApi.get(`/browse/new-releases`);
  return res;
};
