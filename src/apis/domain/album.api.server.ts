import spotifyApi from "../config/spotifyApi.server";

const getNewAlbum = async () => {
  const res = await spotifyApi.get(`/browse/new-releases`);
  return res;
};
const albumApisServer = {
  getNewAlbum,
};

export default albumApisServer;
