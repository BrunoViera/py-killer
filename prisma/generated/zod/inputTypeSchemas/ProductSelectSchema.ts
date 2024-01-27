import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  price: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
  Category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
}).strict()

export default ProductSelectSchema;
