import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  isSpotifyAccessToken: boolean;
  setSpotifyAccessToken: (value: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isSpotifyAccessToken: false,
      setSpotifyAccessToken: (value: boolean) =>
        set({ isSpotifyAccessToken: value }),
    }),
    {
      name: "spotifyAccessToken",
      storage: createJSONStorage(() => sessionStorage),
      getStorage: () => sessionStorage,
    }
  )
);

export default useAuthStore;
