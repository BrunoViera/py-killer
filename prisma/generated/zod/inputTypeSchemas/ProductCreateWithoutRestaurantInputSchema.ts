import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CategoryCreateNestedOneWithoutProductsInputSchema } from './CategoryCreateNestedOneWithoutProductsInputSchema';

export const ProductCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.ProductCreateWithoutRestaurantInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  price: z.number().int(),
  name: z.string(),
  description: z.string().optional().nullable(),
  Category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema).optional()
}).strict();

export default ProductCreateWithoutRestaurantInputSchema;
