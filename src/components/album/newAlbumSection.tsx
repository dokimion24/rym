"use client";

import { useGetNewAlbum } from "@/apis/domain/album.api.client";
import {
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "../ui";
import NewAlbumCard from "./newAlbumCard";

export default function NewAlbumSection() {
  const { data: albumList } = useGetNewAlbum();

  console.log(albumList);
  return (
    <section className="my-8">
      <h2 className="text-xl font-bold py-4">최신 발매 앨범</h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="flex gap-4">
          {albumList?.map((album) => (
            <CarouselItem key={album.id} className="basis-[20%]">
              <NewAlbumCard album={album} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </section>
  );
}
