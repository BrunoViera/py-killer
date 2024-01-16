import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  restaurantId: z.number().int()
}).strict();

export default CategoryCreateManyInputSchema;