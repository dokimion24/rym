import albumApis from "@/apis/domain/album.api.server";
import { useQuery } from "@tanstack/react-query";

const useQueryNewAlbum = () => {
  return useQuery({
    queryKey: ["getNewAlbum"],
    queryFn: () => albumApis.getNewAlbum(),
  });
};

const albumQueries = {
  useQueryNewAlbum,
};

export default albumQueries;
