import { Product } from "@prisma/client";

export default function useProduct() {
  const createProduct = (): Product => {
    return {
      id: 0,
      price: 0,
      categoryId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: false,
      name: "",
      description: "",
      restaurantId: 1,
    };
  };

  return {
    createProduct,
  };
}
