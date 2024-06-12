import React from "react";

interface AlbumDetails {
  params: { id: string };
}

export default function AlbumDetails({ params }: AlbumDetails) {
  return <div>{params.id}</div>;
}
