import React from "react";
import { reviewData } from "@/constants/review";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "../ui";
import NewReviewCard from "./newReviewCard";

const NewReviewSection = () => {
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
              <NewReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default NewReviewSection;
