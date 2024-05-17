export interface Review {
  id: number;
  username: string;
  title: string;
  thumbnail: string;
  rating: number;
  description: string;
  createdAt: Date;
}

export const reviewData: Review[] = [
  {
    id: 1,
    username: "고양이",
    title: "Donuts",
    thumbnail: "",
    rating: 3.5,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi placeat quasi, distinctio omnis consectetur sapiente, modi cupiditate veritatis repellendus nisi numquam neque eveniet sint recusandae maiores aspernat",
    createdAt: new Date("2023-01-01T10:00:00Z"),
  },
  {
    id: 2,
    username: "고양이",
    title: "Donuts",
    thumbnail: "",
    rating: 3.5,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi placeat quasi, distinctio omnis consectetur sapiente, modi cupiditate veritatis repellendus nisi numquam neque eveniet sint recusandae maiores aspernat",
    createdAt: new Date("2024-05-01T10:00:00Z"),
  },
  {
    id: 3,
    username: "고양이",
    title: "Donuts",
    thumbnail: "",
    rating: 2.5,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi placeat quasi, distinctio omnis consectetur sapiente, modi cupiditate veritatis repellendus nisi numquam neque eveniet sint recusandae maiores aspernat",
    createdAt: new Date("2024-05-20T10:00:00Z"),
  },
  {
    id: 4,
    username: "고양이",
    title: "Donuts",
    thumbnail: "",
    rating: 3.5,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi placeat quasi, distinctio omnis consectetur sapiente, modi cupiditate veritatis repellendus nisi numquam neque eveniet sint recusandae maiores aspernat",
    createdAt: new Date("2024-05-18T10:00:00Z"),
  },
  {
    id: 5,
    username: "거북이",
    title: "Donuts",
    thumbnail: "",
    rating: 4,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi placeat quasi, distinctio omnis consectetur sapiente, modi cupiditate veritatis repellendus nisi numquam neque eveniet sint recusandae maiores aspernat",
    createdAt: new Date("2024-05-18T10:00:00Z"),
  },
  {
    id: 6,
    username: "고릴라",
    title: "Donuts",
    thumbnail: "",
    rating: 4,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi placeat quasi, distinctio omnis consectetur sapiente, modi cupiditate veritatis repellendus nisi numquam neque eveniet sint recusandae maiores aspernat",
    createdAt: new Date("2024-05-18T10:00:00Z"),
  },
];
