import React from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui";
import StarList from "@/components/@common/starList";
import { Review } from "@/constants/review";

interface NewReviewCardProps {
  review: Review;
}

const NewReviewCard = ({ review }: NewReviewCardProps) => {
  const { username, title, thumbnail, rating, description, createdAt } = review;
  return (
    <Card className="p-4">
      <CardTitle className="mb-2">{title}</CardTitle>
      <StarList rating={rating} />
      <CardDescription className="mb-2">{description}</CardDescription>
      <CardFooter className="flex items-center">
        <Avatar className="w-8 h-8 inline-flex mr-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardDescription>{username}</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default NewReviewCard;
