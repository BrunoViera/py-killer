import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  restaurantId: z.number().int(),
  categoryId: z.number().int().optional().nullable()
}).strict();

export default ProductCreateManyInputSchema;
