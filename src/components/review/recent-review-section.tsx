import React from "react";
import { reviewData } from "@/constants/review";
import RecentReviewCard from "./recent-review-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "../ui";

const RecentReviewSection = () => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-bold py-4">최신 코멘트</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="flex gap-4">
          {reviewData.map((review) => (
            <CarouselItem key={review.id}>
              <RecentReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default RecentReviewSection;
