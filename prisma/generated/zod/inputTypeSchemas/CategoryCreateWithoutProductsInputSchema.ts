import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutCategoryInputSchema } from './RestaurantCreateNestedOneWithoutCategoryInputSchema';

export const CategoryCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutProductsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutCategoryInputSchema)
}).strict();

export default CategoryCreateWithoutProductsInputSchema;
