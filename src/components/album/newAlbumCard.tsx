"use client";

import React from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
  Avatar,
  AvatarImage,
  AvatarFallback,
  CardContent,
} from "@/components/ui";

import { Album } from "@/constants/types";
import Image from "next/image";

interface NewAlbumCardProps {
  album: Pick<Album, "id" | "name" | "release_date"> & {
    artists: string[];
    images: string;
  };
}

const NewAlbumCard = ({ album }: NewAlbumCardProps) => {
  const { name, artists, images, release_date } = album;

  return (
    <Card>
      <Image
        width={240}
        height={240}
        src={images}
        alt={`${name}-image`}
        style={{ borderRadius: "12px" }}
      />
      <CardTitle>{name}</CardTitle>
      <CardContent>
        <div>{artists}</div>
        <p>{release_date}</p>
      </CardContent>
      {/* <CardTitle className="mb-2">{title}</CardTitle>
      <CardDescription className="mb-2">{description}</CardDescription>
      <CardFooter className="flex items-center">
       
        <CardDescription>{username}</CardDescription>
      </CardFooter> */}
    </Card>
  );
};

export default NewAlbumCard;
