import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductCreateNestedManyWithoutCategoryInputSchema } from './ProductCreateNestedManyWithoutCategoryInputSchema';
import { RestaurantCreateNestedOneWithoutCategoryInputSchema } from './RestaurantCreateNestedOneWithoutCategoryInputSchema';

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoryInputSchema).optional(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutCategoryInputSchema)
}).strict();

export default CategoryCreateInputSchema;
