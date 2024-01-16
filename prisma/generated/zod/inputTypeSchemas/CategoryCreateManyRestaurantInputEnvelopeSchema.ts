import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CategoryCreateManyRestaurantInputSchema } from './CategoryCreateManyRestaurantInputSchema';

export const CategoryCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.CategoryCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoryCreateManyRestaurantInputSchema),z.lazy(() => CategoryCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CategoryCreateManyRestaurantInputEnvelopeSchema;
