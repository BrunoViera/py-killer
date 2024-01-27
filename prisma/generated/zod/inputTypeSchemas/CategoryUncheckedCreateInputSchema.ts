import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutCategoryInputSchema } from './ProductUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string({ required_error: "Ingrese un nombre a la categoria",  }).min(3),
  description: z.string().optional().nullable(),
  restaurantId: z.number().int(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryUncheckedCreateInputSchema;
