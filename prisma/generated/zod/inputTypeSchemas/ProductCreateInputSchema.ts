import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutProductInputSchema } from './RestaurantCreateNestedOneWithoutProductInputSchema';
import { CategoryCreateNestedOneWithoutProductsInputSchema } from './CategoryCreateNestedOneWithoutProductsInputSchema';

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  price: z.number().int(),
  name: z.string(),
  description: z.string().optional().nullable(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutProductInputSchema),
  Category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema).optional()
}).strict();

export default ProductCreateInputSchema;
