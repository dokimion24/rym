"use client";

import React, { useEffect, useState } from "react";
import { reviewData } from "@/constants/review";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "../ui";
import albumApis from "@/apis/album-apis";
import authApis from "@/apis/auth-apis";

const NewAlbumSection = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await authApis.getSpotifyAccessToken();
        setAlbums(res.albums); // 상태를 업데이트합니다.
      } catch (error) {
        console.error("앨범 데이터를 불러오는데 실패했습니다:", error);
      }
    };

    fetchAlbums();
  }, []);

  // 로딩 상태 혹은 에러 처리 등을 추가할 수 있습니다.
  if (!albums) return <div>로딩 중...</div>;
  return (
    <section className="my-8">
      <h2 className="text-xl font-bold py-4">최신 코멘트</h2>
    </section>
  );
};

export default NewAlbumSection;
