import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutProductInputSchema } from './RestaurantCreateNestedOneWithoutProductInputSchema';

export const ProductCreateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductCreateWithoutCategoryInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  price: z.number().int(),
  name: z.string(),
  description: z.string().optional().nullable(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutProductInputSchema)
}).strict();

export default ProductCreateWithoutCategoryInputSchema;
