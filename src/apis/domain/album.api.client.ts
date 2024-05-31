import { useQuery } from "@tanstack/react-query";
import spotifyApi from "../config/spotifyApi";
import { Album } from "@/constants/types";

export const getNewAlbum = async () => {
  const res = await spotifyApi.get(`/browse/new-releases`, {
    params: { limit: 10 },
  });
  return res;
};

export const useGetNewAlbum = () => {
  return useQuery({
    queryFn: () => getNewAlbum(),
    queryKey: ["getNewAlbum"],
    select: (res) => {
      const albumList: Album[] = res.data.albums.items;
      return albumList.map(({ id, name, artists, images, release_date }) => ({
        id,
        name,
        artists: artists.map(({ name }) => name),
        images: images[0].url,
        release_date,
      }));
    },
  });
};
