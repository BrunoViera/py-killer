import { Category } from "../../../../../prisma/generated/zod";

export default function useCategory() {
  const createCategory = (): Category => {
    return {
      id: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: false,
      name: "",
      description: "",
      restaurantId: 1,
    };
  };

  return {
    createCategory,
  };
}
