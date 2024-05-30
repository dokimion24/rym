import { getSpotifyAccessToken } from "@/apis/domain/auth.api.server";
import useAuthStore from "@/libs/store/useAuthStore";
import { useEffect } from "react";

const useSpotifyToken = () => {
  const { isSpotifyAccessToken, setSpotifyAccessToken } = useAuthStore();

  useEffect(() => {
    if (!isSpotifyAccessToken) {
      getSpotifyAccessToken().then(() => setSpotifyAccessToken(true));
    }
  }, [isSpotifyAccessToken]);
};

export default useSpotifyToken;
