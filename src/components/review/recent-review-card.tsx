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
} from "@/components/ui";
import StarList from "@/components/@common/star-list";
import { Review } from "@/constants/review";

interface RecentReviewCardProps {
  review: Review;
}

const RecentReviewCard = ({ review }: RecentReviewCardProps) => {
  const { username, title, thumbnail, rating, description, createdAt } = review;
  return (
    <Card>
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

export default RecentReviewCard;
