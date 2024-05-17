import { Star, StarHalf } from "lucide-react";

interface StartListProps {
  rating: number;
}

const StarList = ({ rating }: StartListProps) => {
  return (
    <div className="relative">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} fill="#111" strokeWidth={0} />
        ))}
      </div>
      <div className="flex gap-1 absolute top-0">
        <Star fill="yellow" strokeWidth={0} />
        <Star fill="yellow" strokeWidth={0} />
        <StarHalf fill="yellow" strokeWidth={0} />
      </div>
    </div>
  );
};

export default StarList;
