"use client";

import albumApis from "@/apis/domain/album.api.server";
import { Card } from "../ui";
import Image from "next/image";
import spotifyApi from "@/apis/config/spotifyApi.server";
import albumApisServer from "@/apis/domain/album.api.server";

export default function NewAlbumSection() {
  return (
    <section className="my-8">
      <h2 className="text-xl font-bold py-4">최신 발매 앨범</h2>
      {/* <Card>
        <Image src={} />
        <CardDescription className="mb-2">{description}</CardDescription>
        <CardFooter className="flex items-center">
          <Avatar className="w-8 h-8 inline-flex mr-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardDescription>{username}</CardDescription>
        </CardFooter>
      </Card> */}
    </section>
  );
}
