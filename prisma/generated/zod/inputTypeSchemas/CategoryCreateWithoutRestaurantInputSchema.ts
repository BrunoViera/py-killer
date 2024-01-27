import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductCreateNestedManyWithoutCategoryInputSchema } from './ProductCreateNestedManyWithoutCategoryInputSchema';

export const CategoryCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoryCreateWithoutRestaurantInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string({ required_error: "Ingrese un nombre a la categoria",  }).min(3),
  description: z.string().optional().nullable(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryCreateWithoutRestaurantInputSchema;
