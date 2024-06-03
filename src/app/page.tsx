import SpotifyToken from "@/components/@common/spotifyToken";
import NewAlbumSection from "@/components/album/newAlbumSection";
import NewReviewSection from "@/components/review/newReviewSection";

export default async function Home() {
  return (
    <main className="pt-14 max-w-7xl mx-auto">
      <SpotifyToken />
      <NewReviewSection />
      <NewAlbumSection />
    </main>
  );
}
