import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RestaurantOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RestaurantOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RestaurantOrderByRelationAggregateInputSchema;
