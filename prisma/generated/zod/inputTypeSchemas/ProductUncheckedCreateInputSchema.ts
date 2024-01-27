import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  price: z.number().int(),
  name: z.string(),
  description: z.string().optional().nullable(),
  restaurantId: z.number().int(),
  categoryId: z.number().int().optional().nullable()
}).strict();

export default ProductUncheckedCreateInputSchema;
