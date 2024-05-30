import { getSpotifyAccessToken } from "@/apis/domain/auth.api.server";
import AuthWrapper from "@/components/@common/authWrapper";
import SpotifyToken from "@/components/@common/spotifyToken";
import NewAlbumSection from "@/components/album/new-album-section";
import NewReviewSection from "@/components/review/new-review-section";

export default async function Home() {
  return (
    <main className="pt-14 max-w-7xl mx-auto">
      <SpotifyToken />
      <NewReviewSection />
      <NewAlbumSection />
    </main>
  );
}
