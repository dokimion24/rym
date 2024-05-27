import NewAlbumSection from "@/components/album/new-album-section";
import NewReviewSection from "@/components/review/new-review-section";
import albumApisServer from "@/apis/domain/album.api.server";
import authApisServer from "@/apis/domain/auth.api.server";

export default async function Home() {
  const data = await authApisServer.getSpotifyAccessToken();
  // console.log(data);

  return (
    <main className="pt-14 max-w-7xl mx-auto">
      <NewReviewSection />
      <NewAlbumSection />
    </main>
  );
}
